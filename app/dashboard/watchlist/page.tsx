"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WatchlistPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWatchlist() {
      try {
        const res = await fetch("/api/watchlist/list");
        const data = await res.json();
        // Extract listing from populated data
        setItems(data.map((item: any) => item.listingId).filter(Boolean));
      } catch (error) {
        console.error("Failed to load watchlist:", error);
      } finally {
        setLoading(false);
      }
    }
    loadWatchlist();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Watchlist</h1>
        <p className="text-gray-600 mt-2">Listings you're following and interested in.</p>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
          <div className="text-6xl mb-4">♡</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Your watchlist is empty</h3>
          <p className="text-gray-600 mb-6">
            Save listings you're interested in to keep track of them here.
          </p>
          <Link
            href="/marketplace"
            className="inline-block bg-railBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition"
          >
            Browse Marketplace
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item: any) => (
            <Link
              key={item._id}
              href={`/listings/${item._id}/${item.slug || ""}`}
              className="bg-white shadow-sm border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {item.images?.[0] && (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                {item.price && (
                  <p className="text-railBlue font-bold">${item.price.toLocaleString()}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
