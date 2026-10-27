export type AppLink = {
  name: string;
  label: string;
  href: string;
  badge?: boolean;
};

export const apps: AppLink[] = [
  { name: "Leaderboard", label: "Competition", href: "https://www.eastonpodium.com" },
  { name: "Duals", label: "Kids duals", href: "https://www.eastonduals.com" },
  { name: "Easton+", label: "Production", href: "https://eastonplus.com", badge: true },
  { name: "Easton+", label: "Staging", href: "https://staging.eastonplus.com", badge: true },
];
