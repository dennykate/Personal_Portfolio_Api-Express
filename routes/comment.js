import express from "express";
import { createComment } from "../controllers/comment.js";

const router = express.Router();

router.post("/", createComment);

export default router;
