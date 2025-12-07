import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const sellerId = searchParams.get("sellerId");

    if (!sellerId) {
      return NextResponse.json(
        { error: "Missing sellerId" },
        { status: 400 }
      );
    }

    const listings = await Listing.find({
      sellerId,
      status: "active",
    })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(listings);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
