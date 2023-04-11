import { Request, Response, Router } from "express";
import Chat, { IChat } from "../models/chatModel.js";
const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  return res.json({ msg: true });
});

router.post("/", async (req: Request, res: Response) => {
  const { username, name, password } = req.body;
  const room = await Chat.create({
    users: [{ user: username }],
    name,
    password: password ? password : undefined,
  });
  await room.save();
  return res.json({ room });
});

export default router;
