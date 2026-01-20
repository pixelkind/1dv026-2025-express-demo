import express from "express";
import { PostController } from "../controllers/PostController.js";

export const router = express.Router();

const controller = new PostController();

router.param("id", (req, res, next, id) =>
  controller.loadPost(req, res, next, id),
);

router.get("/", (req, res, next) => controller.index(req, res, next));
router.get("/create", (req, res, next) => controller.create(req, res, next));
router.get("/:id", (req, res, next) => controller.detail(req, res, next));
