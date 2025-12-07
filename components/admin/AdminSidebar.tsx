import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-full bg-primary text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-4">
        <Link href="/admin" className="block hover:text-accent transition">
          Dashboard
        </Link>

        <Link href="/admin/users" className="block hover:text-accent transition">
          Users
        </Link>
        
        <Link href="/admin/listings" className="block hover:text-accent transition">
          Listings
        </Link>

        <Link href="/admin/contractors" className="block hover:text-accent transition">
          Contractors
        </Link>
        
        <Link href="/admin/rentals" className="block hover:text-accent transition">
          Rentals
        </Link>
        
        <Link href="/admin/real-estate" className="block hover:text-accent transition">
          Real Estate
        </Link>

        <Link href="/admin/ads" className="block hover:text-accent transition">
          Advertisements
        </Link>

        <Link href="/admin/reports" className="block hover:text-accent transition">
          Reports
        </Link>
        
        <Link href="/admin/fraud" className="block hover:text-accent transition">
          Fraud Logs
        </Link>

        <Link href="/admin/settings" className="block hover:text-accent transition">
          System Settings
        </Link>
      </nav>
    </div>
  );
}
