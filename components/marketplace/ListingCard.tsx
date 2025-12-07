export default function ListingCard({ item }: any) {
  return (
    <a
      href={`/listing/${item.slug}`}
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md bg-white transition"
    >
      <img
        src={item.images?.[0]}
        className="w-full h-48 object-cover rounded-t-lg"
        alt={item.title}
      />

      <div className="p-4">
        <h3 className="font-semibold text-primary">{item.title}</h3>

        {item.price && (
          <p className="text-accent font-bold mt-1">
            ${item.price.toLocaleString()}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-2">{item.location}</p>
      </div>
    </a>
  );
}
