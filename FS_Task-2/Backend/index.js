import express from 'express'
import userRouter from './Routes/Users.js'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import User from './Models/Users.js'

const app = express()
const PORT = process.env.PORT | 8000

mongoose.connect("mongodb://127.0.0.1:27017/wealthy-life").then(()=>console.log("MongoDB Connected"))
config({path: './.env'})

app.use('/api/v1/user', userRouter)

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log("Server started at port 8000");
})