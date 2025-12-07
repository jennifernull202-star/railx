import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import User from "@/lib/models/User";
import Listing from "@/lib/models/Listing";
import connectDB from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  const data = event.data.object as any;

  // -------------------------------------------
  // Subscription Events
  // -------------------------------------------
  if (event.type === "customer.subscription.created") {
    const email = data.customer_email;
    await User.findOneAndUpdate({ email }, { subscription: "active", role: "seller" });
  }

  if (event.type === "customer.subscription.deleted") {
    const email = data.customer_email;
    await User.findOneAndUpdate({ email }, { subscription: "canceled" });
  }

  // -------------------------------------------
  // One-time Boost Purchase
  // -------------------------------------------
  if (event.type === "checkout.session.completed") {
    const { listingId, adSlot } = data.metadata;

    if (listingId) {
      await Listing.findByIdAndUpdate(listingId, {
        boostedUntil: new Date(Date.now() + 48 * 3600 * 1000),
      });
    }

    // adSlot logic will be implemented in your Advertiser system batch
  }

  return NextResponse.json({ received: true });
}
