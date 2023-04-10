import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 5000;
const mongoUri: string = process.env.MONGODB_URI as string;

app.use(cors({ origin: "*" }));
app.use("/api", router);

async function init(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    app.listen(PORT, (): void => {
      console.log(`server runs on ${PORT} port`);
    });
  } catch (e) {
    console.log(e);
  }
}
init();
