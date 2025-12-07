import mongoose from "mongoose";

const WatchlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
    lastKnownPrice: Number,
  },
  { timestamps: true }
);

WatchlistSchema.index({ userId: 1, listingId: 1 }, { unique: true });

export default mongoose.models.Watchlist ||
  mongoose.model("Watchlist", WatchlistSchema);
