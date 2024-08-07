import { z } from 'zod'

export const signUpType = z.object({
    email: z.string(),
    password: z.string()
})

export const userDetail = z.object({
    name: z.string(),
    number: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string()
})