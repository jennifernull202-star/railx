import mongoose, { Schema } from "mongoose";

const ThreadSchema = new Schema(
  {
    participants: [
      {
        userId: { type: String, required: true },
        role: { type: String, enum: ["buyer", "seller", "contractor"], required: true }
      }
    ],
    listingId: { type: String, default: null },
    contractorId: { type: String, default: null },
    lastMessage: { type: String, default: "" },
    lastSenderId: { type: String, default: "" },
    unread: { type: Map, of: Boolean, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.Thread || mongoose.model("Thread", ThreadSchema);
