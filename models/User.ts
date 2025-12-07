import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,

    role: {
      type: String,
      enum: ["buyer", "seller", "contractor", "admin"],
      default: "buyer",
    },

    // Stripe billing
    stripeCustomerId: String,
    subscriptionStatus: { type: String, default: "none" },
    subscriptionPlan: { type: String, default: "" },

    // Profile details
    phone: String,
    company: String,
    avatar: String,

    // Verification flags
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
