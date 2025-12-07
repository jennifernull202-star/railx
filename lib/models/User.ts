import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    company: { type: String },

    email: { type: String, unique: true, required: true },
    password: { type: String }, // hashed

    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },

    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
