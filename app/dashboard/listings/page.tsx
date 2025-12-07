export default async function MyListingsPage() {
  // TODO: Fetch user's listings from API
  const listings: any[] = [];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-railBlue">My Listings</h1>
          <p className="text-gray-600 mt-2">Manage all your active and draft listings.</p>
        </div>
        <a
          href="/dashboard/listings/create"
          className="bg-railBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition"
        >
          + Create New Listing
        </a>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border rounded-lg text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Pending Review</option>
            <option>Expired</option>
          </select>

          <select className="px-4 py-2 border rounded-lg text-sm">
            <option>All Categories</option>
            <option>Equipment</option>
            <option>Tools</option>
            <option>Materials</option>
            <option>Rentals</option>
          </select>

          <input
            type="text"
            placeholder="Search listings..."
            className="px-4 py-2 border rounded-lg text-sm flex-1 min-w-[200px]"
          />
        </div>
      </div>

      {/* Listings Grid/List */}
      {listings.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No listings yet</h3>
          <p className="text-gray-600 mb-6">
            Create your first listing to start selling on The Rail Exchange.
          </p>
          <a
            href="/dashboard/listings/create"
            className="inline-block bg-railBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition"
          >
            Create Your First Listing
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {listings.map((listing: any) => (
            <div
              key={listing._id}
              className="bg-white rounded-lg shadow-sm border p-6 hover:border-railBlue transition"
            >
              <div className="flex gap-6">
                <img
                  src={listing.images?.[0] || "/placeholder.jpg"}
                  alt={listing.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-railBlue mb-1">
                        {listing.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{listing.category}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                      {listing.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex gap-6 text-sm text-gray-600">
                    <span>💰 ${listing.price?.toLocaleString()}</span>
                    <span>📍 {listing.location}</span>
                    <span>👁️ {listing.views || 0} views</span>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`/listings/${listing._id}/${listing.slug}`}
                      className="text-sm text-railBlue hover:underline"
                    >
                      View Listing →
                    </a>
                    <a
                      href={`/dashboard/listings/edit/${listing._id}`}
                      className="text-sm text-railBlue hover:underline"
                    >
                      Edit
                    </a>
                    <button className="text-sm text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
