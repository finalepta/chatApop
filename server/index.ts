import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { app, server } from "./sockets/socket.js";
import router from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const mongoUri: string = process.env.MONGODB_URI as string;

app.use(express.json());
app.use(cors());
app.use("/api", router);

async function init(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    server.listen(PORT, (): void => {
      console.log(`server runs on ${PORT} port`);
    });
  } catch (e) {
    console.log(e);
  }
}
init();
