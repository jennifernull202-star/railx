import { buildMetadata } from "@/lib/seo/seoEngine";
import Listing from "@/lib/models/Listing";
import connectDB from "@/lib/db";
import ListingBreadcrumb from "@/components/listings/ListingBreadcrumb";
import EnhancedListingGallery from "@/components/listings/EnhancedListingGallery";
import ContactPanel from "@/components/listings/ContactPanel";
import ListingTabs from "@/components/listings/ListingTabs";

export const dynamic = "force-dynamic";

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
  
  const listing = await Listing.findById(params.id).populate("sellerId", "name email company logo verified").lean();

  if (!listing) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
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
      
      {/* Listing Hero Section */}
      <div className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <ListingBreadcrumb 
            category={listing.category || "equipment"}
            title={listing.title}
          />
          
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-railBlue mb-3">
                {listing.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="capitalize">{listing.category}</span>
                <span>•</span>
                <span>{listing.city}, {listing.state}</span>
                <span>•</span>
                <span className="text-xs">ID: {listing._id.toString().slice(-8)}</span>
              </div>
            </div>
            
            {(listing as any).sellerId?.verified && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                ✓ Verified Seller
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Gallery and Tabs */}
          <div className="lg:col-span-2 space-y-8">
            <EnhancedListingGallery 
              photos={listing.photos || []} 
              title={listing.title}
            />
            
            <ListingTabs 
              description={listing.description || "No description provided."}
              specifications={(listing as any).attributes || {}}
              seller={(listing as any).sellerId || {}}
              location={{
                city: listing.city,
                state: listing.state,
                address: (listing as any).address,
              }}
            />
          </div>

          {/* Right Column - Contact Panel */}
          <div className="lg:col-span-1">
            <ContactPanel 
              price={listing.price || 0}
              seller={{
                _id: (listing as any).sellerId?._id?.toString() || "",
                name: (listing as any).sellerId?.name,
                company: (listing as any).sellerId?.company,
                logo: (listing as any).sellerId?.logo,
                verified: (listing as any).sellerId?.verified,
                isPro: (listing as any).sellerId?.subscription === "pro",
              }}
              location={{
                city: listing.city,
                state: listing.state,
              }}
              listingId={listing._id.toString()}
            />
          </div>
        </div>

        {/* Related Listings Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-railBlue mb-6">
            Related Listings
          </h2>
          <p className="text-gray-600">
            No related listings available at this time.
          </p>
        </div>
      </div>
    </>
  );
}
