import express from "express";
import { router as postRouter } from "./postRouter.js";
import { router as homeRouter } from "./homeRouter.js";

export const router = express.Router();

router.use("/posts", postRouter);
router.use("/", homeRouter);
