import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import SectionTitle from "@/components/SectionTitle";
import ListingCard from "@/components/ListingCard";
import AdSlot from "@/components/AdSlot";
import Container from "@/components/Container";

import { CATEGORIES } from "@/lib/categories";

export default async function HomePage() {

  // NO mock data — listings will be empty until real API is connected
  const listings: any[] = [];

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-railBlue text-white py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Rail Exchange™ Marketplace
            </h1>
            <p className="text-lg text-railGray mb-10">
              Buy, sell, lease, or advertise rail-industry equipment, tools, services, and real estate.
            </p>

            {/* SEARCH */}
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </Container>
      </section>

      {/* CATEGORY GRID */}
      <Container className="py-16">
        <SectionTitle title="Browse Categories" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </Container>

      {/* AD SLOT */}
      <Container className="py-6">
        <AdSlot position="homepage-top" />
      </Container>

      {/* LATEST LISTINGS */}
      <Container className="py-16">
        <SectionTitle title="Latest Listings" />

        {listings.length === 0 && (
          <p className="text-gray-500 mt-6">
            No listings available yet. Check back soon.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      </Container>

      {/* AD SLOT */}
      <Container className="py-6">
        <AdSlot position="homepage-bottom" />
      </Container>

    </div>
  );
}
