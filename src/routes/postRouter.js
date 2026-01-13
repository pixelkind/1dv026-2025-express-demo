import express from "express";
import { PostController } from "../controllers/PostController.js";

export const router = express.Router();

const controller = new PostController();

router.get("/", (req, res, next) => controller.index(req, res, next));
