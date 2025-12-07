import Container from "@/components/global/Container";
import SellerSidebar from "@/components/dashboard/SellerSidebar";
import SellerStatCard from "@/components/dashboard/SellerStatCard";

async function getStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/seller/stats`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function SellerDashboard() {
  const stats = await getStats();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        
        <SellerSidebar />

        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold text-primary mb-8">
            Seller Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SellerStatCard
              label="Active Listings"
              value={stats?.activeListings || 0}
            />
            <SellerStatCard
              label="Total Views"
              value={stats?.totalViews || 0}
            />
            <SellerStatCard
              label="Messages"
              value={stats?.messageCount || 0}
            />
          </div>

          <div className="mt-10 bg-white border border-gray-200 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <a
                href="/dashboard/seller/listings/create"
                className="block px-4 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold text-center transition"
              >
                Create New Listing
              </a>

              <a
                href="/dashboard/seller/messages"
                className="block px-4 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold text-center transition"
              >
                View Messages
              </a>

              <a
                href="/dashboard/seller/analytics"
                className="block px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md font-semibold text-center transition"
              >
                View Analytics
              </a>
            </div>
          </div>

          <div className="mt-10 bg-white border border-gray-200 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Recent Activity
            </h2>

            <p className="text-gray-500 text-sm">
              No recent activity to display.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
