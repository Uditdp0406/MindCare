"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBotReply = generateBotReply;
const axios_1 = __importDefault(require("axios"));
async function generateBotReply(history) {
    const systemPrompt = `
You are a calm, supportive mental-health assistant.
Your tone must always be:
- gentle
- encouraging
- non-judgmental
- safe

Do NOT give medical or legal advice.
Do NOT suggest medications.
Encourage seeking help when needed.
  `;
    const messages = [
        { role: "system", content: systemPrompt },
        ...history.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.message,
        })),
    ];
    const resp = await axios_1.default.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4.1-mini",
        messages,
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
    });
    return resp.data.choices[0].message.content;
}
//# sourceMappingURL=chatbotService.js.map