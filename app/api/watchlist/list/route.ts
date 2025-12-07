import Watchlist from "@/lib/models/Watchlist";
import Listing from "@/lib/models/Listing";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const items = await Watchlist.find({ userId: token.id })
      .populate("listingId")
      .lean();

    return NextResponse.json(items);
  } catch (err: any) {
    console.error("Get watchlist error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
