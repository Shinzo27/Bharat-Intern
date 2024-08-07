import { z } from 'zod'

export const signUpType = z.object({
    email: z.string(),
    password: z.string()
})