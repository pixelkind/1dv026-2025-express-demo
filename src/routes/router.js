import express from "express";
import { router as postRouter } from "./postRouter.js";

export const router = express.Router();

router.use("/posts", postRouter);
