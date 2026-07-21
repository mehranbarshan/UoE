import { create } from "zustand";

export type ViewId =
  | "home"
  | "about"
  | "researchers"
  | "participants"
  | "create"
  | "marketplace"
  | "researcher-dashboard"
  | "participant-dashboard"
  | "analytics"
  | "pricing"
  | "blog"
  | "auth";

interface NavState {
  view: ViewId;
  setView: (view: ViewId) => void;
}

export const useNav = create<NavState>((set) => ({
  view: "home",
  setView: (view) => {
    set({ view });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
}));
