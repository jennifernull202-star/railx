"use client";

export default function PurchaseButton({ priceId, mode, metadata }: { priceId: string; mode: "subscription" | "payment"; metadata?: any }) {
  const checkout = async () => {
    const res = await fetch("/api/payments/checkout", {
      method: "POST",
      body: JSON.stringify({
        priceId,
        mode,
        ...metadata,
      }),
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <button
      onClick={checkout}
      className="px-6 py-3 bg-railBlue text-white rounded"
    >
      Purchase
    </button>
  );
}
