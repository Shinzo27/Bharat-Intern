import express from 'express'
import { signup } from '../Controllers/Users.js'

const router = express.Router()

router.post('/signup', signup)

export default router