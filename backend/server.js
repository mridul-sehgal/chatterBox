import express from "express";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js"
import connectToMOngoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import { app,server } from "./socket/socket.js";

// const app=express();
const PORT=process.env.PORT||5000

dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get("/",(req,res)=>{
//     res.send("HELLO WORLD")
// })

server.listen(PORT,()=>{
    connectToMOngoDB();
    console.log(`Server is Running on Port ${PORT}`)
})