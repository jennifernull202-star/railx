import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Listing from "@/lib/models/Listing";
import User from "@/lib/models/User";
import { sendEmail } from "@/lib/email";
import { boostExpirationTemplate } from "@/lib/emailTemplates";

export async function GET() {
  try {
    await connectDB();

    const soon = new Date(Date.now() + 24 * 3600 * 1000); // expiring in 24 hours

    const expiringListings = await Listing.find({
      boostedUntil: { $lte: soon, $gte: new Date() },
    }).lean();

    let notified = 0;

    for (const listing of expiringListings) {
      const seller = await User.findById(listing.sellerId).lean();

      if (seller && seller.email) {
        await sendEmail({
          to: seller.email,
          subject: "Your Listing Boost Will End Soon",
          html: boostExpirationTemplate({
            listingTitle: listing.title,
          }),
        });
        notified++;
      }
    }

    return NextResponse.json({ 
      success: true, 
      notified,
      expiringListings: expiringListings.length 
    });
  } catch (err: any) {
    console.error("Boost expiration cron error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
