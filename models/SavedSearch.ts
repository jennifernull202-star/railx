import mongoose from "mongoose";

const SavedSearchSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    query: Object, // { category, keywords, minPrice, maxPrice }
    lastNotifiedAt: { type: Date, default: null },
    lastRun: { type: Date, default: null },
  },
  { timestamps: true }
);

SavedSearchSchema.index({ userId: 1 });

export default mongoose.models.SavedSearch ||
  mongoose.model("SavedSearch", SavedSearchSchema);
