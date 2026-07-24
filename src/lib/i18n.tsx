"use client";

import * as React from "react";
import { translations, type Locale, type TranslationKey } from "@/lib/translations";
import {
  formatNumber as _formatNumber,
  formatCompact as _formatCompact,
  formatPercent as _formatPercent,
  localeDigits as _localeDigits,
} from "@/lib/format";

interface LanguageContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
  formatCompact: (value: number) => string;
  formatPercent: (value: number) => string;
  localeDigits: (input: string | number) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);


export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [locale, setLocaleState] = React.useState<Locale>("fa");


  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);


  const toggleLocale = React.useCallback(() => {
    setLocaleState((prev) => {
      return prev === "fa" ? "en" : "fa";
    });
  }, []);


  const dir: "rtl" | "ltr" =
    locale === "fa" ? "rtl" : "ltr";


  React.useEffect(() => {
    const html = document.documentElement;

    html.lang = locale;
    html.dir = dir;

  }, [locale, dir]);



  const t = React.useCallback(
    (key: TranslationKey) => {

      const dict = translations[locale] as Record<string, string>;

      return (
        dict[key] ??
        translations.en[key] ??
        key
      );

    },
    [locale]
  );



  const formatNumber = React.useCallback(
    (
      value: number,
      options?: Intl.NumberFormatOptions
    ) => {

      return _formatNumber(
        value,
        locale,
        options
      );

    },
    [locale]
  );



  const formatCompact = React.useCallback(
    (value: number) => {

      return _formatCompact(
        value,
        locale
      );

    },
    [locale]
  );



  const formatPercent = React.useCallback(
    (value: number) => {

      return _formatPercent(
        value,
        locale
      );

    },
    [locale]
  );



  const localeDigits = React.useCallback(
    (
      input: string | number
    ) => {

      return _localeDigits(
        input,
        locale
      );

    },
    [locale]
  );



  const value = React.useMemo(
    () => ({
      locale,
      dir,
      setLocale,
      toggleLocale,
      t,
      formatNumber,
      formatCompact,
      formatPercent,
      localeDigits,
    }),
    [
      locale,
      dir,
      setLocale,
      toggleLocale,
      t,
      formatNumber,
      formatCompact,
      formatPercent,
      localeDigits,
    ]
  );



  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}



export function useLanguage() {

  const ctx = React.useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider"
    );
  }

  return ctx;
}



export type { Locale };