import User from '../Models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async(req,res) => {
    const {name, email, password, totalIncome} = req.body
    
    if(!name || !email || !password) return res.status(200).json({
        success: false,
        message: "Enter details correctly!"
    })

    const ifExists = await User.findOne({
        email
    })

    if(ifExists) return res.status(200).json({
        success: false,
        message: "Email already exists!"
    })

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await User.create({
        email,
        name,
        password: hashedPassword,
        totalIncome: Number(totalIncome)
    })

    const payload = {
        email: email,
        name: name
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET)

    res.cookie('token', token)
    if(user) {
        return res.status(200).json({
            success: true,
            message: "User registered successfully!",
            username: name,
            email: email,
            token: token
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const signin = async(req,res) => {
    const { email, password } = req.body

    if(!email || !password) return res.status(200).json({
        success: false,
        message: "Enter details correctly!"
    })

    const ifExists = await User.findOne({
        email
    })

    if(!ifExists) return res.status(200).json({
        success: false,
        message: "User not found!"
    })

    const hashedPassword = await bcrypt.compare(password, ifExists.password)

    if(!hashedPassword) return res.status(400).json({
        success: false,
        message: "Password didn't matched!"
    })

    const payload = {
        email: email,
        name: ifExists.name
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET)

    res.cookie('token', token)
    if(hashedPassword) {
        return res.status(200).json({
            success: true,
            message: "User loggedin successfully!",
            username: ifExists.name,
            email: email,
            token: token
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const logout = () => {
    res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Logged Out Successfully.",
      });
}