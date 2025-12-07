"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/dashboard/seller" },
  { label: "My Listings", href: "/dashboard/seller/listings" },
  { label: "Create Listing", href: "/dashboard/seller/listings/create" },
  { label: "Messages", href: "/dashboard/seller/messages" },
  { label: "Watchlist", href: "/dashboard/seller/watchlist" },
  { label: "Analytics", href: "/dashboard/seller/analytics" },
  { label: "Profile", href: "/dashboard/seller/profile" },
  { label: "Settings", href: "/dashboard/seller/settings" },
];

export default function SellerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white border border-gray-200 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-primary mb-6">Seller Menu</h2>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-md transition ${
              pathname === link.href
                ? "bg-accent text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
