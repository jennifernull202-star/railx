import { notFound } from "next/navigation";
import Container from "@/components/global/Container";
import Gallery from "@/components/listing/Gallery";
import InquiryButton from "@/components/listing/InquiryButton";

async function getListing(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/listings/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function ListingDetail({ params }: { params: { slug: string } }) {
  const listing = await getListing(params.slug);
  if (!listing) return notFound();

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 py-14">

        <Gallery images={listing.images} />

        <div>
          <h1 className="text-3xl font-bold text-primary mb-3">
            {listing.title}
          </h1>

          {listing.price && (
            <p className="text-2xl font-bold text-accent mb-3">
              ${listing.price.toLocaleString()}
            </p>
          )}

          <p className="text-gray-600 mb-4">{listing.location}</p>

          <InquiryButton
            listingId={listing._id}
            message={`I am interested in your listing: ${listing.title}`}
          />

          <hr className="my-8" />

          <h2 className="text-xl font-semibold text-primary mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{listing.description}</p>

          <hr className="my-8" />

          <h2 className="text-xl font-semibold text-primary mb-2">Details</h2>
          <ul className="text-gray-700 space-y-1">
            {listing.attributes?.year && <li>Year: {listing.attributes.year}</li>}
            {listing.attributes?.manufacturer && <li>Manufacturer: {listing.attributes.manufacturer}</li>}
            {listing.attributes?.mileage && <li>Mileage: {listing.attributes.mileage}</li>}
          </ul>
        </div>
      </div>
    </Container>
  );
}
