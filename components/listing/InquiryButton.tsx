"use client";

export default function InquiryButton({ 
  listingId, 
  message 
}: { 
  listingId: string; 
  message?: string; 
}) {
  async function handleInquiry() {
    await fetch("/api/messages/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listingId,
        message: message || "I'm interested in this listing.",
      }),
    });

    alert("Message sent to seller.");
  }

  return (
    <button
      onClick={handleInquiry}
      className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg font-semibold transition"
    >
      Contact Seller
    </button>
  );
}
