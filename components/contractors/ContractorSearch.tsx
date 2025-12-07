"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ContractorSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const [q, setQ] = useState(params.get("q") || "");

  function handleSearch() {
    router.push(`/contractors?q=${q}`);
  }

  return (
    <div className="border rounded-lg shadow p-4 bg-white max-w-xl">
      <div className="flex items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by service, company, or city…"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
