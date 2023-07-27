
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith("/admin") &&
      request.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/basket") &&
      request.token?.role !== "admin" &&
      request.token?.role !== "user"
    ) {
      return NextResponse.rewrite(new URL("/basket", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export  const config = { matcher: ["/admin:path*", "/basket:path*"] };
