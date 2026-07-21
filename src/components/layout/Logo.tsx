"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function Logo({
  className,
  showText = true,
  size = "md",
}: {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const { t } = useLanguage();
  const dims = {
    sm: { box: "h-8 w-8", text: "text-base", sub: "text-[9px]" },
    md: { box: "h-9 w-9", text: "text-lg", sub: "text-[10px]" },
    lg: { box: "h-12 w-12", text: "text-2xl", sub: "text-xs" },
  }[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative grid place-items-center rounded-xl gradient-brand text-white shadow-soft",
          dims.box
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="h-[78%] w-[78%]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* U */}
          <path
            d="M9 11v9.5c0 3.6 2.1 5.5 5.2 5.5 3.1 0 5.3-1.9 5.3-5.5V11"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* O with exchange arrows */}
          <circle cx="29" cy="16.5" r="5" stroke="#F39237" strokeWidth="2.4" />
          {/* exchange arrows inside O */}
          <path
            d="M26.6 15.5h4.2M26.6 15.5l1.3-1.2M26.6 15.5l1.3 1.2"
            stroke="#F39237"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.4 17.8h-4.2M31.4 17.8l-1.3 1.2M31.4 17.8l-1.3-1.2"
            stroke="#F39237"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* E */}
          <path
            d="M9 31h6.5M9 31v-4.2h5M9 28.9h5.5"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-extrabold tracking-tight text-foreground", dims.text)}>
            {t("brand.name")}
          </span>
          <span className={cn("text-muted-foreground font-medium", dims.sub)}>
            {t("brand.full")}
          </span>
        </div>
      )}
    </div>
  );
}
