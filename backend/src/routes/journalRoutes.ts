import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  addJournal,
  listJournals,
  getTodayJournal,
} from "../controllers/journalController";
import {
  addJournalValidator,
  listJournalValidator,
} from "../validators/journalValidators";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.post(
  "/add",
  authMiddleware as any,
  addJournalValidator,
  validateRequest,
  addJournal as any
);

router.get(
  "/list",
  authMiddleware as any,
  listJournalValidator,
  validateRequest,
  listJournals as any
);

router.get("/today", authMiddleware as any, getTodayJournal as any);

export default router;
