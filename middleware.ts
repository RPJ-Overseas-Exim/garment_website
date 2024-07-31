import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("", request.url));
}

export const config = {
  matcher: ["/signin"],
};
