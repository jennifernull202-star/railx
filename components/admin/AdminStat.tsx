export default function AdminStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-3xl font-bold text-railBlue mt-2">{value}</p>
    </div>
  );
}
