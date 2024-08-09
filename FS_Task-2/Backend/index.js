import express from 'express'
import userRouter from './Routes/Users.js'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = process.env.PORT | 8000

mongoose.connect("mongodb://127.0.0.1:27017/wealthy-life").then(()=>console.log("MongoDB Connected"))

config({path: './.env'})

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', userRouter)

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log("Server started at port 8000");
})