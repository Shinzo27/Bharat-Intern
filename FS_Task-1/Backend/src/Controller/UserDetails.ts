import { Response, Request, NextFunction } from "express"
import { userDetail } from '../Utils/Types'
import { PrismaClient } from "@prisma/client"

interface AuthenticatedRequest extends Request {
    user?: {
        email: string,
        iat: number,
        exp: number
    }
}

const prisma = new PrismaClient()

export const enterUserDetail = async(req: AuthenticatedRequest,res: Response,next: NextFunction) => {
    const body = req.body
    const parsedBody = userDetail.safeParse(body)

    if(parsedBody.error) return res.status(400).json({
        message: "Enter Details Correctly!"
    })

    const email = req.user?.email

    const user = await prisma.users.findFirst({
        where: {
            email
        }
    })

    if(!user) return res.status(400).json({
        message: "User not authenticated!"
    })

    const details = await prisma.userdetails.create({
        data: {
            name: parsedBody.data.name,
            number: parsedBody.data.number,
            address: parsedBody.data.address,
            city: parsedBody.data.city,
            state: parsedBody.data.state,
            country: parsedBody.data.country,
            userId: user.id
        }
    })

    if(details){
        return res.status(200).json({
            message: "User details added successfully!"
        }) 
    }else {
        return res.status(400).json({
            message: "Something went wrong!"
        })
    }
}

export const getDetais = async(req:AuthenticatedRequest, res: Response, next: NextFunction) => {
    const email = req.user?.email

    const user = await prisma.users.findFirst({
        where: {
            email
        }
    })

    const userDetails = await prisma.userdetails.findFirst({
        where: {
            userId: user?.id
        }
    })
    
    if(!userDetails) {
        return res.status(400).json({
            message: "Something went wrong!"
        })
    }

    return res.status(200).json({
        userDetails
    })
}