import express from "express";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js"
import connectToMOngoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config()

const PORT=process.env.PORT||5000
const app=express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get("/",(req,res)=>{
//     res.send("HELLO WORLD")
// })

app.listen(PORT,()=>{
    connectToMOngoDB();
    console.log(`Server is Running on Port ${PORT}`)
})