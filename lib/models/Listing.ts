import mongoose, { Schema } from "mongoose";

const ListingSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    category: { type: String, required: true }, // equipment, tools, rail, rentals…
    categoryGroup: { type: String },

    price: Number,
    city: String,
    state: String,

    description: String,

    photos: [String],

    attributes: {
      type: Object,
      default: {},
    },

    // Seller Reference
    sellerId: { type: Schema.Types.ObjectId, ref: "User" },

    // System fields
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);
