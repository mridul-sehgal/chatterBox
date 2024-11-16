import {Server} from 'socket.io'
import http from "http";
import express from"express"
const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        methods:["GET","POST"]
    }
});

const userSocketMap={} //{userId: socketId}

 export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
 }

io.on('connection',(socket)=>{//socket is gonna be the user that is connected
    console.log("a user is connected",socket.id)

    const userId=socket.handshake.query.userId;
    if(userId!="undefined") userSocketMap[userId]=socket.id

    //io.emit() is used to send events to all connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    //socket.on() is used to listen to the events both on the client and the server side
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})

export{app,io,server}