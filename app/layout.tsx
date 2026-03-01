import type { Metadata } from "next";
import { Playfair_Display, Bebas_Neue, DM_Serif_Text, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-text",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Karthik Matam — Portfolio",
  description:
    "Portfolio of a Computer Science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${bebasNeue.variable} ${dmSerifText.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
