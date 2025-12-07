export const metadata = {
  title: "Privacy Policy | The Rail Exchange",
  description: "Privacy Policy for The Rail Exchange™ marketplace platform.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-railBlue mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-2">Effective Date: January 1, 2024</p>
      <p className="text-gray-600 mb-12">Last Updated: January 1, 2024</p>

      <div className="space-y-8 text-gray-700">
        <p className="leading-relaxed">
          The Rail Exchange™ collects and processes personal information to operate our marketplace safely and reliably.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Account Information:</strong> Name, email, phone, business details</li>
            <li><strong>Listing Data:</strong> Photos, descriptions, pricing</li>
            <li><strong>Communications:</strong> Messages and support emails</li>
            <li><strong>Payment Data:</strong> Processed via Stripe (we never store card numbers)</li>
            <li><strong>Technical Data:</strong> IP address, device type, cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">2. How We Use Information</h2>
          <p className="mb-2">We use data to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Create and manage accounts</li>
            <li>Process payments</li>
            <li>Deliver buyer inquiries to sellers</li>
            <li>Display listings and profiles</li>
            <li>Detect and prevent fraud</li>
            <li>Provide customer support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">3. Sharing of Information</h2>
          <p className="font-semibold mb-4">We DO NOT sell your personal information.</p>
          <p className="mb-2">We may share data with:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Payment processors (Stripe)</li>
            <li>Verification partners</li>
            <li>Cloud storage providers (AWS)</li>
            <li>Other users (public listing information only)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">4. Cookies & Tracking</h2>
          <p>We use essential cookies, analytics, and session identifiers. Users may control cookie settings in their browser.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">5. Security</h2>
          <p>We use encryption, access controls, secure authentication, and fraud detection systems to protect your data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">6. Your Rights</h2>
          <p className="mb-2">You may:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Update or correct your information</li>
            <li>Request deletion of your account</li>
            <li>Opt out of marketing emails</li>
          </ul>
          <p className="mt-4">Email support@therailexchange.com for requests.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">7. Children's Privacy</h2>
          <p>The Platform is not intended for individuals under 18.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">8. Contact Us</h2>
          <p>Email: support@therailexchange.com</p>
        </section>
      </div>
    </div>
  );
}
