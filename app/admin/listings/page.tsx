import ListingRow from "@/components/admin/ListingRow";

async function getListings() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/listings`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function AdminListingsPage() {
  const listings = await getListings();

  return (
    <div>
      <h1 className="text-2xl font-bold text-railBlue mb-6">
        Manage Listings
      </h1>

      <div className="bg-white border rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Seller</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {listings.map((listing: any) => (
              <ListingRow key={listing._id} listing={listing} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
