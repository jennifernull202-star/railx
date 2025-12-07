const rateMap = new Map<string, number[]>();

export function rateLimit(ip: string, limit = 30, timeframe = 60000) {
  const now = Date.now();

  if (!rateMap.has(ip)) {
    rateMap.set(ip, []);
  }

  const timestamps = rateMap.get(ip)!.filter((t) => now - t < timeframe);

  if (timestamps.length >= limit) {
    return false; // blocked
  }

  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return true;
}

export function checkRateLimit(
  req: Request,
  limit: number = 30,
  timeframe: number = 60000
): boolean {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  return rateLimit(ip, limit, timeframe);
}

export function rateLimitByUser(
  userId: string,
  limit: number = 100,
  timeframe: number = 3600000
): boolean {
  return rateLimit(`user:${userId}`, limit, timeframe);
}

export function rateLimitByAction(
  userId: string,
  action: string,
  limit: number = 20,
  timeframe: number = 3600000
): boolean {
  return rateLimit(`${userId}:${action}`, limit, timeframe);
}

// Cleanup old entries every hour
setInterval(() => {
  const now = Date.now();
  rateMap.forEach((timestamps, key) => {
    const recent = timestamps.filter((t) => now - t < 3600000);
    if (recent.length === 0) {
      rateMap.delete(key);
    } else {
      rateMap.set(key, recent);
    }
  });
}, 3600000);
