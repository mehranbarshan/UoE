import type { Locale } from "./translations";

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toPersianDigits(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

export function toEnglishDigits(input: string): string {
  let result = input;

  PERSIAN_DIGITS.forEach((fa, i) => {
    result = result.replaceAll(fa, String(i));
  });

  ARABIC_DIGITS.forEach((ar, i) => {
    result = result.replaceAll(ar, String(i));
  });

  return result;
}

export function formatNumber(
  value: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(
    locale === "fa" ? "fa-IR" : "en-US",
    options
  ).format(value);
}


export function formatCompact(
  value: number,
  locale: Locale
): string {

  // فارسی
  if (locale === "fa") {
    if (value >= 1_000_000) {
      const m = value / 1_000_000;
      const formatted = m % 1 === 0 ? m : m.toFixed(1);

      return toPersianDigits(`${formatted}+ میلیون`);
    }

    if (value >= 1_000) {
      const k = value / 1_000;
      const formatted = k % 1 === 0 ? k : k.toFixed(1);

      return toPersianDigits(`${formatted}+ هزار`);
    }

    return toPersianDigits(String(value));
  }


  // انگلیسی
  const compact = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
  return `${compact}+`;
}


export function formatPercent(
  value: number,
  locale: Locale
): string {

  if (locale === "fa") {
    return `${toPersianDigits(Math.round(value))}%`;
  }

  return `${Math.round(value)}%`;
}


export function localeDigits(
  input: string | number,
  locale: Locale
): string {

  if (locale === "fa") {
    return toPersianDigits(input);
  }

  return toEnglishDigits(String(input));
}