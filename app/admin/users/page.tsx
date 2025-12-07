import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function getUsers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/users`, { 
      cache: "no-store" 
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">

        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-primary mb-6">User Management</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
                
                {users.map((u: any) => (
                  <tr key={u._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.role}</td>
                    <td className="p-3">
                      <a
                        href={`/api/admin/users/toggleRole?id=${u._id}`}
                        className="text-accent font-bold hover:underline"
                      >
                        Toggle Role
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
