import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import ChatSession from "../models/chatSession";
import { detectCrisis } from "../services/crisisDetection";
import { generateBotReply } from "../services/chatbotService";

export async function sendMessage(req: AuthRequest, res: Response) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // 1. Crisis check
    const crisis = detectCrisis(message);
    if (crisis.isCrisis) {
      return res.json({
        crisis: true,
        level: crisis.level,
        reply: crisis.message,
      });
    }

    // 2. Get or create chat session
    let session = await ChatSession.findOne({ user: req.user._id });

    if (!session) {
      session = await ChatSession.create({
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
    const botReply = await generateBotReply(session.messages);

    // 5. Save bot reply
    session.messages.push({
      sender: "bot",
      message: botReply,
      timestamp: new Date(),
    });

    await session.save();

    return res.json({ reply: botReply });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
