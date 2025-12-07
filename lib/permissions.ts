export function requireRole(user: any, roles: string[]) {
  if (!roles.includes(user.role)) {
    throw new Error("Forbidden");
  }
}

export function canEditListing(userId: string, sellerId: string, userRole: string) {
  if (userRole === "admin") return true;
  return userId === sellerId;
}

export function canDeleteListing(userId: string, sellerId: string, userRole: string) {
  if (userRole === "admin") return true;
  return userId === sellerId;
}

export function canVerifySeller(userRole: string) {
  return userRole === "admin";
}

export function canAccessAdminPanel(userRole: string) {
  return userRole === "admin";
}

export function canBoostListing(userId: string, sellerId: string, subscriptionStatus: string) {
  if (userId !== sellerId) return false;
  return ["active", "trialing"].includes(subscriptionStatus);
}

export function canSendMessage(userRole: string) {
  return ["buyer", "seller", "contractor", "admin"].includes(userRole);
}

export function canCreateListing(userRole: string) {
  return ["seller", "contractor", "admin"].includes(userRole);
}

export function canViewAnalytics(userId: string, sellerId: string, userRole: string) {
  if (userRole === "admin") return true;
  return userId === sellerId;
}

export function canManageContractor(userId: string, contractorUserId: string, userRole: string) {
  if (userRole === "admin") return true;
  return userId === contractorUserId;
}

export function hasSubscription(subscriptionStatus: string) {
  return ["active", "trialing"].includes(subscriptionStatus);
}

export function isVerifiedSeller(emailVerified: boolean, subscriptionStatus: string) {
  return emailVerified && hasSubscription(subscriptionStatus);
}
