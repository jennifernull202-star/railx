export default function Gallery({ images = [] }: { images?: string[] }) {
  if (!images.length) return null;

  return (
    <div className="w-full">
      <img
        src={images[0]}
        className="w-full h-96 object-cover rounded-lg shadow mb-4"
        alt="Primary"
      />

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-32 w-full object-cover rounded-md shadow"
              alt={`Image ${i + 2}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
