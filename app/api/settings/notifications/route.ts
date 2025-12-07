import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const settings = await req.json();

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          notificationSettings: settings,
        },
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      settings: user.notificationSettings,
    });
  } catch (err: any) {
    console.error("Save notification settings error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await User.findById(userId).lean();

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      settings: user.notificationSettings || {
        emailOnInquiry: true,
        emailOnReply: true,
        emailOnBoostExpiring: true,
        smsOnInquiry: false,
        smsOnReply: false,
        weeklyDigest: true,
        marketingEmails: false,
      },
    });
  } catch (err: any) {
    console.error("Get notification settings error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
