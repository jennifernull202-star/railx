import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getAds() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/ads`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminAds() {
  const ads = await getAds();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        
        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">Advertisements</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">Advertiser</th>
                  <th className="p-3">Slot</th>
                  <th className="p-3">Active</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {ads.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      No advertisements found
                    </td>
                  </tr>
                )}

                {ads.map((ad: any) => (
                  <tr key={ad._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{ad.companyName}</td>
                    <td className="p-3">{ad.slot}</td>
                    <td className="p-3">{ad.isActive ? "Yes" : "No"}</td>
                    <td className="p-3">
                      <a
                        href={`/api/admin/ads/toggle?id=${ad._id}`}
                        className="text-accent font-bold hover:underline"
                      >
                        Toggle
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
