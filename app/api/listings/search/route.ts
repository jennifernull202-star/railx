import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      q,
      category,
      minPrice,
      maxPrice,
      state,
      limit = 30,
      page = 1,
    } = body;

    const query: any = {
      status: "active",
    };

    if (q) {
      query.$text = { $search: q };
    }

    if (category) {
      query.category = category;
    }

    if (state) {
      query.state = state.toUpperCase();
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const listings = await Listing.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json(listings);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Search error", details: err.message },
      { status: 500 }
    );
  }
}
