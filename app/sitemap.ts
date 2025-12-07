import Listing from "@/lib/models/Listing";
import User from "@/lib/models/User";
import connectDB from "@/lib/db";

export default async function sitemap() {
  await connectDB();

  const base = process.env.NEXT_PUBLIC_SITE_URL;

  const listings = await Listing.find({ status: "active" }).lean();
  const sellers = await User.find({ role: "seller" }).lean();

  const staticPages = [
    "",
    "/marketplace",
    "/pricing",
    "/advertisers",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const categoryPages = [
    "equipment",
    "tools",
    "rail",
    "rentals",
    "services",
    "real-estate",
  ].map((c) => ({
    url: `${base}/marketplace/${c}`,
    lastModified: new Date(),
  }));

  const listingPages = listings.map((l: any) => ({
    url: `${base}/marketplace/${l.category}/${l.slug}`,
    lastModified: l.updatedAt || l.createdAt,
  }));

  const sellerPages = sellers.map((s: any) => ({
    url: `${base}/seller/${s._id}`,
    lastModified: s.updatedAt || s.createdAt,
  }));

  return [...staticPages, ...categoryPages, ...listingPages, ...sellerPages];
}
