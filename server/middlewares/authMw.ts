// @ts-nocheck
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError.js";
dotenv.config();

export default function (req: Request, res: Response, next: NextFunction) {
  if (req.method === "OPTIONS") {
    next();
  } else {
    try {
      const header = req.headers.authorization;
      if (!header) next(new ApiError.Unathorized());
      const token = header.split(" ")[1];
      if (!token) next(new ApiError.Unathorized());
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(e);
      next(new ApiError.Unathorized());
    }
  }
}
