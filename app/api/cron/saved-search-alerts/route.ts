import SavedSearch from "@/lib/models/SavedSearch";
import Listing from "@/lib/models/Listing";
import User from "@/lib/models/User";
import connectDB from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const searches = await SavedSearch.find().lean();

    let notified = 0;

    for (const search of searches) {
      const user = await User.findById(search.userId).lean();

      if (!user) continue;

      // Find matching new listings since last alert
      const listings = await Listing.find({
        ...search.query,
        createdAt: { $gte: search.lastNotifiedAt || new Date(0) },
      }).lean();

      if (listings.length === 0) continue;

      // Send email
      await sendEmail({
        to: user.email,
        subject: "New Listings Matching Your Search",
        html: `
          <h2>Your Saved Search Has New Matches</h2>
          <p>${listings.length} new listings match your search.</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/saved-searches">View Matches</a></p>
        `,
      });

      notified++;

      await SavedSearch.findByIdAndUpdate(search._id, {
        lastNotifiedAt: new Date(),
      });
    }

    return NextResponse.json({ 
      success: true,
      notified 
    });
  } catch (err: any) {
    console.error("Saved search alerts error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
