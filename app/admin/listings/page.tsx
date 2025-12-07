import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getListings() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/listings`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminListings() {
  const listings = await getListings();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        
        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">All Listings</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Seller</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {listings.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-gray-500">
                      No listings found
                    </td>
                  </tr>
                )}

                {listings.map((l: any) => (
                  <tr key={l._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{l.title}</td>
                    <td className="p-3">{l.category}</td>
                    <td className="p-3">{l.sellerEmail}</td>
                    <td className="p-3">{l.isActive ? "Active" : "Inactive"}</td>
                    <td className="p-3 space-x-4">
                      <a
                        href={`/api/admin/listings/approve?id=${l._id}`}
                        className="text-accent hover:underline"
                      >
                        Approve
                      </a>
                      <a
                        href={`/api/admin/listings/suspend?id=${l._id}`}
                        className="text-red-600 hover:underline"
                      >
                        Suspend
                      </a>
                      <a
                        href={`/api/admin/listings/delete?id=${l._id}`}
                        className="text-gray-600 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Container>
  );
}
