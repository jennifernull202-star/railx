"use client";

import { useState } from "react";

export default function WatchlistButton({ 
  listingId,
  initialSaved = false 
}: { 
  listingId: string;
  initialSaved?: boolean;
}) {
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);

    try {
      await fetch(`/api/watchlist/${saved ? "remove" : "add"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      });

      setSaved(!saved);
    } catch (err) {
      console.error("Watchlist toggle error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="text-[#0A1A2F] underline text-sm hover:text-opacity-80 disabled:opacity-50"
    >
      {loading ? "..." : saved ? "Remove from Watchlist" : "Save Listing"}
    </button>
  );
}
