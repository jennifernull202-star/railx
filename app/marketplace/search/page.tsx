import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ListingCard from "@/components/ListingCard";
import SearchFilters from "@/components/SearchFilters";

export default async function MarketplaceSearchPage({ searchParams }: { searchParams: { q?: string; category?: string; minPrice?: string; maxPrice?: string; state?: string } }) {
  const query = searchParams.q || "";
  const category = searchParams.category || "";
  const minPrice = searchParams.minPrice || "";
  const maxPrice = searchParams.maxPrice || "";
  const state = searchParams.state || "";

  // NO mock data — returns empty list until backend search API is connected
  const listings: any[] = [];

  return (
    <Container className="py-12">
      
      {/* SEARCH HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-railBlue">Search Results</h1>

        {query && (
          <p className="text-gray-600 mt-2">
            Showing results for: <span className="font-semibold">{query}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* FILTERS */}
        <div className="md:col-span-1">
          <SearchFilters />
        </div>

        {/* RESULTS */}
        <div className="md:col-span-3">

          {listings.length === 0 && (
            <p className="text-gray-500 mt-6">No listings found.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>

        </div>
      </div>
    </Container>
  );
}
