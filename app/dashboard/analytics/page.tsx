export default function AnalyticsPage() {
  // TODO: Implement real analytics with charts
  const stats = {
    totalViews: 0,
    totalInquiries: 0,
    conversionRate: 0,
    topListing: "N/A",
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your listing performance and buyer engagement.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Total Views</h3>
          <p className="text-3xl font-bold text-railBlue mt-2">{stats.totalViews}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Total Inquiries</h3>
          <p className="text-3xl font-bold text-railBlue mt-2">{stats.totalInquiries}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-bold text-railBlue mt-2">{stats.conversionRate}%</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-500">Top Listing</h3>
          <p className="text-lg font-bold text-railBlue mt-2 truncate">{stats.topListing}</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">30-Day Performance</h2>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
          Chart will be displayed here (integrate Chart.js or Recharts)
        </div>
      </div>

      {/* Listing Performance Table */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Listing Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Listing</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Views</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">Inquiries</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-700">CTR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="text-center p-8 text-gray-500">
                  No data available yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
