import ListingCard from "@/components/ListingCard";
import Container from "@/components/Container";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const seller = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/seller/get?id=${params.id}`,
    { cache: "no-store" }
  ).then((r) => (r.ok ? r.json() : null));

  if (!seller) {
    return { title: "Seller Not Found" };
  }

  const title = seller.company || seller.name;

  return {
    title: `${title} — Seller Profile`,
    description: `View listings from ${title} on The Rail Exchange rail marketplace.`,
  };
}

async function getSeller(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/seller/get?id=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

async function getSellerListings(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/listings/by-seller?sellerId=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];
  return res.json();
}

export default async function SellerPage({ params }: { params: { id: string } }) {
  const seller = await getSeller(params.id);
  const listings = await getSellerListings(params.id);

  if (!seller) {
    return (
      <Container className="py-16">
        <p className="text-gray-600 text-center">Seller not found.</p>
      </Container>
    );
  }

  return (
    <Container className="py-16">

      {/* HEADER */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-4xl font-bold text-railBlue">
          {seller.company || seller.name}
        </h1>

        <p className="text-gray-600 mt-2">
          Member since {new Date(seller.createdAt).getFullYear()}
        </p>

        <div className="mt-6">
          <a
            href={`mailto:${seller.email}`}
            className="px-6 py-3 bg-railBlue text-white rounded"
          >
            Contact Seller
          </a>
        </div>
      </div>

      {/* LISTINGS */}
      <h2 className="text-2xl font-bold text-railBlue mb-6">
        Active Listings
      </h2>

      {listings.length === 0 && (
        <p className="text-gray-500">No listings available.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((l: any) => (
          <ListingCard key={l._id} listing={l} />
        ))}
      </div>

    </Container>
  );
}
