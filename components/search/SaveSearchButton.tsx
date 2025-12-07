"use client";

import { useState } from "react";

export default function SaveSearchButton({ 
  query 
}: { 
  query: Record<string, any>;
}) {
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const save = async () => {
    await fetch("/api/saved-searches/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || "My Search",
        query,
      }),
    });

    setSaved(true);
    setShowModal(false);
  };

  if (saved) {
    return (
      <button
        disabled
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Search Saved ✓
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-[#0A1A2F] text-white rounded hover:bg-opacity-90"
      >
        Save Search
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Save This Search</h3>
            
            <input
              type="text"
              placeholder="Search name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <div className="flex gap-3">
              <button
                onClick={save}
                className="flex-1 bg-[#0A1A2F] text-white py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
