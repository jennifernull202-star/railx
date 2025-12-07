import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ListingCard from "@/components/ListingCard";
import AdSlot from "@/components/AdSlot";
import { CATEGORY_SEO } from "@/lib/seo/categories";

export async function generateMetadata() {
  const seo = CATEGORY_SEO["equipment"] || {};

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function EquipmentPage() {
  const listings: any[] = []; // NO mock data

  return (
    <Container className="py-16">
      <SectionTitle title="Equipment" />

      <p className="text-gray-600 mt-2">
        Browse rail industry equipment for sale.
      </p>

      <AdSlot position="equipment-top" />

      {listings.length === 0 && (
        <p className="text-gray-500 mt-6">No equipment listings yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </Container>
  );
}
