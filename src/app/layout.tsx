import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "University of Exchange | دانشگاه تبادل",
  description:
    "University of Exchange (UOE) — the bridge between researchers and real participants. Better research with quality data, engaged respondents, and an interactive survey experience.",
  keywords: [
    "University of Exchange",
    "UOE",
    "دانشگاه تبادل",
    "research platform",
    "surveys",
    "questionnaires",
    "academic research",
    "پژوهش",
    "پرسشنامه",
  ],
  authors: [{ name: "University of Exchange" }],
  openGraph: {
    title: "University of Exchange | دانشگاه تبادل",
    description:
      "Connecting researchers with real participants. Faster, smarter, more engaging research.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "University of Exchange",
    description: "Connecting researchers with real participants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
            <SonnerToaster position="top-center" richColors />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
