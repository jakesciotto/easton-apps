import type { Metadata } from "next";
import { Anton, Barlow, IBM_Plex_Mono, Oswald } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const oswald = Oswald({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-oswald" });
const barlow = Barlow({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-barlow" });
const plexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Easton Apps",
  description: "Links to the Easton apps for staff and coaches.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${barlow.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
