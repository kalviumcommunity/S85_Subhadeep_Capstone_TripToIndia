import express from "express"
import dotenv from "dotenv"

dotenv.config({ path: './config/.env' })

const app=express()
app.use(express.json())

const PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.send("HI WELCOME TO MY WEBSITE")
})
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})