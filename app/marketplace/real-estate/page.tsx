import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ListingCard from "@/components/ListingCard";
import AdSlot from "@/components/AdSlot";

export default async function RealEstatePage() {
  const listings: any[] = []; // NO mock data

  return (
    <Container className="py-16">
      <SectionTitle title="Real Estate" />

      <p className="text-gray-600 mt-2">
        Rail-served industrial buildings, yards, land, and facilities.
      </p>

      <AdSlot position="real-estate-top" />

      {listings.length === 0 && (
        <p className="text-gray-500 mt-6">No real estate listings yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </Container>
  );
}
