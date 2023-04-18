import express from "express";
import http from "http";
import { Server } from "socket.io";
import type { IMessage } from "../models/chatModel";
import Chat from "../models/chatModel.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", socket => {
  socket.on("join", async roomId => {
    // socket.join(roomId.room);
    const room = await Chat.findOne({ name: roomId.room });
    socket.on("sendMessage", async (msg: IMessage) => {
      console.log(1);
      console.log(msg);
      room?.messages.push(msg);
      await room?.save();
      socket.broadcast.emit("message", msg);
    });

    socket.on("disconnect", () => {
      socket.leave(roomId);
    });
  });
});
export { server, app };
