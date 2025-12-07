import Link from "next/link";

// This will connect to real API - showing empty state for now
async function getListings() {
  // TODO: Connect to /api/listings?featured=true
  return [];
}

export default async function FeaturedListings() {
  const listings = await getListings();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Featured Listings
            </h2>
            <p className="text-gray-600">
              Handpicked equipment and services from verified sellers
            </p>
          </div>
          <Link
            href="/marketplace"
            className="text-accent hover:text-accent-dark font-semibold"
          >
            View All →
          </Link>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">No featured listings available yet</p>
            <Link
              href="/marketplace"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold transition"
            >
              Browse Marketplace
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map((listing: any) => (
              <div
                key={listing._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={listing.images?.[0]?.url || "/placeholder.jpg"}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {listing.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {listing.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">
                      ${listing.price?.toLocaleString()}
                    </span>
                    <Link
                      href={`/marketplace/${listing.category}/${listing.slug}`}
                      className="text-primary hover:text-accent font-semibold"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
