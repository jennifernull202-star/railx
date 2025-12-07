import { notFound } from "next/navigation";
import Container from "@/components/global/Container";
import Gallery from "@/components/listing/Gallery";
import InquiryButton from "@/components/listing/InquiryButton";

async function getProperty(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/real-estate/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function RealEstateDetail({ params }: { params: { slug: string } }) {
  const property = await getProperty(params.slug);
  if (!property) return notFound();

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 py-14">

        <Gallery images={property.images} />

        <div>
          <h1 className="text-3xl font-bold text-primary mb-3">
            {property.title}
          </h1>

          <p className="text-2xl font-bold text-accent mb-3">
            ${property.price?.toLocaleString()}
          </p>

          <p className="text-gray-600">{property.location}</p>

          <InquiryButton
            listingId={property._id}
            message={`I would like more information about this property: ${property.title}`}
          />

          <hr className="my-8" />

          <h2 className="text-xl font-semibold text-primary mb-2">Property Details</h2>
          <ul className="text-gray-700 space-y-1">
            {property.attributes?.acreage && <li>Acreage: {property.attributes.acreage}</li>}
            {property.attributes?.buildingSize && <li>Building Size: {property.attributes.buildingSize} sq ft</li>}
            {property.attributes?.zoning && <li>Zoning: {property.attributes.zoning}</li>}
            {property.attributes?.railAccess && <li>Rail Access: Yes</li>}
          </ul>

          <hr className="my-8" />

          <h2 className="text-xl font-semibold text-primary mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{property.description}</p>
        </div>
      </div>
    </Container>
  );
}
