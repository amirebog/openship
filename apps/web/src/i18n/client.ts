"use client";

import { useEffect, useMemo, useState } from "react";
import { getTranslator } from "./translations";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./config";

function getLocaleFromBrowser(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const cookie = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${LOCALE_COOKIE}=`))
    ?.split("=")
    .slice(1)
    .join("=");
  if (cookie && locales.includes(cookie as Locale)) {
    return cookie as Locale;
  }
  return defaultLocale;
}

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}

export function useTranslations() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const browserLocale = getLocaleFromBrowser();
    setLocaleState(browserLocale);
  }, []);

  const t = useMemo(() => getTranslator(locale), [locale]);

  const setLocale = (next: Locale) => {
    persistLocale(next);
    setLocaleState(next);
    window.location.reload();
  };

  return {
    locale,
    t,
    setLocale,
  };
}
