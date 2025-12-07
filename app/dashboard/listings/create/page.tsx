"use client";

import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function CreateListingPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const body = {
      title: formData.get("title"),
      category: formData.get("category"),
      price: formData.get("price"),
      city: formData.get("city"),
      state: formData.get("state"),
      description: formData.get("description"),
      photos,
      attributes: {},
    };

    const res = await fetch("/api/listings/create", {
      method: "POST",
      body: JSON.stringify(body),
    });

    setLoading(false);

    if (res.ok) {
      alert("Listing created!");
      window.location.href = "/dashboard/listings";
    } else {
      alert("Error creating listing");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-railBlue">
        Create Listing
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block font-semibold">Title</label>
          <input
            name="title"
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Category</label>
          <select name="category" className="border p-2 w-full rounded" required>
            <option value="equipment">Equipment</option>
            <option value="tools">Tools</option>
            <option value="rail">Rail Materials</option>
            <option value="rentals">Rentals</option>
            <option value="services">Services</option>
            <option value="real-estate">Real Estate</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Price</label>
            <input type="number" name="price" className="border p-2 w-full rounded" />
          </div>

          <div>
            <label className="block font-semibold">State</label>
            <input name="state" className="border p-2 w-full rounded" />
          </div>
        </div>

        <div>
          <label className="block font-semibold">City</label>
          <input name="city" className="border p-2 w-full rounded" />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            className="border p-2 w-full rounded"
            rows={5}
          />
        </div>

        {/* IMAGE UPLOAD */}
        <ImageUpload photos={photos} setPhotos={setPhotos} />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-railBlue text-white rounded"
        >
          {loading ? "Saving..." : "Create Listing"}
        </button>

      </form>
    </div>
  );
}
