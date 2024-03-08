import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJose } from "./db/helpers/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = cookies().get("Authorization")?.value.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      {
        message: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }

  const decodeToken = await verifyJose<{ _id: string; email: string }>(token);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-id-user", decodeToken._id);
  requestHeaders.set("x-id-email", decodeToken.email);

  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/products/:path*", "/api/add-wishlist", "/api/wishlist"],
};
