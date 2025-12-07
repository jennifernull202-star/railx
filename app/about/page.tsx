export const metadata = {
  title: "About Us | The Rail Exchange",
  description:
    "The Rail Exchange™ is a modern online marketplace built specifically for the railroad industry. Learn about our mission to connect buyers, sellers, contractors, and rental companies.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-railBlue mb-6">
          About The Rail Exchange™
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A modern online marketplace built specifically for the railroad industry
        </p>
      </div>

      {/* Who We Are */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-railBlue mb-6">Who We Are</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            The Rail Exchange™ is a modern online marketplace built specifically for the railroad industry.
            We connect buyers, sellers, contractors, and rental companies through a centralized platform designed for transparency, safety, and real-time deal flow.
          </p>
          <p>
            <strong>Our mission is simple:</strong><br />
            Make it easier for the rail industry to buy, sell, and connect.
          </p>
          <p>
            From track maintenance tools to rail-served real estate, from on-track equipment to specialized contractor services, The Rail Exchange™ brings the entire ecosystem into one trusted digital environment.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-railBlue mb-6">What We Do</h2>
        <p className="text-gray-700 mb-6">
          The Rail Exchange™ provides a unified marketplace where users can:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-railBlue mb-2">Buy & Sell Rail Equipment</h3>
            <p className="text-gray-700">
              Track tools, hi-rail gear, MOW equipment, locomotives, material, attachments, and more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-railBlue mb-2">List or Find Rail-Served Real Estate</h3>
            <p className="text-gray-700">
              Industrial properties with direct rail access, yards, sidings, and development sites.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-railBlue mb-2">Promote Contractor Services</h3>
            <p className="text-gray-700">
              Track maintenance, construction crews, signal work, surfacing teams, welding, vegetation control, and other essential railroad services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-railBlue mb-2">Rent Specialized Equipment</h3>
            <p className="text-gray-700">
              Short-term and long-term rentals for backhoes, tampers, hi-rail trucks, and machinery commonly used in rail operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-railBlue mb-2">Advertise to the Rail Industry</h3>
            <p className="text-gray-700">
              Manufacturers, service providers, and suppliers can promote products and solutions to a highly targeted professional audience.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-railBlue mb-6">Why We Built This Platform</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            The rail industry has relied on outdated listing websites, spreadsheets, and private networks for decades.
            This results in:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Limited visibility</li>
            <li>Outdated inventory</li>
            <li>Slow communication</li>
            <li>Buyer uncertainty</li>
            <li>Fraud/scam risks</li>
            <li>No standardized verification</li>
            <li>No central place to compare options</li>
          </ul>
          <p className="font-semibold">
            The Rail Exchange™ solves these problems by providing a modern, secure, industry-focused environment built for speed, trust, and efficiency.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="mb-16 bg-railBlue text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">A Marketplace Built on Trust</h2>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            We use identity verification, business verification, and fraud-detection systems to help protect buyers and sellers.
            Every inquiry is delivered free, and communication is handled through our safe messaging platform to prevent scams and protect sensitive information.
          </p>
          <p className="font-semibold text-xl">
            The goal: A legitimate, transparent marketplace the industry can rely on.
          </p>
        </div>
      </section>

      {/* Designed for Professionals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-railBlue mb-6">Designed for Rail Professionals</h2>
        <p className="text-gray-700 text-lg mb-4">Whether you're a:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Class I railroad</li>
            <li>Short line</li>
            <li>Contractor</li>
            <li>Industrial shipper</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Equipment dealer</li>
            <li>Supplier</li>
            <li>Rental company</li>
            <li>Independent worker</li>
          </ul>
        </div>
        <p className="text-gray-700 text-lg">
          The Rail Exchange™ gives you tools built for how the industry actually operates.
        </p>
      </section>

      {/* Our Commitment */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-railBlue mb-6">Our Commitment to the Industry</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            The rail industry is built on safety, reliability, and long-term relationships.
            We honor those values by providing:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Transparent and accurate listings</li>
            <li>Verified sellers and service providers</li>
            <li>A clean and simple user experience</li>
            <li>Mobile-friendly access anywhere</li>
            <li>A no-lead-fee model that keeps deals moving</li>
            <li>Modern tools without the complexity</li>
          </ul>
          <p>
            We are continuously expanding features to support the evolving needs of the rail sector.
          </p>
        </div>
      </section>

      {/* The Future */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-railBlue mb-6">The Future of Railroad Commerce</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            The Rail Exchange™ isn't just a marketplace — it is becoming the digital backbone for buying, selling, and connecting across North America's rail industry.
          </p>
          <p>Our platform is built to scale, with ongoing enhancements for:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time analytics</li>
              <li>Marketplace insights</li>
              <li>Bulk dealer tools</li>
              <li>Contractor reviews</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Fleet management</li>
              <li>Location-based searching</li>
              <li>AI-powered pricing tools</li>
            </ul>
          </div>
          <p className="font-semibold">
            We're committed to giving the rail industry a platform worthy of its importance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-railBlue text-white p-12 rounded-xl">
        <h2 className="text-4xl font-bold mb-6">Join the Rail Exchange™ Community</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're buying, selling, renting, or offering services, you're part of a growing network reshaping how the railroad industry does business.
        </p>
        <a href="/register">
          <button className="bg-white text-railBlue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Create Your Account
          </button>
        </a>
        <p className="text-sm mt-4 text-gray-300">
          See how simple it can be to connect with the people and equipment that keep the rail industry moving.
        </p>
      </section>
    </div>
  );
}
