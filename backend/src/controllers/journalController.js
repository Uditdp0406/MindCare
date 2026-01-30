"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJournal = addJournal;
exports.listJournals = listJournals;
exports.getTodayJournal = getTodayJournal;
const express_1 = require("express");
const journalEntry_1 = __importDefault(require("../models/journalEntry"));
const authMiddleware_1 = require("../middleware/authMiddleware");
async function addJournal(req, res) {
    try {
        const { moodScore, text } = req.body;
        if (!moodScore || !text) {
            return res
                .status(400)
                .json({ message: "moodScore and text are required" });
        }
        const entry = await journalEntry_1.default.create({
            user: req.user._id,
            moodScore,
            text,
            date: new Date(), // store today's date
        });
        return res.status(201).json({
            message: "Journal entry added",
            entry,
        });
    }
    catch (err) {
        console.error("Add journal error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
/**
 * GET /api/journals/list?from=2025-01-01&to=2025-01-31
 */
async function listJournals(req, res) {
    try {
        const { from, to } = req.query;
        const query = { user: req.user._id };
        if (from || to) {
            query.date = {};
            if (from)
                query.date.$gte = new Date(from);
            if (to)
                query.date.$lte = new Date(to);
        }
        const entries = await journalEntry_1.default.find(query).sort({ date: -1 });
        return res.json({ entries });
    }
    catch (err) {
        console.error("List journal error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
/**
 * GET /api/journals/today
 */
async function getTodayJournal(req, res) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const entry = await journalEntry_1.default.findOne({
            user: req.user._id,
            date: { $gte: today },
        });
        return res.json({ entry });
    }
    catch (err) {
        console.error("Today journal error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
//# sourceMappingURL=journalController.js.map