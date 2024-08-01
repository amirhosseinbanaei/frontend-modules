import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest, response: NextResponse) {

  // Add This line if you want disable auto detect language from client browser language
  request.headers.set("Accept-Language", "fa");
  
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: true,
    localePrefix: "never", // Hide /en or /fa from url
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
