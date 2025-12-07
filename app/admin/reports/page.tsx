import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getReports() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/reports`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminReports() {
  const reports = await getReports();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">

        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">User Reports</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">Reported Item</th>
                  <th className="p-3">Reason</th>
                  <th className="p-3">Submitted</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {reports.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      No reports found
                    </td>
                  </tr>
                )}

                {reports.map((r: any) => (
                  <tr key={r._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{r.itemTitle}</td>
                    <td className="p-3">{r.reason}</td>
                    <td className="p-3">{new Date(r.createdAt).toLocaleString()}</td>
                    <td className="p-3">
                      <a
                        href={`/api/admin/reports/resolve?id=${r._id}`}
                        className="text-accent font-bold hover:underline"
                      >
                        Resolve
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
