import jwt from 'jsonwebtoken'

export const userAuth = async() => {
    const token = req.cookies.token
    
    if(!token) return res.status(400).json({
        message: "User is not authenticated!"
    })
    
    const verify = jwt.verify(token, process.env.JWT_SECRET)

    if(!verify) return res.status(400).json({
        message: "Something went wrong!"
    })

    req.user = verify
    next()
}