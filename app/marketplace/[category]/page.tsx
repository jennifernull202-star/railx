import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import ListingGrid from "@/components/marketplace/ListingGrid";
import Container from "@/components/global/Container";

export default function CategoryPage({ params, searchParams }: any) {
  const page = searchParams?.page || 1;

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-primary mb-6 capitalize">
          {params.category.replace("-", " ")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <MarketplaceFilters category={params.category} />
          </div>

          <div className="md:col-span-3">
            <ListingGrid category={params.category} page={page} />
          </div>
        </div>
      </div>
    </Container>
  );
}
