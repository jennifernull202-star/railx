import { NextResponse } from "next/server";
import Listing from "@/models/Listing";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();

  const listings = await Listing.find({ isActive: true });

  let urls: string[] = [
    `<url><loc>${process.env.NEXT_PUBLIC_URL}</loc><priority>1.0</priority></url>`,
    `<url><loc>${process.env.NEXT_PUBLIC_URL}/marketplace</loc><priority>0.9</priority></url>`,
    `<url><loc>${process.env.NEXT_PUBLIC_URL}/contractors</loc><priority>0.9</priority></url>`,
    `<url><loc>${process.env.NEXT_PUBLIC_URL}/about</loc><priority>0.7</priority></url>`,
    `<url><loc>${process.env.NEXT_PUBLIC_URL}/pricing</loc><priority>0.8</priority></url>`,
  ];

  listings.forEach((l) =>
    urls.push(
      `<url><loc>${process.env.NEXT_PUBLIC_URL}/listing/${l.slug}</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
