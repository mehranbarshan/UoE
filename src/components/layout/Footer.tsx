"use client";

import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/lib/i18n";
import { useNav, type ViewId } from "@/lib/store";

export function Footer() {
  const { t, locale, formatNumber } = useLanguage();
  const { setView } = useNav();

  const cols: { title: string; links: { label: string; view?: ViewId }[] }[] = [
    {
      title: t("footer.product"),
      links: [
        { label: t("nav.researchers"), view: "researchers" },
        { label: t("nav.participants"), view: "participants" },
        { label: t("nav.marketplace"), view: "marketplace" },
        { label: t("nav.pricing"), view: "pricing" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), view: "about" },
        { label: t("footer.careers") },
        { label: t("footer.contact") },
        { label: t("nav.blog"), view: "blog" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.docs") },
        { label: t("footer.api") },
        { label: t("footer.status") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy") },
        { label: t("footer.terms") },
        { label: t("footer.security") },
      ],
    },
  ];

  const year = formatNumber(new Date().getFullYear());

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-[#f39237] hover:text-[#f39237]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => link.view && setView(link.view)}
                      className="text-sm text-muted-foreground transition-colors hover:text-[#f39237] text-start"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {t("brand.full")} (UOE). {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground" dir={locale === "fa" ? "rtl" : "ltr"}>
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
}
