import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendSMS(to: string, message: string) {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE!,
    to,
  });
}

// SMS Templates
export function inquirySMS(listingTitle: string) {
  return `New inquiry received on your listing: ${listingTitle}. View at therailexchange.com/messages`;
}

export function replySMS(listingTitle: string) {
  return `You have a new message reply about: ${listingTitle}. View at therailexchange.com/messages`;
}

export function boostExpiringSMS(listingTitle: string) {
  return `Your listing boost for "${listingTitle}" is expiring soon. Renew at therailexchange.com/dashboard/listings`;
}
