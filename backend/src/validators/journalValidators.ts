import { body, query } from "express-validator";

export const addJournalValidator = [
  body("moodScore")
    .isInt({ min: 1, max: 10 })
    .withMessage("Mood score must be between 1 and 10"),

  body("text").notEmpty().withMessage("Text is required"),
];

export const listJournalValidator = [
  query("from").optional().isISO8601().withMessage("from must be a valid date"),
  query("to").optional().isISO8601().withMessage("to must be a valid date"),
];
