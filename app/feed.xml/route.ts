import { NextResponse } from "next/server";
import Listing from "@/models/Listing";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();

  const listings = await Listing.find({ isActive: true }).sort({
    createdAt: -1,
  }).limit(100);

  let items = listings
    .map(
      (l) => `
    <item>
      <title><![CDATA[${l.title}]]></title>
      <link>${process.env.NEXT_PUBLIC_URL}/listing/${l.slug}</link>
      <description><![CDATA[${l.description || ''}]]></description>
      <pubDate>${new Date(l.createdAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>The Rail Exchange - New Listings</title>
        <link>${process.env.NEXT_PUBLIC_URL}</link>
        <description>Real-time rail equipment and contractor listings</description>
        ${items}
      </channel>
    </rss>
  `;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
