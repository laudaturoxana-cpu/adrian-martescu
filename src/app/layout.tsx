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
  title: "Adrian Martescu — Dirijarea Realității | Instrumente concrete pentru o viață care merge în direcția ta",
  description: "Practici concrete din Modelul Variantelor, Alchimia Internă Taoistă și tehnicile David R. Hawkins. Nu motivație — instrumente reale pentru viața ta de zi cu zi.",
  openGraph: {
    title: "Adrian Martescu — Dirijarea Realității",
    description: "Instrumente concrete pentru o viață care merge în direcția ta.",
    type: "website",
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
