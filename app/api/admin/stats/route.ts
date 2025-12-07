import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";
import User from "@/lib/models/User";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
  await connectDB();

  const token = await getToken({ req });
  if (!token || (token as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const activeListings = await Listing.countDocuments({ status: "active" });
  const suspendedListings = await Listing.countDocuments({ status: "suspended" });
  const users = await User.countDocuments();

  return NextResponse.json({
    activeListings,
    suspendedListings,
    users,
  });
}
