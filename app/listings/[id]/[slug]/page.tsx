import { buildMetadata } from "@/lib/seo/seoEngine";
import Listing from "@/lib/models/Listing";
import connectDB from "@/lib/db";

export async function generateMetadata({ params }: { params: { id: string; slug: string } }) {
  await connectDB();
  
  const listing = await Listing.findById(params.id).lean();
  
  if (!listing) {
    return {
      title: "Listing Not Found | The Rail Exchange",
      description: "The requested listing could not be found.",
    };
  }

  return buildMetadata({
    title: `${listing.title} for Sale | ${listing.city}, ${listing.state} | The Rail Exchange`,
    description: listing.description?.slice(0, 150) || `${listing.title} available on The Rail Exchange marketplace.`,
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/listings/${listing._id}/${listing.slug}`,
    images: listing.photos || [],
    type: "product",
  });
}

export default async function ListingPage({ params }: { params: { id: string; slug: string } }) {
  await connectDB();
  
  const listing = await Listing.findById(params.id).populate("sellerId", "name email company").lean();

  if (!listing) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-railBlue">Listing Not Found</h1>
        <p className="text-gray-500 mt-4">
          This listing is not available or has been removed.
        </p>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: listing.title,
    image: listing.photos || [],
    description: listing.description,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/listings/${listing._id}/${listing.slug}`,
    },
    seller: {
      "@type": "Organization",
      name: (listing as any).sellerId?.company || (listing as any).sellerId?.name || "Seller",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-railBlue mb-4">{listing.title}</h1>
        <p className="text-gray-600 mb-6">{listing.category}</p>
        
        {listing.photos && listing.photos.length > 0 && (
          <img
            src={listing.photos[0]}
            alt={listing.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
        )}
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 whitespace-pre-line">{listing.description}</p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <div className="grid grid-cols-2 gap-4">
            {listing.price && (
              <div>
                <strong>Price:</strong> ${listing.price.toLocaleString()}
              </div>
            )}
            {listing.city && listing.state && (
              <div>
                <strong>Location:</strong> {listing.city}, {listing.state}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
