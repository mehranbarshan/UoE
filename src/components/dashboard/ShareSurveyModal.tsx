"use client";

import * as React from "react";
import QRCode from "react-qr-code";
import { Copy, Check, QrCode, Send, MessageCircle, Mail } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";
import { toast } from "sonner";
import type { MySurvey } from "@/components/dashboard/types";

interface ShareSurveyModalProps {
  open: boolean;
  onClose: () => void;
  survey: MySurvey | null;
}

export function ShareSurveyModal({ open, onClose, survey }: ShareSurveyModalProps) {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const link = survey?.link ?? "";
  const title = survey ? (locale === "fa" ? survey.titleFa : survey.titleEn) : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    toast.success(t("dash.share.copied"));
    window.setTimeout(() => setCopied(false), 1800);
  };

  const shareLinks = {
    telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title}\n${link}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(link)}`,
  };

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="bottom" className="mx-auto max-w-lg rounded-t-2xl">
        <SheetHeader>
          <SheetTitle className="text-lg font-extrabold">{t("dash.share.title")}</SheetTitle>
          <SheetDescription>{title}</SheetDescription>
        </SheetHeader>

        <div className="px-4">
          <p className="text-xs font-semibold text-foreground">{t("dash.share.directLink")}</p>
          <div className="mt-1.5 flex gap-2">
            <Input value={link} readOnly className="h-10 flex-1 text-xs" />
            <Button className="h-10 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={copyLink}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? t("dash.share.copied") : t("dash.share.copyLink")}
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-muted/40 px-4 py-6 mx-4">
          <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <QrCode className="size-4 text-[#1a2b49]" />
            {t("dash.share.qr")}
          </p>
          <div className="rounded-xl bg-white p-3 shadow-soft">
            {link && <QRCode value={link} size={148} fgColor="#1a2b49" />}
          </div>
          <p className="text-center text-[11px] leading-5 text-muted-foreground">{t("dash.share.qr.hint")}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 px-4">
          <a
            href={shareLinks.telegram}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-muted/30 px-2 py-3 text-xs font-semibold text-foreground transition-colors hover:border-[#f39237]/50 hover:text-[#1a2b49]"
          >
            <Send className="size-4 text-[#2a9d8f]" />
            {t("dash.share.telegram")}
          </a>
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-muted/30 px-2 py-3 text-xs font-semibold text-foreground transition-colors hover:border-[#f39237]/50 hover:text-[#1a2b49]"
          >
            <MessageCircle className="size-4 text-emerald-500" />
            {t("dash.share.whatsapp")}
          </a>
          <a
            href={shareLinks.email}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-muted/30 px-2 py-3 text-xs font-semibold text-foreground transition-colors hover:border-[#f39237]/50 hover:text-[#1a2b49]"
          >
            <Mail className="size-4 text-[#f39237]" />
            {t("dash.share.email")}
          </a>
        </div>

        <SheetFooter className="px-4">
          <SheetClose asChild>
            <Button variant="ghost" className="w-full text-muted-foreground">
              {t("common.back")}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
