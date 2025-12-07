"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const path = usePathname();

  const linkClass = (route: string) =>
    `block px-6 py-3 text-sm font-medium ${
      path.startsWith(route)
        ? "bg-railBlue text-white"
        : "text-railBlue hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 border-r bg-white shadow-sm">
      <h2 className="text-2xl font-bold text-railBlue p-6 border-b">
        Admin Panel
      </h2>

      <nav className="mt-4">
        <Link href="/admin" className={linkClass("/admin")}>
          Dashboard Overview
        </Link>
        <Link href="/admin/listings" className={linkClass("/admin/listings")}>
          Manage Listings
        </Link>
        <Link href="/admin/users" className={linkClass("/admin/users")}>
          Manage Users
        </Link>
        <Link
          href="/admin/advertisers"
          className={linkClass("/admin/advertisers")}
        >
          Advertisers
        </Link>
      </nav>
    </aside>
  );
}
