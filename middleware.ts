import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'de', 'nl'],
  
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Domains can be used to configure different locales for different domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.fr',
  //     defaultLocale: 'fr'
  //   }
  // ]
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 