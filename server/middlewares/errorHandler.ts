import { Request, Response, NextFunction } from "express";
import ApiError from "../errors/ApiError.js";
export default function (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return res.sendStatus(500);
}
