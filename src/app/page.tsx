"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNav } from "@/lib/store";
import { useLanguage } from "@/lib/i18n";
import { HomeView } from "@/components/views/HomeView";
import { AboutView } from "@/components/views/AboutView";
import { ResearchersView } from "@/components/views/ResearchersView";
import { ParticipantsView } from "@/components/views/ParticipantsView";
import { CreateSurveyView } from "@/components/views/CreateSurveyView";
import { MarketplaceView } from "@/components/views/MarketplaceView";
import { ResearcherDashboardView } from "@/components/views/ResearcherDashboardView";
import { ParticipantDashboardView } from "@/components/views/ParticipantDashboardView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { PricingView } from "@/components/views/PricingView";
import { BlogView } from "@/components/views/BlogView";
import { AuthView } from "@/components/views/AuthView";

function renderView(view: string) {
  switch (view) {
    case "home":
      return <HomeView />;
    case "about":
      return <AboutView />;
    case "researchers":
      return <ResearchersView />;
    case "participants":
      return <ParticipantsView />;
    case "create":
      return <CreateSurveyView />;
    case "marketplace":
      return <MarketplaceView />;
    case "researcher-dashboard":
      return <ResearcherDashboardView />;
    case "participant-dashboard":
      return <ParticipantDashboardView />;
    case "analytics":
      return <AnalyticsView />;
    case "pricing":
      return <PricingView />;
    case "blog":
      return <BlogView />;
    case "auth":
      return <AuthView />;
    default:
      return <HomeView />;
  }
}

export default function Home() {
  const { view } = useNav();
  const { dir } = useLanguage();

  // Auth view is full-height, no footer
  const isAuth = view === "auth";

  return (
    <div dir={dir} className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderView(view)}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isAuth && <Footer />}
    </div>
  );
}
