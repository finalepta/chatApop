import { Router } from "express";
import mainRouter from "./main.js";
const router = Router();

router.use("/", mainRouter);

export default router;
