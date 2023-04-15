import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authMw from "../middlewares/authMw.js";
import Chat from "../models/chatModel.js";

const router = Router();
dotenv.config();
declare global {
  namespace Express {
    interface Request {
      user: {
        username: string;
        room: string;
      };
    }
  }
}

function generateToken(username: string, room: string) {
  return jwt.sign({ username, room }, process.env.SECRET_KEY!, {
    expiresIn: "7d",
  });
}

router.post("/create", async (req: Request, res: Response) => {
  try {
    const { username, name, password } = req.body;
    const room = await Chat.findOne({ name });
    if (room) {
      return res.json({ message: "Room with this name already exists" });
    }
    const chat = await Chat.create({
      users: [],
      name,
      password: password ? password : undefined,
    });
    chat.users.push({ username: username });
    await chat.save();
    const token = generateToken(username, name);
    return res.json({ token });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/join", async (req: Request, res: Response) => {
  try {
    const { username, name, password } = req.body;
    const room = await Chat.findOne({ name });
    if (!room) return res.json({ message: "Room not found" });
    if (room.users.some(el => el.username === username))
      return res.json({ message: "This username is already taken" });
    if (room.password !== password)
      return res.json({ message: "Incorrect password" });
    room.users.push({ username });
    await room.save();
    const token = generateToken(username, name);
    return res.json({ token });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/check", authMw, async (req: Request, res: Response) => {
  try {
    const token = generateToken(req.user.username, req.user.room);
    if (!token)
      return res.status(403).json({ message: "User is not authorized" });
    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e });
  }
});

export default router;
