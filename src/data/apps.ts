export type AppLink = {
  name: string;
  label: string;
  href: string;
  staging?: boolean;
};

export const apps: AppLink[] = [
  { name: "Leaderboard", label: "Competition", href: "https://www.eastonpodium.com" },
  { name: "Duals", label: "Kids duals", href: "https://www.eastonduals.com" },
  { name: "Easton+", label: "Curriculum", href: "https://eastonplus.com" },
  { name: "Easton+", label: "Staging", href: "https://staging.eastonplus.com", staging: true },
];
