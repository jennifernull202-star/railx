import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import ListingGrid from "@/components/marketplace/ListingGrid";
import Container from "@/components/global/Container";

export const dynamic = "force-dynamic";

export default async function MarketplacePage({ searchParams }: any) {
  const q = searchParams?.q || "";
  const category = searchParams?.category || "";
  const page = searchParams?.page || 1;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
        
        <div className="md:col-span-1">
          <MarketplaceFilters />
        </div>

        <div className="md:col-span-3">
          <ListingGrid q={q} category={category} page={page} />
        </div>

      </div>
    </Container>
  );
}
