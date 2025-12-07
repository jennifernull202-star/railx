import { notFound } from "next/navigation";
import Container from "@/components/global/Container";
import InquiryButton from "@/components/listing/InquiryButton";

async function getContractor(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/contractors/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function ContractorProfile({ params }: { params: { slug: string } }) {
  const contractor = await getContractor(params.slug);
  if (!contractor) return notFound();

  return (
    <Container>
      <div className="py-12">

        <h1 className="text-3xl font-bold text-primary mb-2">
          {contractor.companyName}
        </h1>

        <p className="text-gray-500 mb-6 text-sm">
          {contractor.serviceCategory}
        </p>

        <div className="border rounded-lg shadow bg-white p-6 mb-10">
          <h2 className="text-xl font-semibold text-primary mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">{contractor.description}</p>
        </div>

        <div className="border rounded-lg shadow bg-white p-6 mb-10">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Coverage Areas
          </h2>

          <p className="text-gray-700">
            {contractor.coverageAreas?.join(", ") || "Nationwide"}
          </p>
        </div>

        <div className="border rounded-lg shadow bg-white p-6 mb-10">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Services Provided
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {contractor.services?.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <InquiryButton
            listingId={contractor._id}
            message={`I'm interested in your rail services: ${contractor.companyName}`}
          />
        </div>

      </div>
    </Container>
  );
}
