import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import Watchlist from "@/lib/models/Watchlist";
import connectDB from "@/lib/db";

export async function POST(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { listingId } = await req.json();

    await Watchlist.findOneAndDelete({ userId: token.id, listingId });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Remove from watchlist error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
