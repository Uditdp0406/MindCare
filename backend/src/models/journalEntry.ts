import { Schema, model, Document, Types } from "mongoose";

export interface IJournalEntry extends Document {
  user: Types.ObjectId;
  moodScore: number;
  text: string;
  date: Date;
}

const JournalEntrySchema = new Schema<IJournalEntry>(
  {
    user: {
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

export default model<IJournalEntry>("JournalEntry", JournalEntrySchema);
