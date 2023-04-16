import { Request, Response, Router } from "express";
import authMw from "../middlewares/authMw.js";
import Chat from "../models/chatModel.js";

const router = Router();

router.get("/:id", authMw, async (req: Request, res: Response) => {
  try {
    const room = await Chat.findOne({ name: req.params.id });
    if (!room) return res.status(404).json("Room not found");
    return res.json({ room, user: req.user.username });
  } catch (e) {
    console.log(e);
  }
});

export default router;
