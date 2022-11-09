// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);

  return NextResponse.rewrite(
    isBot ? "https://www.google.com" : "https://www.twitter.com"
  );
}
