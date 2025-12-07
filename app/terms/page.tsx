export const metadata = {
  title: "Terms of Service | The Rail Exchange",
  description: "Terms of Service for The Rail Exchange™ marketplace platform.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-railBlue mb-4">Terms of Service</h1>
      <p className="text-gray-600 mb-2">Effective Date: January 1, 2024</p>
      <p className="text-gray-600 mb-12">Last Updated: January 1, 2024</p>

      <div className="space-y-8 text-gray-700">
        <p className="leading-relaxed">
          Welcome to The Rail Exchange™. By using our platform, you agree to these Terms of Service.
          If you do not agree, please do not use the Platform.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">1. Platform Description</h2>
          <p className="mb-4">The Rail Exchange™ is an online marketplace for railroad industry assets and services.</p>
          <p className="font-semibold">We do not own, inspect, or guarantee the items, services, listings, or users on the Platform.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">2. Eligibility</h2>
          <p className="mb-2">You must:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Be at least 18 years old</li>
            <li>Be legally able to form a binding contract</li>
            <li>Provide accurate account information</li>
            <li>Agree not to engage in fraudulent activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">3. Accounts & Registration</h2>
          <p className="mb-2">You are responsible for:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Maintaining the security of your login</li>
            <li>All activity under your account</li>
            <li>Immediately notifying us of unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">4. Prohibited Activities</h2>
          <p className="mb-2">Not allowed:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Illegal or stolen goods</li>
            <li>Misrepresentation of equipment condition</li>
            <li>Fraud, spam, or deceptive practices</li>
            <li>Data scraping or unauthorized automation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">5. Payments</h2>
          <p>All payments processed through Stripe. Subscriptions renew automatically. Fees are non-refundable unless required by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">6. Limitation of Liability</h2>
          <p className="font-semibold">We provide the Platform "as is" without warranties. We are not liable for user conduct, fraud, or transaction outcomes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-railBlue mb-4">7. Contact</h2>
          <p>Email: support@therailexchange.com</p>
        </section>
      </div>
    </div>
  );
}
