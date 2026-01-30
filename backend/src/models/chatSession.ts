import { Schema, model, Document, Types } from "mongoose";

export interface IChatMessage {
  sender: "user" | "bot";
  message: string;
  timestamp: Date;
}

export interface IChatSession extends Document {
  user: Types.ObjectId;
  messages: IChatMessage[];
}

const ChatMessageSchema = new Schema<IChatMessage>(
  {
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
  },
  { _id: false }
);

const ChatSessionSchema = new Schema<IChatSession>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    messages: [ChatMessageSchema],
  },
  { timestamps: true }
);

export default model<IChatSession>("ChatSession", ChatSessionSchema);
