"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchFilters() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (state) params.set("state", state);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    router.push(`/marketplace/search?${params.toString()}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

      <h3 className="text-xl font-semibold mb-6 text-railBlue">Filters</h3>

      {/* CATEGORY FILTER */}
      <label className="block text-sm font-medium mb-1">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="">All Categories</option>
        <option value="equipment">Equipment</option>
        <option value="tools">Tools</option>
        <option value="rail">Rail Materials</option>
        <option value="rentals">Rentals</option>
        <option value="services">Services</option>
        <option value="real-estate">Real Estate</option>
      </select>

      {/* STATE FILTER */}
      <label className="block text-sm font-medium mb-1">State</label>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="e.g. TX"
        className="w-full border p-2 rounded mb-4"
      />

      {/* PRICE FILTER */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1">Min Price</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Max Price</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-railAccent text-white py-2 rounded mt-4"
      >
        Apply Filters
      </button>
    </div>
  );
}
