import mongoose, { Schema } from "mongoose";

const SellerSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    companyName: { type: String, default: "" },
    contactName: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    website: { type: String, default: "" },
    location: { type: String, default: "" },
    bio: { type: String, default: "" },
    logoUrl: { type: String, default: "" },

    certifications: [
      {
        name: String,
        url: String,
        uploadedAt: Date,
      },
    ],

    savedSearches: [
      {
        query: String,
        filters: Object,
      },
    ],

    watchlist: [String],

    metrics: {
      views: { type: Number, default: 0 },
      inquiries: { type: Number, default: 0 },
      monthlyViews: { type: Number, default: 0 },
      monthlyInquiries: { type: Number, default: 0 },
    },

    subscriptionTier: {
      type: String,
      enum: ["free", "basic", "pro", "enterprise"],
      default: "free",
    },

    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Seller || mongoose.model("Seller", SellerSchema);
