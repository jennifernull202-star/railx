import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const adminPages = ["/admin"];
const dashboardPages = ["/dashboard"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const path = req.nextUrl.pathname;

  // Admin pages
  if (adminPages.some((p) => path.startsWith(p))) {
    if (!token || (token as any).role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Seller dashboard pages
  if (dashboardPages.some((p) => path.startsWith(p))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
