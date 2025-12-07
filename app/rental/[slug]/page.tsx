import { notFound } from "next/navigation";
import Container from "@/components/global/Container";
import Gallery from "@/components/listing/Gallery";
import InquiryButton from "@/components/listing/InquiryButton";

async function getRental(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/rentals/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function RentalDetail({ params }: { params: { slug: string } }) {
  const rental = await getRental(params.slug);
  if (!rental) return notFound();

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 py-14">

        <Gallery images={rental.images} />

        <div>
          <h1 className="text-3xl font-bold text-primary mb-3">
            {rental.title}
          </h1>

          <p className="text-accent text-xl font-bold">
            ${rental.attributes?.rateDaily}/day
          </p>

          {rental.attributes?.rateWeekly && (
            <p className="text-gray-600 mt-1">
              Weekly: ${rental.attributes.rateWeekly}
            </p>
          )}

          <p className="text-gray-600 mt-4">{rental.location}</p>

          <InquiryButton
            listingId={rental._id}
            message={`I'm interested in renting: ${rental.title}`}
          />

          <hr className="my-8" />

          <h2 className="text-xl font-semibold text-primary mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{rental.description}</p>
        </div>
      </div>
    </Container>
  );
}
