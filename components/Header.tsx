"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-railBlue text-white shadow-lg">
      {/* Main Header Bar */}
      <div className="h-[72px] max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold whitespace-nowrap">
          The Rail Exchange™
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link href="/marketplace/equipment" className="hover:text-railAccent transition">
            Equipment
          </Link>
          <Link href="/marketplace/tools" className="hover:text-railAccent transition">
            Tools
          </Link>
          <Link href="/marketplace/rail" className="hover:text-railAccent transition">
            Materials
          </Link>
          <Link href="/marketplace/rentals" className="hover:text-railAccent transition">
            Rentals
          </Link>
          <Link href="/marketplace/real-estate" className="hover:text-railAccent transition">
            Real Estate
          </Link>
          <Link href="/contractors" className="hover:text-railAccent transition">
            Contractors
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-sm hover:text-railAccent transition">
            Login
          </Link>
          <Link href="/register" className="text-sm hover:text-railAccent transition">
            Register
          </Link>
          <Link
            href="/listings/create"
            className="bg-white text-railBlue px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Post a Listing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-railBlue border-t border-white/10">
          <nav className="max-w-[1280px] mx-auto px-6 py-4 space-y-3">
            <Link href="/marketplace/equipment" className="block py-2 hover:text-railAccent transition">
              Equipment
            </Link>
            <Link href="/marketplace/tools" className="block py-2 hover:text-railAccent transition">
              Tools
            </Link>
            <Link href="/marketplace/rail" className="block py-2 hover:text-railAccent transition">
              Materials
            </Link>
            <Link href="/marketplace/rentals" className="block py-2 hover:text-railAccent transition">
              Rentals
            </Link>
            <Link href="/marketplace/real-estate" className="block py-2 hover:text-railAccent transition">
              Real Estate
            </Link>
            <Link href="/contractors" className="block py-2 hover:text-railAccent transition">
              Contractors
            </Link>
            <div className="pt-4 space-y-3 border-t border-white/10">
              <Link href="/login" className="block py-2">
                Login
              </Link>
              <Link href="/register" className="block py-2">
                Register
              </Link>
              <Link
                href="/listings/create"
                className="block bg-white text-railBlue px-6 py-2 rounded-md font-semibold text-center"
              >
                Post a Listing
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
