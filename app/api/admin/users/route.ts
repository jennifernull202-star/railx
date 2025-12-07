import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
  await connectDB();
  const token = await getToken({ req });

  if (!token || (token as any).role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const users = await User.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(users);
}
