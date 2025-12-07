import Listing from "@/lib/models/Listing";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { north, south, east, west, filters } = await req.json();

    const query: any = {
      "location.lat": { $gte: south, $lte: north },
      "location.lng": { $gte: west, $lte: east },
    };

    if (filters?.category) {
      query.category = filters.category;
    }

    if (filters?.minPrice || filters?.maxPrice) {
      query.price = {};
      if (filters.minPrice) query.price.$gte = filters.minPrice;
      if (filters.maxPrice) query.price.$lte = filters.maxPrice;
    }

    if (filters?.minAcreage) {
      query["realEstate.acreage"] = { $gte: filters.minAcreage };
    }

    if (filters?.maxAcreage) {
      query["realEstate.acreage"] = {
        ...query["realEstate.acreage"],
        $lte: filters.maxAcreage,
      };
    }

    if (filters?.propertyType) {
      query["realEstate.propertyType"] = filters.propertyType;
    }

    if (filters?.railAccess) {
      query["realEstate.railAccess"] = filters.railAccess;
    }

    const listings = await Listing.find(query)
      .select("_id title slug category location price images")
      .limit(500)
      .lean();

    return NextResponse.json(listings);
  } catch (err: any) {
    console.error("Map search error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
