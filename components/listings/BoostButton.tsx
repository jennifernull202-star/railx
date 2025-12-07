import PurchaseButton from "@/components/payments/PurchaseButton";

export default function BoostButton({ listingId }: { listingId: string }) {
  return (
    <PurchaseButton
      priceId={process.env.NEXT_PUBLIC_STRIPE_BOOST_PRICE_ID!}
      mode="payment"
      metadata={{ listingId }}
    />
  );
}
