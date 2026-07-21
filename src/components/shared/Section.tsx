"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#f39237]/30 bg-[#f39237]/10 px-3 py-1 text-xs font-semibold text-[#c97020] dark:text-[#f7ae6a]"
        >
          <span className="size-1.5 rounded-full bg-[#f39237]" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
