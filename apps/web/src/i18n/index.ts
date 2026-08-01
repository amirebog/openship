export { defaultLocale, locales, localeNames, localeMap, localeDirection, LOCALE_COOKIE, type Locale } from "./config";
export { getTranslator } from "./translations";
// Note: server-side helpers (getLocaleFromCookies, getTranslations, getLocaleDir)
// are intentionally not exported here to avoid bundling server-only APIs into
// client-side code. Server components should import from "./server" directly.
export { useTranslations } from "./client";
