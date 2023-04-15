import { Request, Response, Router } from "express";
import Chat from "../models/chatModel.js";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const room = await Chat.findOne({ name: req.params.id });
    if (!room) return res.status(404).json("Room not found");
    return res.json({ room });
  } catch (e) {
    console.log(e);
  }
});

export default router;
