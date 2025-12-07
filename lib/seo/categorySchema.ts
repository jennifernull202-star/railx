export function categorySEO(categoryName: string) {
  const title = `${categoryName} For Sale | Rail Equipment Marketplace`;
  const description = `Browse ${categoryName} on The Rail Exchange — the leading marketplace for rail industry equipment, hi-rail trucks, parts, rentals, and real estate.`;

  return {
    title,
    description,
    categoryName,
    heading: `${categoryName} Marketplace`,
    intro: `Find the best ${categoryName} listings from verified sellers across North America.`,
  };
}
