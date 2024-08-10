import express from 'express'
import userRouter from './Routes/Users.js'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import transactionRouter from './Routes/Transaction.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT | 8000

mongoose.connect("mongodb://127.0.0.1:27017/wealthy-life").then(()=>console.log("MongoDB Connected"))

config({path: './.env'})

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/transaction', transactionRouter)

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log("Server started at port 8000");
})