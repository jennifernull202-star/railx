import Container from "@/components/global/Container";
import ContractorSearch from "@/components/contractors/ContractorSearch";
import ContractorCard from "@/components/contractors/ContractorCard";

async function getContractors(q = "") {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/contractors/search?q=${q}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ContractorDirectory({ searchParams }: any) {
  const q = searchParams?.q || "";
  const contractors = await getContractors(q);

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Contractor Directory
        </h1>

        <ContractorSearch />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {contractors.map((c: any) => (
            <ContractorCard key={c._id} contractor={c} />
          ))}

          {contractors.length === 0 && (
            <p className="text-gray-500">No contractors found.</p>
          )}
        </div>
      </div>
    </Container>
  );
}
