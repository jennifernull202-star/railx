import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const { priceId, mode, listingId, adSlot } = body;

  // mode = "subscription" | "payment"

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: token.email as string,
    metadata: {
      userId: token.id as string,
      listingId: listingId || "",
      adSlot: adSlot || "",
    },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
