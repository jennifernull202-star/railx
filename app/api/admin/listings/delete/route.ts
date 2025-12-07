import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  await connectDB();
  const token = await getToken({ req });

  if (!token || (token as any).role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();

  await Listing.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
