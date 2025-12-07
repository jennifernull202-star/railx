export default function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="border rounded-lg bg-white p-4 shadow-sm">
      <div className="w-full h-40 bg-gray-200 rounded mb-4" />

      <h3 className="text-lg font-semibold">{listing.title}</h3>
      <p className="text-sm text-gray-600">{listing.category}</p>
    </div>
  );
}
