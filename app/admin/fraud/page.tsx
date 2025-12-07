import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getLogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/fraud/logs`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminFraudLogs() {
  const logs = await getLogs();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">

        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">Fraud Logs</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">User</th>
                  <th className="p-3">Issue</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>

              <tbody>
                {logs.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-6 text-center text-gray-500">
                      No fraud logs found
                    </td>
                  </tr>
                )}

                {logs.map((log: any) => (
                  <tr key={log._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{log.userEmail}</td>
                    <td className="p-3">{log.message}</td>
                    <td className="p-3">{new Date(log.createdAt).toLocaleString()}</td>
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
