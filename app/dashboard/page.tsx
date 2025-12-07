export const metadata = {
  title: "Dashboard | The Rail Exchange",
};

export default async function DashboardHome() {
  // TODO: Fetch real stats from API
  const stats = {
    totalListings: 0,
    activeListings: 0,
    messages: 0,
    watchlistCount: 0,
    monthlyViews: 0,
    inquiries: 0,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your marketplace activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Active Listings</h3>
              <p className="text-3xl font-bold text-railBlue mt-2">{stats.activeListings}</p>
            </div>
            <div className="text-4xl">📦</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {stats.totalListings} total listings
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Messages</h3>
              <p className="text-3xl font-bold text-railBlue mt-2">{stats.messages}</p>
            </div>
            <div className="text-4xl">💬</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Unread inquiries
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Monthly Views</h3>
              <p className="text-3xl font-bold text-railBlue mt-2">{stats.monthlyViews}</p>
            </div>
            <div className="text-4xl">👁️</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {stats.inquiries} inquiries this month
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-railBlue mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/dashboard/listings/create"
            className="flex items-center gap-3 p-4 border rounded-lg hover:border-railBlue hover:bg-blue-50 transition"
          >
            <span className="text-2xl">➕</span>
            <div>
              <p className="font-semibold text-railBlue">Create Listing</p>
              <p className="text-xs text-gray-600">Post new equipment</p>
            </div>
          </a>

          <a
            href="/dashboard/messages"
            className="flex items-center gap-3 p-4 border rounded-lg hover:border-railBlue hover:bg-blue-50 transition"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-railBlue">View Messages</p>
              <p className="text-xs text-gray-600">Check inquiries</p>
            </div>
          </a>

          <a
            href="/dashboard/billing"
            className="flex items-center gap-3 p-4 border rounded-lg hover:border-railBlue hover:bg-blue-50 transition"
          >
            <span className="text-2xl">💳</span>
            <div>
              <p className="font-semibold text-railBlue">Manage Billing</p>
              <p className="text-xs text-gray-600">View subscription</p>
            </div>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
        <h2 className="text-xl font-bold text-railBlue mb-4">Recent Activity</h2>
        <div className="text-gray-500 text-center py-8">
          No recent activity to display.
        </div>
      </div>
    </div>
  );
}
