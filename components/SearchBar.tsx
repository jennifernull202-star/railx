"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    window.location.href = `/marketplace/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search listings..."
        className="flex-grow px-4 py-3 text-gray-900 outline-none"
      />
      <button
        onClick={handleSubmit}
        className="bg-railAccent text-white px-6 text-sm"
      >
        Search
      </button>
    </div>
  );
}
