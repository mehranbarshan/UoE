"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  BookOpen,
  Sparkles,
  Search,
  Loader2,
  ChevronRight,
  BadgeCheck,
  FlaskConical,
  Flag,
  Plus,
  Clock,
  FileText,
  Send,
  Bot,
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage, type Locale } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import {
  standardLibrary,
  aiSampleQuestions,
  aiMoreQuestions,
  type LibraryQuestionnaire,
} from "@/lib/content";
import type { TranslationKey } from "@/lib/translations";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Stage = "options" | "library" | "ai";

export function CreateResearchOptionsModal() {
  const { t, locale } = useLanguage();
  const { createOptionsOpen, closeCreateOptions, setView, setSurveySeed } = useNav();
  const [stage, setStage] = React.useState<Stage>("options");

  const handleClose = () => {
    setStage("options");
    closeCreateOptions();
  };

  const startManual = () => {
    handleClose();
    setView("create");
  };

  const useLibrary = (lib: LibraryQuestionnaire) => {
    const title = locale === "fa" ? lib.titleFa : lib.titleEn;
    setSurveySeed(
      lib.questions.map((q, i) => ({
        text: locale === "fa" ? q.textFa : q.textEn,
        source: "library" as const,
        ...(i === 0 ? { title } : {}),
      }))
    );
    handleClose();
    setView("create");
  };

  return (
    <Dialog open={createOptionsOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        showCloseButton
        overlayClassName="backdrop-blur-sm bg-black/40"
        className="max-w-2xl gap-0 overflow-hidden rounded-3xl border-border p-0 shadow-soft sm:max-w-3xl"
      >
        <AnimatePresence mode="wait">
          {stage === "options" && (
            <motion.div
              key="options"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="flex flex-col items-center gap-3 border-b border-border px-6 py-8 text-center">
                <div className="grid size-14 place-items-center rounded-2xl gradient-brand text-white shadow-glow">
                  <FlaskConical className="size-7" />
                </div>
                <DialogTitle className="text-xl font-extrabold leading-relaxed text-foreground sm:text-2xl">
                  {t("create.options.title")}
                </DialogTitle>
                <DialogDescription className="max-w-md text-sm leading-7 text-muted-foreground">
                  {t("create.options.subtitle")}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
                {/* Option 1: Manual */}
                <OptionCard
                  icon={PenTool}
                  tag={t("create.options.manual.tag")}
                  tagColor="bg-[#1d3b4c]/10 text-[#1d3b4c] dark:bg-[#6a8caf]/15 dark:text-[#a8c3d9]"
                  title={t("create.options.manual.title")}
                  desc={t("create.options.manual.desc")}
                  onClick={startManual}
                />

                {/* Option 2: Library */}
                <OptionCard
                  icon={BookOpen}
                  tag={t("create.options.library.tag")}
                  tagColor="bg-[#2a9d8f]/10 text-[#2a9d8f]"
                  title={t("create.options.library.title")}
                  desc={t("create.options.library.desc")}
                  onClick={() => setStage("library")}
                />

                {/* Option 3: AI */}
                <OptionCard
                  icon={Sparkles}
                  tag={t("create.options.ai.tag")}
                  tagColor="bg-[#f39237]/10 text-[#f39237]"
                  title={t("create.options.ai.title")}
                  desc={t("create.options.ai.desc")}
                  highlighted
                  onClick={() => setStage("ai")}
                />
              </div>
            </motion.div>
          )}

          {stage === "library" && (
            <motion.div
              key="library"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <LibraryStage
                onBack={() => setStage("options")}
                onUse={useLibrary}
                onReport={() => toast.success(t("library.report.done"))}
              />
            </motion.div>
          )}

          {stage === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <AIStage
                onBack={() => setStage("options")}
                onUse={(qs) => {
                  setSurveySeed(qs.map((q) => ({ text: q, source: "ai" as const })));
                  handleClose();
                  setView("create");
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function OptionCard({
  icon: Icon,
  tag,
  tagColor,
  title,
  desc,
  highlighted = false,
  onClick,
}: {
  icon: typeof PenTool;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  highlighted?: boolean;
  onClick: () => void;
}) {
  const { locale } = useLanguage();
  const Arrow = ChevronRight;
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-start gap-3 rounded-2xl border p-5 text-start transition-all hover:-translate-y-1",
        highlighted
          ? "border-[#f39237] bg-[#f39237]/5 shadow-glow hover:border-[#f39237]"
          : "border-border bg-card shadow-soft hover:border-[#f39237]/40 hover:shadow-glow"
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={cn(
            "grid size-11 place-items-center rounded-xl text-white shadow-soft",
            highlighted ? "gradient-orange" : "gradient-brand"
          )}
        >
          <Icon className="size-5" />
        </div>
        <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-bold", tagColor)}>{tag}</span>
      </div>
      <h3 className="text-sm font-bold leading-snug text-foreground">{title}</h3>
      <p className="text-xs leading-6 text-muted-foreground">{desc}</p>
      <span
        className={cn(
          "mt-auto flex items-center gap-1 text-xs font-bold",
          highlighted ? "text-[#f39237]" : "text-primary"
        )}
      >
        {locale === "fa" ? "شروع" : "Start"}
        <Arrow className="size-3.5 rtl:rotate-180" />
      </span>
    </button>
  );
}

function LibraryStage({
  onBack,
  onUse,
  onReport,
}: {
  onBack: () => void;
  onUse: (lib: LibraryQuestionnaire) => void;
  onReport: () => void;
}) {
  const { t, locale, localeDigits } = useLanguage();
  const [query, setQuery] = React.useState("");

  const filtered = standardLibrary.filter((lib) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const title = locale === "fa" ? lib.titleFa : lib.titleEn;
    const author = locale === "fa" ? lib.authorFa : lib.authorEn;
    return (
      title.toLowerCase().includes(q) ||
      author.toLowerCase().includes(q) ||
      lib.questions.some((qq) =>
        (locale === "fa" ? qq.textFa : qq.textEn).toLowerCase().includes(q)
      )
    );
  });

  return (
    <>
      <DialogHeader className="flex flex-col items-center gap-3 border-b border-border px-6 py-8 text-center">
        <div className="grid size-14 place-items-center rounded-2xl bg-[#2a9d8f] text-white shadow-soft">
          <BookOpen className="size-7" />
        </div>
        <DialogTitle className="text-xl font-extrabold leading-relaxed text-foreground sm:text-2xl">
          {t("library.title")}
        </DialogTitle>
        <DialogDescription className="max-w-md text-sm leading-7 text-muted-foreground">
          {t("library.subtitle")}
        </DialogDescription>
        <div className="mt-2 w-full max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("library.search.placeholder")}
              className="h-11 ps-9"
            />
          </div>
        </div>
      </DialogHeader>

      <div className="max-h-[46vh] overflow-y-auto p-4">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            {t("library.empty")}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lib) => (
              <div key={lib.id} className="rounded-2xl border border-border bg-card p-4 transition-colors hover:border-[#2a9d8f]/40">
                <h4 className="text-sm font-bold leading-6 text-foreground">
                  {locale === "fa" ? lib.titleFa : lib.titleEn}
                  <span className="text-muted-foreground"> - {lib.reliability}</span>
                </h4>

                <div className="mt-2 space-y-1.5">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5 shrink-0 text-[#2a9d8f]" />
                    {t("library.estimatedTime")}: {localeDigits(lib.estimatedMinutes)} {t("library.minutes")}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <FileText className="size-3.5 shrink-0 text-[#2a9d8f]" />
                    {t("library.reference")}: {locale === "fa" ? lib.authorFa : lib.authorEn} ({localeDigits(lib.year)})
                  </p>
                </div>

                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  {locale === "fa" ? lib.descriptionFa : lib.descriptionEn}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-[#2a9d8f]/10 px-2 py-0.5 text-[10px] font-bold text-[#2a9d8f]">
                    <BadgeCheck className="size-3" />
                    {t("library.validity")}: {lib.validity}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-[#2a9d8f] text-white hover:bg-[#238579]"
                    onClick={() => onUse(lib)}
                  >
                    <Plus className="size-4" />
                    {t("library.use")}
                  </Button>
                  <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={onReport}>
                    <Flag className="size-3.5" />
                    {t("library.report")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DialogFooter className="border-t border-border px-6 py-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground">
          {locale === "fa" ? "→" : "←"} {t("create.options.back")}
        </Button>
      </DialogFooter>
    </>
  );
}

interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  questions?: string[];
  library?: LibraryQuestionnaire | null;
}

interface AIReply {
  text: string;
  questions?: string[];
  library?: LibraryQuestionnaire | null;
}

function findLibraryMatch(text: string): LibraryQuestionnaire | null {
  const tokens = text
    .toLowerCase()
    .replace(/[؟?!.،,؛:()]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
  let best: LibraryQuestionnaire | null = null;
  let bestScore = 0;
  for (const lib of standardLibrary) {
    const haystack =
      `${lib.titleFa} ${lib.titleEn} ${lib.descriptionFa} ${lib.descriptionEn} ` +
      lib.questions.map((qq) => qq.textFa).join(" ");
    let score = 0;
    for (const tok of tokens) {
      if (haystack.toLowerCase().includes(tok)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = lib;
    }
  }
  return bestScore >= 2 ? best : null;
}

function simulateAI(
  input: string,
  history: string[],
  locale: Locale,
  t: (key: TranslationKey) => string
): AIReply {
  const haystack = [...history, input].join(" ");
  const libIntent = /(استاندارد|تطبیق|مطابقت|روایی|معتبر|standard|library|match)/i.test(input);
  if (libIntent) {
    const match = findLibraryMatch(haystack);
    if (match) {
      return {
        text: t("create.ai.chat.reply.library"),
        library: match,
        questions: match.questions.map((qq) => (locale === "fa" ? qq.textFa : qq.textEn)),
      };
    }
    return { text: t("create.ai.chat.reply.fallback") };
  }
  const moreIntent = /(بیشتر|بیشتری|اضافه|بعدی|more|additional|add more)/i.test(input);
  if (moreIntent) {
    const topicMatch = findLibraryMatch(haystack);
    if (topicMatch) {
      return {
        text: t("create.ai.chat.reply.more"),
        questions: topicMatch.questions.map((qq) => (locale === "fa" ? qq.textFa : qq.textEn)),
      };
    }
    return {
      text: t("create.ai.chat.reply.more"),
      questions: aiMoreQuestions.map((qq) => (locale === "fa" ? qq.textFa : qq.textEn)),
    };
  }
  if (input.trim().length > 1) {
    return {
      text: t("create.ai.chat.reply.generated"),
      questions: aiSampleQuestions.map((qq) => (locale === "fa" ? qq.textFa : qq.textEn)),
    };
  }
  return { text: t("create.ai.chat.reply.fallback") };
}

function AIStage({
  onBack,
  onUse,
}: {
  onBack: () => void;
  onUse: (qs: string[]) => void;
}) {
  const { t, locale, localeDigits } = useLanguage();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [suggested, setSuggested] = React.useState<string[]>([]);
  const idRef = React.useRef(0);

  const history = messages.filter((m) => m.role === "user").map((m) => m.text);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { id: `m${++idRef.current}`, role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = simulateAI(text, history, locale, t);
      const newQuestions = reply.questions ?? [];
      setSuggested((prev) => {
        const merged = [...prev];
        for (const qq of newQuestions) {
          if (!merged.includes(qq)) merged.push(qq);
        }
        return merged;
      });
      setMessages((prev) => [
        ...prev,
        {
          id: `m${++idRef.current}`,
          role: "ai",
          text: reply.text,
          questions: reply.questions,
          library: reply.library,
        },
      ]);
      setTyping(false);
    }, 1100);
  };

  const chips = [t("create.ai.chat.chip.more"), t("create.ai.chat.chip.library")];

  return (
    <>
      <DialogHeader className="flex flex-col items-center gap-3 border-b border-border px-6 py-6 text-center">
        <div className="grid size-14 place-items-center rounded-2xl gradient-orange text-white shadow-glow">
          <Bot className="size-7" />
        </div>
        <DialogTitle className="text-xl font-extrabold leading-relaxed text-foreground sm:text-2xl">
          {t("create.ai.assistant.title")}
        </DialogTitle>
        <DialogDescription className="max-w-md text-sm leading-7 text-muted-foreground">
          {t("create.ai.assistant.subtitle")}
        </DialogDescription>
      </DialogHeader>

      <div className="max-h-[40vh] space-y-3 overflow-y-auto p-5">
        {messages.length === 0 && !typing && (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            {t("create.ai.assistant.prompt.ph")}
          </div>
        )}
        {messages.map((m) => (
          <ChatMessageBubble key={m.id} message={m} locale={locale} localeDigits={localeDigits} />
        ))}
        {typing && (
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Loader2 className="size-3.5 animate-spin" />
            {t("create.ai.assistant.generating")}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 px-5 pb-3">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => send(chip)}
            disabled={typing}
            className="rounded-full border border-[#f39237]/40 bg-[#f39237]/5 px-3 py-1.5 text-xs font-medium text-[#b05e10] transition-colors hover:bg-[#f39237]/15 disabled:opacity-50"
          >
            {chip}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="flex items-center gap-2 px-5 pb-4"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("create.ai.chat.inputPlaceholder")}
          className="h-11 bg-background"
        />
        <Button
          type="submit"
          size="icon"
          className="size-11 shrink-0 bg-[#f39237] text-white hover:bg-[#e07f24]"
          disabled={!input.trim() || typing}
          aria-label={t("create.ai.chat.send")}
        >
          <Send className="size-4" />
        </Button>
      </form>

      <DialogFooter className="flex items-center justify-between gap-2 border-t border-border px-6 py-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground">
          {locale === "fa" ? "→" : "←"} {t("create.options.back")}
        </Button>
        {suggested.length > 0 && (
          <Button
            size="sm"
            className="bg-[#f39237] text-white hover:bg-[#e07f24]"
            onClick={() => onUse(suggested)}
          >
            <Plus className="size-4" />
            {t("create.ai.chat.use")} ({localeDigits(suggested.length)})
          </Button>
        )}
      </DialogFooter>
    </>
  );
}

function ChatMessageBubble({
  message,
  locale,
  localeDigits,
}: {
  message: ChatMessage;
  locale: Locale;
  localeDigits: (value: string | number) => string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-[85%] flex-col gap-1.5",
        message.role === "user" ? "ms-auto items-end" : "me-auto items-start"
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-3.5 py-2.5 text-sm leading-6",
          message.role === "user"
            ? "bg-[#1d3b4c] text-white"
            : "border border-border bg-card text-foreground"
        )}
      >
        {message.text}
      </div>

      {message.library && (
        <div className="w-full rounded-xl border border-[#2a9d8f]/25 bg-[#2a9d8f]/5 p-3">
          <p className="text-xs font-bold leading-6 text-foreground">
            {locale === "fa" ? message.library.titleFa : message.library.titleEn}
          </p>
          <p className="text-[11px] leading-5 text-muted-foreground">
            {locale === "fa" ? message.library.authorFa : message.library.authorEn} (
            {localeDigits(message.library.year)})
          </p>
        </div>
      )}

      {message.questions && message.questions.length > 0 && (
        <ul className="w-full space-y-1.5">
          {message.questions.map((qq, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-xl border border-[#f39237]/25 bg-[#f39237]/5 p-2.5 text-xs leading-5 text-foreground"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#f39237]/10 text-[10px] font-bold text-[#f39237]">
                {localeDigits(i + 1)}
              </span>
              {qq}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
