import { Request, Response } from "express";
import JournalEntry from "../models/journalEntry";
import { AuthRequest } from "../middleware/authMiddleware";

interface AddJournalBody {
  moodScore: number;
  text: string;
}

export async function addJournal(
  req: AuthRequest<{}, {}, AddJournalBody>,
  res: Response
) {
  try {
    const { moodScore, text } = req.body;

    if (!moodScore || !text) {
      return res
        .status(400)
        .json({ message: "moodScore and text are required" });
    }

    const entry = await JournalEntry.create({
      user: req.user._id,
      moodScore,
      text,
      date: new Date(), // store today's date
    });

    return res.status(201).json({
      message: "Journal entry added",
      entry,
    });
  } catch (err) {
    console.error("Add journal error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * GET /api/journals/list?from=2025-01-01&to=2025-01-31
 */
export async function listJournals(req: AuthRequest, res: Response) {
  try {
    const { from, to } = req.query;

    const query: any = { user: req.user._id };

    if (from || to) {
      query.date = {};
      if (from) query.date.$gte = new Date(from as string);
      if (to) query.date.$lte = new Date(to as string);
    }

    const entries = await JournalEntry.find(query).sort({ date: -1 });

    return res.json({ entries });
  } catch (err) {
    console.error("List journal error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * GET /api/journals/today
 */
export async function getTodayJournal(req: AuthRequest, res: Response) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const entry = await JournalEntry.findOne({
      user: req.user._id,
      date: { $gte: today },
    });

    return res.json({ entry });
  } catch (err) {
    console.error("Today journal error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
