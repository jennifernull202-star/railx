import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { adminFlagAlertTemplate } from "@/lib/emailTemplates";
import Listing from "@/lib/models/Listing";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { listingId, reason } = await req.json();

    if (!listingId || !reason) {
      return NextResponse.json(
        { error: "Missing listingId or reason" },
        { status: 400 }
      );
    }

    const listing = await Listing.findById(listingId).lean();

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found" },
        { status: 404 }
      );
    }

    // Send email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "admin@therailexchange.com",
      subject: "Flagged Listing Alert",
      html: adminFlagAlertTemplate({
        listingTitle: listing.title,
        reportReason: reason,
      }),
    });

    // Optionally store the flag in database
    await Listing.findByIdAndUpdate(listingId, {
      $push: {
        flags: {
          reason,
          reportedAt: new Date(),
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Flag listing error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
