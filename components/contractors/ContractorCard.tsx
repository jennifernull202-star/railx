export default function ContractorCard({ contractor }: any) {
  return (
    <a
      href={`/contractor/${contractor.slug}`}
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white p-6 block"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-primary">
          {contractor.companyName}
        </h2>
      </div>

      <p className="text-gray-600 text-sm mb-3">
        {contractor.serviceCategory}
      </p>

      <p className="text-gray-700 text-sm">
        Coverage: {contractor.coverageAreas?.join(", ") || "Nationwide"}
      </p>
    </a>
  );
}
