import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ListingGallery from "@/components/ListingGallery";

// THIS WILL CONNECT TO YOUR API LATER
async function getListing(category: string, slug: string) {
  // No mock data — return empty object until backend is wired
  return null;
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;

  const listing = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/get?slug=${slug}&category=${category}`,
    { cache: "no-store" }
  ).then((res) => (res.ok ? res.json() : null));

  if (!listing) {
    return {
      title: "Listing Not Found",
      description: "The requested listing could not be found.",
    };
  }

  return {
    title: `${listing.title} — ${listing.city}, ${listing.state}`,
    description: listing.description?.slice(0, 160) || "Rail marketplace listing.",
    openGraph: {
      title: listing.title,
      description: listing.description?.slice(0, 200),
      images: listing.photos?.length ? listing.photos : ["/og-default.png"],
    },
    alternates: {
      canonical: `/marketplace/${category}/${slug}`,
    },
  };
}

export default async function ListingDetailPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;

  const listing = await getListing(category, slug);

  return (
    <Container className="py-12">

      {/* HANDLE EMPTY STATE */}
      {!listing && (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-railBlue">Listing Not Found</h1>
          <p className="text-gray-500 mt-4">
            This listing is not available or has been removed.
          </p>
        </div>
      )}

      {listing && (
        <>
          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-railBlue">
              {listing.title}
            </h1>
            <p className="text-gray-600 mt-2">
              {listing.categoryLabel || category}
            </p>
          </div>

          {/* IMAGE GALLERY */}
          <ListingGallery photos={listing.photos || []} />

          {/* DETAILS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

            {/* LEFT COLUMN — Listing Info */}
            <div className="md:col-span-2">

              <SectionTitle title="Description" />
              <p className="text-gray-700 mt-4 whitespace-pre-line">
                {listing.description || "No description provided."}
              </p>

              {/* SPECS SECTION */}
              <div className="mt-10">
                <SectionTitle title="Details" />
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.price && (
                    <div>
                      <strong className="block">Price:</strong>
                      <span>${listing.price}</span>
                    </div>
                  )}

                  {listing.state && (
                    <div>
                      <strong className="block">Location:</strong>
                      <span>{listing.city}, {listing.state}</span>
                    </div>
                  )}

                  {listing.year && (
                    <div>
                      <strong className="block">Year:</strong>
                      <span>{listing.year}</span>
                    </div>
                  )}

                  {listing.attributes && Object.entries(listing.attributes).map(([k, v]) => (
                    <div key={k}>
                      <strong className="block capitalize">{k}:</strong>
                      <span>{String(v)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Seller Info */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">

              <h3 className="text-xl font-bold text-railBlue">Seller</h3>

              {!listing.seller && (
                <p className="text-gray-500 mt-4">Seller information unavailable.</p>
              )}

              {listing.seller && (
                <div className="mt-4">
                  <p className="font-semibold">{listing.seller.name}</p>
                  <p className="text-sm text-gray-600">{listing.seller.company}</p>

                  <div className="mt-4">
                    <a
                      href={`mailto:${listing.seller.email}`}
                      className="block bg-railAccent text-white text-center py-2 rounded mb-3"
                    >
                      Contact Seller
                    </a>

                    {listing.seller.phone && (
                      <a
                        href={`tel:${listing.seller.phone}`}
                        className="block bg-white border border-gray-300 text-center py-2 rounded"
                      >
                        Call Seller
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </Container>
  );
}
