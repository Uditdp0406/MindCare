"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JournalEntrySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    moodScore: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: () => new Date(),
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("JournalEntry", JournalEntrySchema);
//# sourceMappingURL=journalEntry.js.map