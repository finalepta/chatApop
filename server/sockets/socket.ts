import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  console.log("connected");

  socket.on("join", roomId => {
    socket.join(roomId);

    socket.emit("message", {
      data: "выфавыфа",
    });
  });

  io.on("disconnect", () => {
    console.log("disconnected");
  });
});
export { server, app };
