import mongoose, { Schema } from "mongoose";

const SavedSearchSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    query: Object, // { category, keywords, minPrice, maxPrice }
    lastNotifiedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.SavedSearch ||
  mongoose.model("SavedSearch", SavedSearchSchema);
