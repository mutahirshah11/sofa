import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

// Clerk Middleware
export default clerkMiddleware({
  // Optional configurations for Clerk Middleware can be added here if required.
});

export function middleware(req: NextRequest) {
  // Agar user `/studio` route pe jaane ki koshish kar raha hai
  if (req.nextUrl.pathname.startsWith("/studio")) {
    // Redirect kar do user ko home page ya error page pe
    return NextResponse.redirect(new URL("/error", req.url)); // Ya "/error" page ko custom error page banayein
  }

  // Clerk middleware ko run karne dena
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Ensure `/studio` is matched and blocked
    '/studio/:path*',
  ],
};
