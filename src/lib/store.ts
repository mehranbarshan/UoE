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

export type DashboardMode = "researcher" | "participant";

interface NavState {
  view: ViewId;
  setView: (view: ViewId) => void;
  isLoggedIn: boolean;
  activeMode: DashboardMode;
  userName: string;
  login: (name: string) => void;
  logout: () => void;
  switchMode: () => void;
}

export const useNav = create<NavState>((set, get) => ({
  view: "home",
  setView: (view) => {
    set({ view });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  isLoggedIn: false,
  activeMode: "researcher",
  userName: "",
  login: (name) => {
    const savedMode = (typeof window !== "undefined" && localStorage.getItem("uoe-dashboard-mode")) as DashboardMode | null;
    const mode: DashboardMode = savedMode === "participant" ? "participant" : "researcher";
    const dashboardView: ViewId = mode === "researcher" ? "researcher-dashboard" : "participant-dashboard";
    set({ isLoggedIn: true, activeMode: mode, userName: name, view: dashboardView });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  logout: () => {
    set({ isLoggedIn: false, activeMode: "researcher", userName: "", view: "home" });
    if (typeof window !== "undefined") {
      localStorage.removeItem("uoe-dashboard-mode");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  switchMode: () => {
    const current = get().activeMode;
    const next: DashboardMode = current === "researcher" ? "participant" : "researcher";
    const dashboardView: ViewId = next === "researcher" ? "researcher-dashboard" : "participant-dashboard";
    set({ activeMode: next, view: dashboardView });
    if (typeof window !== "undefined") {
      localStorage.setItem("uoe-dashboard-mode", next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
}));
