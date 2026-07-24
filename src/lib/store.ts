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

export type UserRole = "researcher" | "participant";

interface NavState {
  view: ViewId;
  setView: (view: ViewId) => void;
  isLoggedIn: boolean;
  userRole: UserRole | null;
  userName: string;
  login: (role: UserRole, name: string) => void;
  logout: () => void;
}

export const useNav = create<NavState>((set) => ({
  view: "home",
  setView: (view) => {
    set({ view });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  isLoggedIn: false,
  userRole: null,
  userName: "",
  login: (role, name) => {
    const dashboardView: ViewId = role === "researcher" ? "researcher-dashboard" : "participant-dashboard";
    set({ isLoggedIn: true, userRole: role, userName: name, view: dashboardView });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  logout: () => {
    set({ isLoggedIn: false, userRole: null, userName: "", view: "home" });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
}));
