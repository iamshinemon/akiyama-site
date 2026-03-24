import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Akiyama Capital",
    template: "%s — Akiyama Capital",
  },
  description:
    "Akiyama Capital is a New York-based investment firm focused on acquiring and operating national security and defense companies across the U.S. through a disciplined roll-up strategy.",
  metadataBase: new URL("https://akiyamacapital.com"),
  openGraph: {
    title: "Akiyama Capital",
    description:
      "Acquiring high-quality defense businesses and scaling them through a disciplined roll-up strategy. One acquisition at a time.",
    url: "https://akiyamacapital.com",
    siteName: "Akiyama Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akiyama Capital",
    description:
      "Acquiring high-quality defense businesses and scaling them through a disciplined roll-up strategy.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
