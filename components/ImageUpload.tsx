"use client";

export default function ImageUpload({ photos, setPhotos }: { photos: string[]; setPhotos: (photos: string[] | ((prev: string[]) => string[])) => void }) {

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Request signed URL
    const res = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({ fileType: file.type }),
    });

    const { uploadUrl, fileUrl } = await res.json();

    // Upload directly to S3
    await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });

    setPhotos((prev) => [...prev, fileUrl]);
  };

  return (
    <div>
      <label className="block font-semibold mb-2">Photos</label>

      <input type="file" accept="image/*" onChange={handleUpload} />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Upload ${i + 1}`}
            className="h-24 w-full object-cover rounded border"
          />
        ))}
      </div>
    </div>
  );
}
