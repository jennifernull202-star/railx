"use client";

import { useState } from "react";
import MapsLoader from "@/components/map/MapsLoader";
import SearchMap from "@/components/map/SearchMap";

export default function MapSearchPage() {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minAcreage: "",
    maxAcreage: "",
    propertyType: "",
    railAccess: "",
  });

  const updateFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="flex h-screen">
      <div className="w-80 border-r bg-white p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
          Map Search
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => updateFilter("category", e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">All Categories</option>
              <option value="equipment">Equipment</option>
              <option value="tools">Tools</option>
              <option value="rail">Rail Materials</option>
              <option value="rentals">Rentals</option>
              <option value="services">Services</option>
              <option value="real-estate">Real Estate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => updateFilter("minPrice", e.target.value)}
                className="w-1/2 border rounded p-2"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => updateFilter("maxPrice", e.target.value)}
                className="w-1/2 border rounded p-2"
              />
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-3">Real Estate Filters</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Type
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => updateFilter("propertyType", e.target.value)}
                  className="w-full border rounded p-2"
                >
                  <option value="">All Types</option>
                  <option value="land">Land</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="terminal">Rail Terminal</option>
                  <option value="spur">Rail Spur</option>
                  <option value="siding">Siding</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Acreage Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minAcreage}
                    onChange={(e) => updateFilter("minAcreage", e.target.value)}
                    className="w-1/2 border rounded p-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxAcreage}
                    onChange={(e) => updateFilter("maxAcreage", e.target.value)}
                    className="w-1/2 border rounded p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Rail Access
                </label>
                <select
                  value={filters.railAccess}
                  onChange={(e) => updateFilter("railAccess", e.target.value)}
                  className="w-full border rounded p-2"
                >
                  <option value="">All</option>
                  <option value="direct">Direct Rail Access</option>
                  <option value="nearby">Nearby Rail Access</option>
                  <option value="none">No Rail Access</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={() => setFilters({
              category: "",
              minPrice: "",
              maxPrice: "",
              minAcreage: "",
              maxAcreage: "",
              propertyType: "",
              railAccess: "",
            })}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50"
          >
            Clear Filters
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> Drag and zoom the map to explore listings in
            different areas. Results update automatically.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <MapsLoader>
          <SearchMap filters={filters} />
        </MapsLoader>
      </div>
    </div>
  );
}
