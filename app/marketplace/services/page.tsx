import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ListingCard from "@/components/ListingCard";
import AdSlot from "@/components/AdSlot";

export default async function ServicesPage() {
  const listings: any[] = []; // NO mock data

  return (
    <Container className="py-16">
      <SectionTitle title="Services" />

      <p className="text-gray-600 mt-2">
        Contractors, repair services, inspections, consulting, and more.
      </p>

      <AdSlot position="services-top" />

      {listings.length === 0 && (
        <p className="text-gray-500 mt-6">No service listings yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </Container>
  );
}
