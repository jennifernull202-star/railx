export function contractorSchema(contractor: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contractor.companyName,
    description: contractor.description,
    areaServed: contractor.coverageAreas,
    url: `${process.env.NEXT_PUBLIC_URL}/contractor/${contractor.slug}`,
    serviceType: contractor.serviceCategory,
    image: contractor.logo || "",
  };
}
