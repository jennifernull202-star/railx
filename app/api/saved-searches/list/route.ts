import SavedSearch from "@/lib/models/SavedSearch";
import connectDB from "@/lib/db";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();

    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const searches = await SavedSearch.find({ userId: token.id }).lean();

    return NextResponse.json(searches);
  } catch (err: any) {
    console.error("Get saved searches error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
