export default function Footer() {
  return (
    <footer className="bg-railBlue text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="font-semibold mb-4">The Rail Exchange™</h3>
          <p className="text-sm text-railGray">
            The unified marketplace for rail industry equipment, tools, services, rentals, and real estate.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/advertisers">Advertise</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-railGray mt-10">
        © {new Date().getFullYear()} The Rail Exchange™. All rights reserved.
      </div>
    </footer>
  );
}
