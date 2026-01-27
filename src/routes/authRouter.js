import express from "express";
import { AuthController } from "../controllers/AuthController.js";

export const router = express.Router();

const controller = new AuthController();

router.get("/login", (req, res, next) => controller.loginForm(req, res, next));

router.post("/login", (req, res, next) => controller.login(req, res, next));
router.post("/logout", (req, res, next) => controller.logout(req, res, next));
