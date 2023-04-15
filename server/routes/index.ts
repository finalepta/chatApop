import { Router } from "express";
import mainRouter from "./main.js";
import chatRouter from "./chat.js";
const router = Router();

router.use("/", mainRouter);
router.use("/chat", chatRouter);

export default router;
