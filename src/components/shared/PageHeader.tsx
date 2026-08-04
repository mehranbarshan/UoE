"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import type { ViewId } from "@/lib/store";
import { cn } from "@/lib/utils";

export function PageHeader({
  badge,
  title,
  subtitle,
  align = "center",
  children,
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  children?: React.ReactNode;
  className?: string;
}) {
  const { t, locale } = useLanguage();
  const { setView, isLoggedIn, activeMode } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  const backTarget: ViewId = isLoggedIn
    ? activeMode === "participant"
      ? "participant-dashboard"
      : "researcher-dashboard"
    : "home";
  const backLabel = isLoggedIn
    ? activeMode === "participant"
      ? t("common.back.participant")
      : t("common.back.researcher")
    : t("common.back");

  return (
    <section className={cn("relative overflow-hidden gradient-hero", className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#f39237]/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "flex flex-col gap-4",
            align === "center" ? "items-center text-center" : "items-start text-start",
            align === "center" && "mx-auto max-w-3xl"
          )}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setView(backTarget)}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-[#f39237]"
            >
              <Arrow className="size-3.5 rotate-180" />
              {backLabel}
            </button>
          </div>
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f39237]/30 bg-[#f39237]/10 px-3 py-1 text-xs font-semibold text-[#c97020] dark:text-[#f7ae6a]">
              <span className="size-1.5 rounded-full bg-[#f39237]" />
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export { Button };
