"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Users,
  Brain,
  BarChart3,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";

export function Hero() {
  const { t, locale, dir } = useLanguage();
  const { setView } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#f39237]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-40 end-0 h-72 w-72 rounded-full bg-[#1d3b4c]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#f39237]/30 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#c97020] shadow-soft backdrop-blur dark:bg-white/5"
          >
            <Sparkles className="size-3.5" />
            {t("hero.badge")}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col gap-3"
          >
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{t("hero.title")}</span>
            </h1>
            <p className="text-xl font-semibold text-[#1d3b4c] dark:text-[#f7ae6a] sm:text-2xl">
              {t("hero.subtitle")}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft h-12 px-6 text-base"
              onClick={() => setView("create")}
            >
              {t("hero.cta.primary")}
              <Arrow className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base border-[#1d3b4c]/20 hover:bg-[#1d3b4c]/5"
              onClick={() => setView("marketplace")}
            >
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { value: "2.4M+", label: t("hero.stat.responses") },
              { value: "12K+", label: t("hero.stat.researchers") },
              { value: "87%", label: t("hero.stat.completion") },
              { value: "340+", label: t("hero.stat.universities") },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: network illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <HeroNetwork dir={dir} />
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="relative flex justify-center pb-6">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs">{t("hero.scroll")}</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </div>
    </section>
  );
}

function HeroNetwork({ dir }: { dir: "rtl" | "ltr" }) {
  const nodes = [
    { id: "researcher", icon: Users, labelKey: "hero.illustration.researcher", x: "50%", y: "8%", color: "#1d3b4c" },
    { id: "data", icon: BarChart3, labelKey: "hero.illustration.data", x: "92%", y: "40%", color: "#2a9d8f" },
    { id: "participant", icon: FileText, labelKey: "hero.illustration.participant", x: "50%", y: "74%", color: "#f39237" },
    { id: "ai", icon: Brain, labelKey: "hero.illustration.ai", x: "8%", y: "40%", color: "#6a8caf" },
  ];
  const { t, locale } = useLanguage();

  return (
    <div className="relative aspect-square w-full">
      {/* connecting ring */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d3b4c" />
            <stop offset="100%" stopColor="#f39237" />
          </linearGradient>
        </defs>
        {/* rotating dashed ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          stroke="url(#ringGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
          opacity={0.5}
        />
        {/* connections between nodes */}
        <line x1="200" y1="40" x2="350" y2="160" stroke="#1d3b4c" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 4" />
        <line x1="350" y1="160" x2="200" y2="280" stroke="#2a9d8f" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 4" />
        <line x1="200" y1="280" x2="50" y2="160" stroke="#f39237" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 4" />
        <line x1="50" y1="160" x2="200" y2="40" stroke="#6a8caf" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 4" />
        <line x1="200" y1="40" x2="200" y2="280" stroke="#1d3b4c" strokeWidth="1.5" opacity="0.18" strokeDasharray="2 6" />
        <line x1="50" y1="160" x2="350" y2="160" stroke="#1d3b4c" strokeWidth="1.5" opacity="0.18" strokeDasharray="2 6" />
      </svg>

      {/* center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative grid size-24 place-items-center rounded-3xl gradient-brand text-white shadow-glow"
        >
          <span className="text-2xl font-extrabold tracking-tight">UOE</span>
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-[#f39237]/20 blur-xl" />
        </motion.div>
      </div>

      {/* nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: node.x, top: node.y }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="grid size-12 place-items-center rounded-2xl border border-border bg-white shadow-soft dark:bg-card sm:size-14"
            >
              <Icon className="size-5 sm:size-6" style={{ color: node.color }} />
            </motion.div>
            <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-soft backdrop-blur dark:bg-card/80">
              {t(node.labelKey as never)}
            </span>
          </motion.div>
        );
      })}

      {/* exchange arrows rotating around */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{ transformOrigin: "center" }}
      >
        <div
          className="absolute text-[#f39237]"
          style={{ top: "50%", left: dir === "rtl" ? "2%" : "98%", transform: "translateY(-50%)" }}
        >
          <ArrowLeft className="size-4" />
        </div>
      </motion.div>

      <span dir={locale === "fa" ? "rtl" : "ltr"} className="sr-only">
        {t("hero.illustration.title")}
      </span>
    </div>
  );
}
