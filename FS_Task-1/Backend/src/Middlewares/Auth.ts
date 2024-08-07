import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

interface AuthenticatedRequest extends Request {
    user?: string | object
}

const JWT_SECRET = "Shinzo27"

export const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.user

    if(!token) return res.status(400).json({
        message: "User is not authenticated!"
    })

    const verify = jwt.verify(token, JWT_SECRET)

    if(!verify) return res.status(400).json({
        message: "Something went wrong!"
    })

    req.user = verify
    next()
}