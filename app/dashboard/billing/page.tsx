import PurchaseButton from "@/components/payments/PurchaseButton";
import { SUBSCRIPTION_PLANS } from "@/lib/plans";

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-railBlue mb-10">Billing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {Object.entries(SUBSCRIPTION_PLANS).map(([key, plan]) => (
          <div key={key} className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-4">{plan.name}</h2>

            <PurchaseButton
              priceId={plan.priceId}
              mode="subscription"
            />
          </div>
        ))}

      </div>
    </div>
  );
}
