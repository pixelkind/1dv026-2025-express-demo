import express from "express";
import { PostController } from "../controllers/PostController.js";
import { requireAuth } from "../middleware/auth.js";

export const router = express.Router();

const controller = new PostController();

router.param("id", (req, res, next, id) =>
  controller.loadPost(req, res, next, id),
);

router.get("/", (req, res, next) => controller.index(req, res, next));
router.get("/create", requireAuth, (req, res, next) =>
  controller.create(req, res, next),
);
router.get("/:id", (req, res, next) => controller.detail(req, res, next));

router.post("/", requireAuth, (req, res, next) =>
  controller.createPost(req, res, next),
);
