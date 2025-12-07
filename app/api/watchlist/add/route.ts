import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import connectDB from "@/lib/db";
import Watchlist from "@/lib/models/Watchlist";

export async function POST(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { listingId } = await req.json();

    await Watchlist.findOneAndUpdate(
      { userId: token.id, listingId },
      { userId: token.id, listingId },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Add to watchlist error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
