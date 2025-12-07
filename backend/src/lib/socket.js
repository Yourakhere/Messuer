import { Server } from "socket.io";

let io;
const userSocketMap = {}; // Store userId → socketId

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "https://messuer.vercel.app",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId) {
      userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);

      for (const id in userSocketMap) {
        if (userSocketMap[id] === socket.id) {
          delete userSocketMap[id];
          break;
        }
      }

      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });
};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

export { io };

















// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// const io = new Server(server,{
//     cors:{
//       origin: "*",
//       //credentials: true,
//     }
// });

// export function getReceiverSocketId(userId) {
//        return userSocketMap[userId];
// }
 
// const userSocketMap={}; 
// io.on("connection",(socket)=>{
//     // console.log("A user connected",socket.id);

//     const userId =socket.handshake.query.userId
//     if(userId) userSocketMap[userId] = socket.id
        
    
//     io.emit("getOnlineUsers",Object.keys(userSocketMap));
     
//     socket.on("disconnect", () => {
//         console.log("A user disconnected",socket.id);
//         delete userSocketMap[userId];
//         io.emit("getOnlineUsers",Object.keys(userSocketMap));
//          });
// });

// export {io,app,server};
