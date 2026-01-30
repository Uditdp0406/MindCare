"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatMessageSchema = new mongoose_1.Schema({
    sender: {
        type: String,
        enum: ["user", "bot"],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: () => new Date(),
    },
}, { _id: false });
const ChatSessionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    messages: [ChatMessageSchema],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("ChatSession", ChatSessionSchema);
//# sourceMappingURL=chatSession.js.map