export const LOCALE_COOKIE = "openship_locale" as const;
export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
};

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
};

export const defaultLocale: Locale = "en";

export const localeMap: Record<Locale, string> = {
  en: "en-US",
  fa: "fa-IR",
};
