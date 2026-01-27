import express from "express";
import { router as postRouter } from "./postRouter.js";
import { router as homeRouter } from "./homeRouter.js";
import { router as authRouter } from "./authRouter.js";

export const router = express.Router();

router.use("/posts", postRouter);
router.use("/auth", authRouter);
router.use("/", homeRouter);
