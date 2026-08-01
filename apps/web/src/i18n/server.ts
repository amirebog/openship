import { cookies } from "next/headers";
import { getTranslator } from "./translations";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./config";

function parseLocale(value: string | undefined): Locale {
  if (!value) return defaultLocale;

  return locales.includes(value as Locale)
    ? (value as Locale)
    : defaultLocale;
}

// cookies() may be asynchronous depending on Next.js version; expose an async
// helper so callers can await it in server components.
export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(LOCALE_COOKIE)?.value;

  return parseLocale(cookie);
}

export function getLocaleDir(locale: Locale) {
  return locale === "fa" ? "rtl" : "ltr";
}

export function getTranslations(locale: Locale) {
  return getTranslator(locale);
}