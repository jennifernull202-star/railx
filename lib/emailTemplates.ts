export function inquiryReceivedTemplate({ 
  sellerName, 
  buyerName, 
  listingTitle 
}: { 
  sellerName: string; 
  buyerName: string; 
  listingTitle: string;
}) {
  return `
    <h2>New Inquiry on ${listingTitle}</h2>
    <p>${buyerName} has contacted you about your listing.</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/messages">View Inquiry</a></p>
  `;
}

export function replyReceivedTemplate({ 
  sellerName, 
  listingTitle 
}: { 
  sellerName: string; 
  listingTitle: string;
}) {
  return `
    <h2>You Have a New Reply</h2>
    <p>${sellerName} responded regarding: ${listingTitle}</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/messages">View Message</a></p>
  `;
}

export function boostExpirationTemplate({ 
  listingTitle 
}: { 
  listingTitle: string;
}) {
  return `
    <h2>Your Listing Boost is Ending Soon</h2>
    <p>Your promoted listing "${listingTitle}" will return to normal visibility soon.</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/listings">Boost again</a></p>
  `;
}

export function adminFlagAlertTemplate({ 
  listingTitle, 
  reportReason 
}: { 
  listingTitle: string; 
  reportReason: string;
}) {
  return `
    <h2>Flagged Listing Alert</h2>
    <p>A listing was flagged for review: ${listingTitle}</p>
    <p>Reason: ${reportReason}</p>
  `;
}

export function verificationEmailTemplate({ 
  token 
}: { 
  token: string;
}) {
  return `
    <h2>Verify Your Email Address</h2>
    <p>Click the link below to verify your email address and activate your account:</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/verify?token=${token}">Verify Email</a></p>
    <p>If you didn't create an account, you can safely ignore this email.</p>
  `;
}

export function passwordResetTemplate({ 
  token 
}: { 
  token: string;
}) {
  return `
    <h2>Reset Your Password</h2>
    <p>You requested to reset your password. Click the link below to set a new password:</p>
    <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password?token=${token}">Reset Password</a></p>
    <p>This link will expire in 15 minutes.</p>
    <p>If you didn't request this, you can safely ignore this email.</p>
  `;
}
