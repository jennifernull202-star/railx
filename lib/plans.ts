export const SUBSCRIPTION_PLANS = {
  pro: {
    name: "Pro Seller",
    priceId: process.env.STRIPE_PRICE_PRO!,
  },
  premium: {
    name: "Premium Seller",
    priceId: process.env.STRIPE_PRICE_PREMIUM!,
  },
  enterprise: {
    name: "Enterprise",
    priceId: process.env.STRIPE_PRICE_ENTERPRISE!,
  },
};
