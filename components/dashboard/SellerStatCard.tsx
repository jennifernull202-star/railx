export default function SellerStatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
      <p className="text-gray-600 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}
