export function rentalSchema(rental: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: rental.title,
    description: rental.description,
    image: rental.images,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: rental.attributes?.rateDaily,
      url: `${process.env.NEXT_PUBLIC_URL}/rental/${rental.slug}`,
    },
  };
}
