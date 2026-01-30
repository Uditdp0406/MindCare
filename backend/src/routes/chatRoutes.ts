import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { sendMessage } from "../controllers/chatController";

const router = Router();

router.post(
  "/send",
  authMiddleware as any,
  sendMessage as any
);

export default router;
