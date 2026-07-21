"use client";

import * as React from "react";
import { translations, type Locale, type TranslationKey } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("fa");

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocaleState((prev) => (prev === "fa" ? "en" : "fa"));
  }, []);

  const dir = locale === "fa" ? "rtl" : "ltr";

  React.useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = dir;
  }, [locale, dir]);

  const t = React.useCallback(
    (key: TranslationKey) => {
      const dict = translations[locale] as Record<string, string>;
      return dict[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  const value = React.useMemo(
    () => ({ locale, dir, setLocale, toggleLocale, t }),
    [locale, dir, setLocale, toggleLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export type { Locale };
