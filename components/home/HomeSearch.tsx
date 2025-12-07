"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    router.push(`/marketplace/search?${params.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 -mt-12">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search equipment, tools, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="col-span-2 px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
          />
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
          >
            <option value="">All Categories</option>
            <option value="equipment">Equipment</option>
            <option value="tools">Tools</option>
            <option value="materials">Materials</option>
            <option value="rentals">Rentals</option>
            <option value="services">Services</option>
            <option value="real-estate">Real Estate</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="mt-4 w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-md font-semibold transition"
        >
          Search Marketplace
        </button>
      </form>
    </div>
  );
}
