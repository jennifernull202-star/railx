import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const session = await stripe.billingPortal.sessions.create({
    customer: token.email as string,
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/billing`,
  });

  return NextResponse.json({ url: session.url });
}
