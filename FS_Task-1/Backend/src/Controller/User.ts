import { Request, Response } from "express"
import zod from 'zod'
import { signUpType } from '../Utils/Types'
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { emitWarning } from "process"

const prisma = new PrismaClient()
const JWT_SECRET = "Shinzo27"

export const signup = async(req: Request,res: Response)=>{
    const bodyParser = req.body
    const parsedBody = signUpType.safeParse(bodyParser)

    if(parsedBody.error) return res.status(400).json({
        message: "Enter Data Correctly!"
    })

    const hashedPassword = await bcrypt.hash(bodyParser.password, 10)

    const user = await prisma.users.create({
        data: {
            email: bodyParser.email,
            password: hashedPassword
        }
    })

    const payload = {
        email: bodyParser.email
    }

    if(user) {
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h'})

        res.cookie('user', token)
        return res.json({
            message: "User Registered!"
        })
    } else {
        return res.status(400).json({
            message: "Something went wrong!"
        })
    }
}

export const signin = async(req: Request,res: Response)=>{
    const bodyParser = req.body
    const parsedBody = signUpType.safeParse(bodyParser)

    if(parsedBody.error) return res.status(400).json({
        message: "Enter Data Correctly!"
    })
    
    const user = await prisma.users.findFirst({
        where:{
            email: bodyParser.email
        }
    })

    if(!user) return res.status(400).json({
        message: "User not found!"
    })

    const comparePassword = await bcrypt.compare(bodyParser.password, user.password)

    if(!comparePassword) return res.status(400).json({
        message: "Password did not match!"
    })

    const payload = {
        email: bodyParser.email
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h'})

    res.cookie('user', token)
    return res.json({
        success: true,
        message: "User Logged in!",
        email: bodyParser.email,
        token: token
    })
}

export const logout = (req:Request, res:Response) => {
    res
    .status(201)
    .cookie("user", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Customer Logged Out Successfully.",
    });
}