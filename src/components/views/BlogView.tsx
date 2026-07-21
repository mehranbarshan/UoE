"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { blogPosts } from "@/lib/content";
import { cn } from "@/lib/utils";

export function BlogView() {
  const { t, locale } = useLanguage();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const [featured, ...rest] = blogPosts;

  const fmtDate = (d: string) => {
    try {
      return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(d));
    } catch {
      return d;
    }
  };

  return (
    <>
      <PageHeader badge={t("blog.subtitle")} title={t("blog.title")} subtitle={t("blog.subtitle")} />

      <Section className="bg-background">
        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2"
        >
          <div className={cn("relative min-h-56 bg-gradient-to-br p-8 text-white", featured.gradient)}>
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
            <span className="relative inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              {locale === "fa" ? featured.categoryFa : featured.categoryEn}
            </span>
            <div className="relative mt-auto flex h-full items-end">
              <Calendar className="size-20 opacity-30" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 p-8">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                {fmtDate(featured.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {featured.readMin} {t("blog.min")}
              </span>
            </div>
            <h2 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {locale === "fa" ? featured.titleFa : featured.titleEn}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {locale === "fa" ? featured.excerptFa : featured.excerptEn}
            </p>
            <Button variant="outline" className="w-fit border-[#1d3b4c]/20 hover:bg-[#1d3b4c]/5">
              {t("blog.readmore")}
              <Arrow className="size-4" />
            </Button>
          </div>
        </motion.article>

        {/* Rest of posts */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className={cn("relative h-36 bg-gradient-to-br p-5", post.gradient)}>
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />
                <span className="relative inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">
                  {locale === "fa" ? post.categoryFa : post.categoryEn}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    {fmtDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.readMin} {t("blog.min")}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug text-foreground">
                  {locale === "fa" ? post.titleFa : post.titleEn}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {locale === "fa" ? post.excerptFa : post.excerptEn}
                </p>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[#f39237] transition-colors hover:text-[#e07f24]">
                  {t("blog.readmore")}
                  <Arrow className="size-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
