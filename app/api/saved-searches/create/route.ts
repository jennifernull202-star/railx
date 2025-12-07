import SavedSearch from "@/lib/models/SavedSearch";
import connectDB from "@/lib/db";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { name, query } = await req.json();

    await SavedSearch.create({
      userId: token.id,
      name,
      query,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Create saved search error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
