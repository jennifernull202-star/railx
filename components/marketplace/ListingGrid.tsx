import ListingCard from "@/components/marketplace/ListingCard";

async function getListings(q = "", category = "", page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/listings/search?q=${q}&category=${category}&page=${page}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ListingGrid({ q, category, page }: any) {
  const listings = await getListings(q, category, page);

  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">
        {listings.length > 0 ? `${listings.length} Results` : "No Results Found"}
      </h2>

      {listings.length === 0 && (
        <p className="text-gray-500">Try adjusting your filters.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {listings.map((item: any) => (
          <ListingCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
