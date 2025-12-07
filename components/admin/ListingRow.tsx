"use client";

export default function ListingRow({ listing }: { listing: any }) {
  const perform = async (action: string) => {
    await fetch(`/api/admin/listings/${action}`, {
      method: "POST",
      body: JSON.stringify({ id: listing._id }),
    });
    window.location.reload();
  };

  return (
    <tr className="border-b">
      <td className="p-3">{listing.title}</td>
      <td className="p-3 capitalize">{listing.category}</td>
      <td className="p-3">{listing.sellerId?.email || "Unknown"}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded text-white text-xs ${
            listing.status === "active" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {listing.status}
        </span>
      </td>

      <td className="p-3 text-right">
        {listing.status === "active" ? (
          <button
            onClick={() => perform("suspend")}
            className="px-3 py-2 bg-red-600 text-white rounded text-xs mr-2"
          >
            Suspend
          </button>
        ) : (
          <button
            onClick={() => perform("approve")}
            className="px-3 py-2 bg-green-600 text-white rounded text-xs mr-2"
          >
            Approve
          </button>
        )}

        <button
          onClick={() => perform("delete")}
          className="px-3 py-2 bg-gray-600 text-white rounded text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
