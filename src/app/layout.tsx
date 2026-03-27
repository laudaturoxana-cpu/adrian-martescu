import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adrianmartescu.ro"),
  title: "Adrian Martescu — Dirijarea Realității | Instrumente concrete pentru o viață care merge în direcția ta",
  description: "Practici concrete din Modelul Variantelor, Alchimia Internă Taoistă și tehnicile David R. Hawkins. Nu motivație — instrumente reale pentru viața ta de zi cu zi.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Adrian Martescu — Dirijarea Realității",
    description: "Instrumente concrete pentru o viață care merge în direcția ta.",
    url: "https://www.adrianmartescu.ro",
    siteName: "Adrian Martescu",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Martescu — Dirijarea Realității",
    description: "Instrumente concrete pentru o viață care merge în direcția ta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
