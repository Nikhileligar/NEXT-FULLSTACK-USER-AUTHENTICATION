import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const isPublicPath = path === "/login" || "/signup"
    const token = req.cookies.get("token")?.value || "";

    if (isPublicPath) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
}
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}