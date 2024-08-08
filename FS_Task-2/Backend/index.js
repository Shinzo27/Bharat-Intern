import express from 'express'

const app = express()
const PORT = 3000 | process.env.PORT

app.get('/', (req,res)=>{
    res.send("Hello world!")
})

app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:3000/");
})