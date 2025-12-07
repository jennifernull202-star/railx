import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const category = searchParams.get("category");

    if (!slug || !category)
      return NextResponse.json(
        { error: "Missing slug or category" },
        { status: 400 }
      );

    const listing = await Listing.findOne({
      slug,
      category,
      status: "active",
    }).lean();

    if (!listing)
      return NextResponse.json(
        { error: "Listing not found" },
        { status: 404 }
      );

    return NextResponse.json(listing);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
