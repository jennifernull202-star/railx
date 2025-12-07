"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactPanelProps {
  price: number;
  seller: {
    _id: string;
    name?: string;
    company?: string;
    logo?: string;
    verified?: boolean;
    isPro?: boolean;
  };
  location: {
    city?: string;
    state?: string;
  };
  listingId: string;
}

export default function ContactPanel({ price, seller, location, listingId }: ContactPanelProps) {
  const [saved, setSaved] = useState(false);

  const handleWatchlist = async () => {
    try {
      const endpoint = saved ? "/api/watchlist/remove" : "/api/watchlist/add";
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      });
      setSaved(!saved);
    } catch (error) {
      console.error("Failed to update watchlist", error);
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-24">
      <div className="mb-6">
        <div className="text-4xl font-bold text-railBlue mb-2">
          ${price.toLocaleString()}
        </div>
        {location.city && location.state && (
          <div className="text-gray-600 text-sm">
            📍 {location.city}, {location.state}
          </div>
        )}
      </div>

      <div className="border-t pt-6 mb-6">
        <h3 className="font-semibold mb-3">Seller Information</h3>
        <Link 
          href={`/seller/${seller._id}`}
          className="flex items-center gap-3 mb-3 hover:bg-gray-50 p-2 rounded transition"
        >
          {seller.logo ? (
            <img src={seller.logo} alt="Seller" className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">
                {(seller.company || seller.name || "S")[0].toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-railBlue">
              {seller.company || seller.name || "Seller"}
            </div>
            {(seller.verified || seller.isPro) && (
              <div className="flex gap-1 mt-1">
                {seller.verified && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    ✓ Verified
                  </span>
                )}
                {seller.isPro && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    Pro Seller
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-railBlue text-white py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition">
          Message Seller
        </button>
        <button className="w-full border border-railBlue text-railBlue py-3 rounded-lg font-semibold hover:bg-railBlue/5 transition">
          Call Seller
        </button>
        <button 
          onClick={handleWatchlist}
          className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
        >
          <span className="text-xl">{saved ? "♥" : "♡"}</span>
          {saved ? "Saved" : "Add to Watchlist"}
        </button>
      </div>

      <div className="mt-6 pt-6 border-t">
        <button className="text-gray-600 text-sm hover:text-railBlue flex items-center gap-2 w-full justify-center">
          <span>🖨️</span> Print Listing
        </button>
      </div>
    </div>
  );
}
