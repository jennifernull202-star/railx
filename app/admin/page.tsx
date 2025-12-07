import Container from "@/components/Container";
import AdminStat from "@/components/admin/AdminStat";

async function getStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/stats`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function AdminHome() {
  const stats = await getStats();

  return (
    <Container>
      <h1 className="text-3xl font-bold text-railBlue mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminStat label="Active Listings" value={stats.activeListings} />
        <AdminStat label="Suspended Listings" value={stats.suspendedListings} />
        <AdminStat label="Registered Users" value={stats.users} />
      </div>
    </Container>
  );
}
