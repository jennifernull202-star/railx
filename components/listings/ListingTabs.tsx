"use client";

import { useState } from "react";

interface TabsProps {
  description: string;
  specifications: Record<string, any>;
  seller: any;
  location: any;
}

export default function ListingTabs({ description, specifications, seller, location }: TabsProps) {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Details" },
    { id: "specifications", label: "Specifications" },
    { id: "seller", label: "Seller Info" },
    { id: "location", label: "Location" },
  ];

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-semibold whitespace-nowrap transition ${
              activeTab === tab.id
                ? "text-railBlue border-b-2 border-railBlue bg-blue-50"
                : "text-gray-600 hover:text-railBlue hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "details" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {description || "No description provided."}
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            {specifications && Object.keys(specifications).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="flex py-2 border-b">
                    <span className="font-semibold capitalize w-1/2">{key.replace(/_/g, " ")}:</span>
                    <span className="text-gray-700 w-1/2">{String(value)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No specifications available.</p>
            )}
          </div>
        )}

        {activeTab === "seller" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Seller Information</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Name:</span>{" "}
                <span className="text-gray-700">{seller?.company || seller?.name || "N/A"}</span>
              </div>
              {seller?.email && (
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={`mailto:${seller.email}`} className="text-railBlue hover:underline">
                    {seller.email}
                  </a>
                </div>
              )}
              {seller?.phone && (
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href={`tel:${seller.phone}`} className="text-railBlue hover:underline">
                    {seller.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "location" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="space-y-3">
              {location?.city && location?.state && (
                <div>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="text-gray-700">{location.city}, {location.state}</span>
                </div>
              )}
              {location?.address && (
                <div>
                  <span className="font-semibold">Address:</span>{" "}
                  <span className="text-gray-700">{location.address}</span>
                </div>
              )}
              <div className="mt-6 h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                Map placeholder - Integrate with Mapbox/Google Maps
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
