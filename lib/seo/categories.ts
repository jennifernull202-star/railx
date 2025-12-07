export const CATEGORY_SEO = {
  equipment: {
    title: "Buy Rail Equipment | Rail Equipment Marketplace | The Rail Exchange",
    description:
      "Browse rail equipment for sale across North America. Verified sellers, safe transactions, and real-time listings on The Rail Exchange™. Find tampers, regulators, tie inserters, and heavy maintenance machinery.",
    seoContent: `Rail equipment is essential for track maintenance, construction, and industrial operations. The Rail Exchange™ provides a secure, centralized marketplace where buyers and sellers connect to trade new and used rail equipment nationwide. All listings are reviewed manually to prevent fraud and ensure quality. Whether you're looking for tampers, regulators, ballast distributors, or specialty MOW equipment, our platform connects you with verified sellers across North America.`,
    keywords: ["rail equipment", "tampers", "regulators", "track maintenance equipment", "MOW equipment", "railroad equipment for sale"],
  },
  tools: {
    title: "Buy Rail Tools | Railroad Tools Marketplace | The Rail Exchange",
    description:
      "Browse rail tools for sale across North America. Verified sellers, safe transactions, and real-time listings on The Rail Exchange™. Find hand tools, power tools, gauges, jacks, grinders, and specialty rail tools.",
    seoContent: `Railroad tools are critical for daily maintenance, inspection, and repair operations. The Rail Exchange™ provides a trusted marketplace for buying and selling new and used rail tools. From specialized track gauges and rail jacks to power grinders and welding equipment, our platform connects contractors and rail operators with quality tool suppliers. All listings are verified to ensure authentic products and reliable transactions.`,
    keywords: ["rail tools", "track gauges", "rail jacks", "railroad tools", "track maintenance tools", "rail welding equipment"],
  },
  rail: {
    title: "Buy Rail Materials | Track Components Marketplace | The Rail Exchange",
    description:
      "Browse rail materials for sale across North America. Verified sellers, safe transactions, and real-time listings on The Rail Exchange™. Shop rail, ties, fasteners, plates, turnout components, and track materials.",
    seoContent: `Rail materials and track components form the foundation of safe, reliable railroad operations. The Rail Exchange™ marketplace connects buyers with suppliers of new and relay rail, concrete and wood ties, fastening systems, turnout components, and all essential track materials. Our platform ensures transparent pricing, quality verification, and secure transactions for rail infrastructure projects of any scale across North America.`,
    keywords: ["rail materials", "railroad ties", "track fasteners", "rail turnouts", "track components", "rail infrastructure"],
  },
  rentals: {
    title: "Rail Equipment Rentals | Railroad Equipment Rental Marketplace | The Rail Exchange",
    description:
      "Find rental track equipment across North America. Verified rental providers, safe transactions, and real-time availability on The Rail Exchange™. Rent tampers, regulators, hi-rail trucks, welders, and more.",
    seoContent: `Rail equipment rentals provide cost-effective solutions for short-term projects, seasonal work, and specialized maintenance tasks. The Rail Exchange™ connects contractors and rail operators with verified rental equipment providers nationwide. From hi-rail trucks and tampers to welding equipment and specialized MOW machinery, find the equipment you need when you need it. All rental providers are vetted to ensure equipment quality and reliable service.`,
    keywords: ["rail equipment rentals", "hi-rail truck rental", "tamper rental", "railroad equipment rental", "MOW equipment rental"],
  },
  services: {
    title: "Railroad Contractors | Rail Services Directory | The Rail Exchange",
    description:
      "Find certified railroad contractors across North America. Verified contractors, safe transactions, and real-time availability on The Rail Exchange™. Browse track repair, inspections, consulting, welding, and maintenance services.",
    seoContent: `Railroad contractor services are essential for maintaining safe, efficient rail operations. The Rail Exchange™ provides a comprehensive directory of certified contractors offering track construction, maintenance, repair, welding, inspection, and consulting services. All contractors are verified for credentials, insurance, and industry certifications. Connect with qualified professionals for projects ranging from routine maintenance to major infrastructure work across North America.`,
    keywords: ["railroad contractors", "track maintenance contractors", "rail welding services", "track inspection", "rail construction services"],
  },
  "real-estate": {
    title: "Rail-Served Industrial Real Estate | Railroad Property Marketplace | The Rail Exchange",
    description:
      "Explore rail-served real estate across North America. Verified listings, safe transactions, and comprehensive property details on The Rail Exchange™. Find warehouses, yards, terminals, transload facilities, and industrial land with rail access.",
    seoContent: `Rail-served industrial real estate provides critical infrastructure for manufacturing, distribution, and logistics operations. The Rail Exchange™ marketplace features verified listings of properties with direct rail access, including warehouses, distribution centers, transload facilities, rail yards, and industrial land. Our platform connects property buyers, sellers, and lessees with detailed information about rail infrastructure, zoning, utilities, and site specifications for informed real estate decisions.`,
    keywords: ["rail-served real estate", "railroad property", "transload facility", "rail yard for sale", "industrial property with rail access"],
  },
};

// Location-based SEO templates
export const LOCATION_SEO = {
  generateStateSEO: (state: string, category: string) => ({
    title: `${CATEGORY_SEO[category]?.title || 'Rail Marketplace'} in ${state} | The Rail Exchange`,
    description: `Find ${category} in ${state}. Browse local listings, connect with verified sellers, and complete secure transactions on The Rail Exchange™ marketplace.`,
  }),
  generateCitySEO: (city: string, state: string, category: string) => ({
    title: `${CATEGORY_SEO[category]?.title || 'Rail Marketplace'} in ${city}, ${state} | The Rail Exchange`,
    description: `Find ${category} in ${city}, ${state}. Browse local listings, connect with verified sellers, and complete secure transactions on The Rail Exchange™ marketplace.`,
  }),
};
