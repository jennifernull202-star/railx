import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getContractors() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/contractors`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminContractors() {
  const contractors = await getContractors();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">

        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">Contractors</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Coverage</th>
                  <th className="p-3">Verified</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {contractors.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-gray-500">
                      No contractors found
                    </td>
                  </tr>
                )}

                {contractors.map((c: any) => (
                  <tr key={c._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{c.companyName}</td>
                    <td className="p-3">{c.serviceCategory}</td>
                    <td className="p-3">{c.coverageAreas?.join(", ") || "N/A"}</td>
                    <td className="p-3">{c.isVerified ? "Yes" : "No"}</td>
                    <td className="p-3 space-x-4">
                      <a 
                        href={`/api/admin/approve?id=${c._id}`} 
                        className="text-accent hover:underline"
                      >
                        Verify
                      </a>
                      <a 
                        href={`/api/admin/suspend?id=${c._id}`} 
                        className="text-red-600 hover:underline"
                      >
                        Suspend
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
