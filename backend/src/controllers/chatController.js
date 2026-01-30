"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const chatSession_1 = __importDefault(require("../models/chatSession"));
const crisisDetection_1 = require("../services/crisisDetection");
const chatbotService_1 = require("../services/chatbotService");
async function sendMessage(req, res) {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ message: "Message is required" });
        }
        // 1. Crisis check
        const crisis = (0, crisisDetection_1.detectCrisis)(message);
        if (crisis.isCrisis) {
            return res.json({
                crisis: true,
                level: crisis.level,
                reply: crisis.message,
            });
        }
        // 2. Get or create chat session
        let session = await chatSession_1.default.findOne({ user: req.user._id });
        if (!session) {
            session = await chatSession_1.default.create({
                user: req.user._id,
                messages: [],
            });
        }
        // 3. Add user message
        session.messages.push({
            sender: "user",
            message,
            timestamp: new Date(),
        });
        // 4. Get bot response
        const botReply = await (0, chatbotService_1.generateBotReply)(session.messages);
        // 5. Save bot reply
        session.messages.push({
            sender: "bot",
            message: botReply,
            timestamp: new Date(),
        });
        await session.save();
        return res.json({ reply: botReply });
    }
    catch (err) {
        console.error("Chat error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
//# sourceMappingURL=chatController.js.map