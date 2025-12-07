export default function ComparisonTable() {
  return (
    <div className="mt-20 overflow-x-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Compare All Plans
      </h2>

      <table className="w-full border-collapse bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4 font-semibold">Feature</th>
            <th className="p-4 font-semibold">Basic</th>
            <th className="p-4 font-semibold">Pro</th>
            <th className="p-4 font-semibold">Enterprise</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {[
            ["Active Listings", "5", "20", "Unlimited"],
            ["Search Placement", "Standard", "Priority", "Top Tier"],
            ["Listing Approval Time", "24–48 hrs", "Same Day", "Same Day"],
            ["Real Estate Listings", "No", "Yes", "Yes"],
            ["Rental Fleet Access", "No", "Yes", "Yes"],
            ["Analytics Dashboard", "Basic", "Advanced", "Full"],
            ["Team Seats", "1", "2", "5"],
            ["API Inventory Feed", "No", "No", "Yes"],
          ].map((row, i) => (
            <tr key={i} className="border-t">
              <td className="p-4">{row[0]}</td>
              <td className="p-4">{row[1]}</td>
              <td className="p-4">{row[2]}</td>
              <td className="p-4">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
