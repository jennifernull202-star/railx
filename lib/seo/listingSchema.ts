export function listingSchema(listing: any) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: listing.title,
    description: listing.description,
    image: listing.images,
    sku: listing._id,
    category: listing.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: listing.price,
      availability: "https://schema.org/InStock",
      url: `${process.env.NEXT_PUBLIC_URL}/listing/${listing.slug}`,
    },
  };
}
