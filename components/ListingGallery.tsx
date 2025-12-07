export default function ListingGallery({ photos }: { photos: string[] }) {
  if (!photos || photos.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
        No images uploaded
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full h-80 bg-gray-100 rounded overflow-hidden">
        <img
          src={photos[0]}
          alt="Listing"
          className="w-full h-full object-cover"
        />
      </div>

      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {photos.slice(1).map((p, i) => (
            <img
              key={i}
              src={p}
              alt={`Listing ${i + 2}`}
              className="h-24 w-full object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}
