async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/users`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold text-railBlue mb-6">Users</h1>

      <div className="bg-white border rounded shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u: any) => (
              <tr key={u._id} className="border-b">
                <td className="p-3">{u.name || "—"}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 capitalize">{u.role}</td>
                <td className="p-3">{new Date(u.createdAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
