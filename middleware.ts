// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);

  return NextResponse.rewrite(
    isBot
      ? "https://github.com/facebook/react/commit/1e3e30dae2bcfbeb0abc686f2a37aec208eedb39"
      : "https://github.com/facebook/react/commit/18dff7990a81b3ff1e716dd2cf113c6027bdcc06"
  );
}
