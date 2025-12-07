import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";
import slugify from "@/lib/utils/slugify";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const {
      title,
      category,
      price,
      city,
      state,
      description,
      photos,
      attributes,
    } = body;

    if (!title || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(title) + "-" + Date.now();

    const listing = await Listing.create({
      title,
      slug,
      category,
      price,
      city,
      state,
      description,
      photos,
      attributes,
      sellerId: token.id,
    });

    return NextResponse.json({ success: true, listing });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
