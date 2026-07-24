import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansXFaNum-regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-iran-sans",
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
    <html lang="fa" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${iranSans.variable} antialiased bg-background text-foreground`}
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