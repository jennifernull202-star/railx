"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MarketplaceFilters({ category }: { category?: string }) {
  const router = useRouter();
  const params = useSearchParams();

  const [minPrice, setMin] = useState(params.get("min") || "");
  const [maxPrice, setMax] = useState(params.get("max") || "");

  function applyFilters() {
    const qp = new URLSearchParams();

    if (category) qp.set("category", category);
    if (minPrice) qp.set("min", minPrice);
    if (maxPrice) qp.set("max", maxPrice);

    router.push(`/marketplace?${qp.toString()}`);
  }

  return (
    <div className="border border-gray-300 p-5 rounded-lg shadow bg-white">
      <h2 className="text-lg font-semibold text-primary mb-4">Filters</h2>

      <div className="space-y-4">

        <div>
          <label className="text-sm text-gray-600">Min Price</label>
          <input
            value={minPrice}
            onChange={(e) => setMin(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="$"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Max Price</label>
          <input
            value={maxPrice}
            onChange={(e) => setMax(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="$"
          />
        </div>

        <button
          onClick={applyFilters}
          className="bg-accent hover:bg-accent-dark w-full text-white py-2 rounded-md font-semibold"
        >
          Apply Filters
        </button>

      </div>
    </div>
  );
}
