import { NextResponse } from "next/server";

// you can do this manually or use a library like accept-language-parser
import parser from "accept-language-parser";

const PUBLIC_FILE = /\.(.*)$/;

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  //localeDetection: false
});
 
export const config = {
    matcher: [
      '/((?!api|_next|_vercel|.*\\..*).*)',
      '/([\\w-]+)?/users/(.+)'
    ]
  };