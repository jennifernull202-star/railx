"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-railBlue text-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          The Rail Exchange™
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/advertisers">Advertise</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex space-x-4">
          <Link href="/login" className="text-sm">Login</Link>
          <Link
            href="/register"
            className="bg-white text-railBlue px-4 py-2 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
