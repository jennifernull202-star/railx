import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String, // "equipment" | "tools" | "rentals" | "real-estate" | "services"
    listingType: String, // "sale" | "rental" | "real-estate"
    price: Number,
    location: String,
    images: [String],

    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    attributes: {
      // rental
      rateDaily: Number,
      rateWeekly: Number,

      // real estate
      acreage: Number,
      zoning: String,
      buildingSize: Number,
      railAccess: Boolean,

      // equipment / rolling stock / hi-rail
      year: Number,
      manufacturer: String,
      mileage: Number,
    },

    slug: String,

    isActive: { type: Boolean, default: true },

    isBoosted: { type: Boolean, default: false }, // sponsored listings

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Search indexes
ListingSchema.index({ title: "text", description: "text", category: "text" });
ListingSchema.index({ category: 1, isActive: 1 });
ListingSchema.index({ sellerId: 1 });
ListingSchema.index({ slug: 1 });

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);
