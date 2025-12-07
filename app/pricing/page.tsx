import PricingCard from "@/components/pricing/PricingCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";

export const metadata = {
  title: "Pricing | The Rail Exchange",
  description:
    "Choose the plan that fits your rail business. No lead fees. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-railBlue mb-4">
          Plans & Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Built for buyers, sellers, contractors, and dealers.
          All inquiries are free.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Basic Seller */}
        <PricingCard
          title="Basic Seller"
          price="$29/mo"
          buttonText="Get Started"
          features={[
            "5 active listings",
            "Standard placement",
            "Free inquiries (no lead fees ever)",
            "Messaging",
            "Watchlist alerts",
            "Basic profile",
            "24–48 hr approval",
          ]}
        />

        {/* Pro Seller */}
        <PricingCard
          title="Pro Seller"
          price="$99/mo"
          buttonText="Upgrade to Pro"
          highlight={true}
          features={[
            "20 active listings",
            '"Pro Seller" badge',
            "Priority placement in search",
            "Same-day approval",
            "Basic analytics",
            "Real estate listing access",
            "Rental listings included",
          ]}
        />

        {/* Dealer/Enterprise */}
        <PricingCard
          title="Dealer / Enterprise"
          price="$299/mo"
          buttonText="Talk to Sales"
          features={[
            "Unlimited listings",
            "Full rental fleet support",
            "Dealer page with branding",
            "Top-tier placement",
            "Bulk upload (CSV)",
            "Team accounts (5 seats)",
            "API inventory feed",
            "Monthly performance report",
          ]}
        />
      </div>

      {/* CONTRACTOR PLAN */}
      <div className="mt-28 bg-gray-50 py-16 px-10 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-railBlue mb-6">
          Contractor Plans
        </h2>

        <div className="max-w-3xl mx-auto">
          <PricingCard
            title="Contractor Pro"
            price="$149/mo"
            buttonText="Join as Contractor"
            features={[
              "Verified Contractor Badge",
              "Unlimited service listings",
              "Service area map",
              "Directory placement",
              "Free inquiry routing",
              "Contractor analytics",
              "Customer reviews",
            ]}
          />
        </div>
      </div>

      {/* LISTING BOOSTS */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Listing Boosts</h2>
        <p className="text-gray-600 mb-8">Temporarily enhance visibility for your listings</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Featured Listing</h3>
            <p className="text-gray-600 text-2xl font-bold mt-2">$39</p>
            <p className="text-sm text-gray-500">30 days</p>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>✓ Ranks above standard listings</li>
              <li>✓ Highlighted card</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg bg-white border-railBlue">
            <h3 className="text-xl font-semibold">Premium Boost</h3>
            <p className="text-railBlue text-2xl font-bold mt-2">$99</p>
            <p className="text-sm text-gray-500">30 days</p>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>✓ Ranks above Featured</li>
              <li>✓ Image banner on category pages</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Homepage Feature</h3>
            <p className="text-gray-600 text-2xl font-bold mt-2">$199</p>
            <p className="text-sm text-gray-500">7 days</p>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>✓ Displays on homepage</li>
              <li>✓ Limited slots</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ADD-ONS */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Add-Ons & Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Rental Fleet Add-On</h3>
            <p className="text-gray-600">$79/mo</p>
            <p className="text-sm text-gray-500 mt-2">Full rental listing system with availability calendar</p>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Real Estate Listing</h3>
            <p className="text-gray-600">$49 per listing (90 days)</p>
            <p className="text-sm text-gray-500 mt-2">Stand-alone option without Pro subscription</p>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">SMS Inquiry Alerts</h3>
            <p className="text-gray-600">$5/mo</p>
            <p className="text-sm text-gray-500 mt-2">Get text notifications for new inquiries</p>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">API Dealer Feed</h3>
            <p className="text-gray-600">$49/mo</p>
            <p className="text-sm text-gray-500 mt-2">Automated inventory sync via API</p>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">Identity Verification</h3>
            <p className="text-gray-600">$5 one-time</p>
            <p className="text-sm text-gray-500 mt-2">Business verification for trusted sellers</p>
          </div>
        </div>
      </div>

      {/* ADVERTISING PRODUCTS */}
      <div className="mt-28 bg-railBlue text-white py-16 px-10 rounded-xl">
        <h2 className="text-4xl font-bold text-center mb-6">
          Advertising Products
        </h2>
        <p className="text-center text-lg text-gray-300 mb-10">
          Premium visibility for brands and dealers
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg">
            <h3 className="text-xl font-semibold">Homepage Banner Ads</h3>
            <p className="mt-1 text-2xl font-bold">$499/mo</p>
            <p className="text-sm text-gray-300 mt-2">Maximum visibility on the homepage</p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <h3 className="text-xl font-semibold">Sidebar Display Ads</h3>
            <p className="mt-1 text-2xl font-bold">$249/mo</p>
            <p className="text-sm text-gray-300 mt-2">Appears across all category pages</p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <h3 className="text-xl font-semibold">Sponsored Category Header</h3>
            <p className="mt-1 text-2xl font-bold">$349/mo</p>
            <p className="text-sm text-gray-300 mt-2">Own the top ribbon of a category</p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <h3 className="text-xl font-semibold">Contractor Directory Sponsorship</h3>
            <p className="mt-1 text-2xl font-bold">$199/mo</p>
            <p className="text-sm text-gray-300 mt-2">First position in contractor search</p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <h3 className="text-xl font-semibold">Newsletter Advertisement</h3>
            <p className="mt-1 text-2xl font-bold">$149/send</p>
            <p className="text-sm text-gray-300 mt-2">Reach subscribers via email</p>
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <ComparisonTable />

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8">
          Join the fastest-growing marketplace for railroad equipment, services, and real estate.
        </p>

        <a href="/register">
          <button className="bg-railBlue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-railBlue/90">
            Create Account
          </button>
        </a>
      </div>
    </div>
  );
}
