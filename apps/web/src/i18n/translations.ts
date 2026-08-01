import en from "./locales/en.json";
import fa from "./locales/fa.json";
import { defaultLocale, type Locale } from "./config";

export const TRANSLATIONS = {
  en,
  fa,
} as const;

export type Translations = (typeof TRANSLATIONS)[Locale];

export function getTranslator(locale: Locale): Translations {
  return TRANSLATIONS[locale] ?? TRANSLATIONS[defaultLocale];
}
