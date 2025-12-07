import Container from "@/components/global/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";
import SellerStatCard from "@/components/dashboard/SellerStatCard";

async function getAdminStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/stats`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AdminDashboard() {
  const stats = await getAdminStats();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">

        <AdminSidebar />

        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold text-primary mb-8">Admin Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SellerStatCard label="Total Users" value={stats?.users || 0} />
            <SellerStatCard label="Active Listings" value={stats?.listings || 0} />
            <SellerStatCard label="Contractors" value={stats?.contractors || 0} />
            <SellerStatCard label="Open Reports" value={stats?.reports || 0} />
          </div>
        </div>

      </div>
    </Container>
  );
}
