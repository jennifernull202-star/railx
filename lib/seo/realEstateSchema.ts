export function realEstateSchema(property: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: property.title,
    description: property.description,
    url: `${process.env.NEXT_PUBLIC_URL}/real-estate/${property.slug}`,
    address: property.location,
    image: property.images,
  };
}
