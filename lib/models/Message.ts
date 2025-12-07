import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    threadId: { type: String, required: true },
    senderId: { type: String, required: true },
    body: { type: String, default: "" },
    attachmentUrl: { type: String, default: "" },
    read: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
