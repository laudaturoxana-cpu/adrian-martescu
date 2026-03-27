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

const BASE = "https://www.adrianmartescu.ro";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Adrian Martescu — Dirijarea Realității",
    template: "%s | Adrian Martescu",
  },
  description:
    "Practici concrete din Modelul Variantelor, Alchimia Internă Taoistă și tehnicile David R. Hawkins. Nu motivație — instrumente reale pentru viața ta de zi cu zi.",
  keywords: [
    "dirijarea realitatii",
    "alchimie interna taoista",
    "Adrian Martescu",
    "coach transformare",
    "modelul variantelor",
    "David Hawkins",
    "Vadim Zeland",
    "dezvoltare personala",
    "webinar gratuit",
  ],
  authors: [{ name: "Adrian Martescu", url: BASE }],
  creator: "Adrian Martescu",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Adrian Martescu — Dirijarea Realității",
    description: "Instrumente concrete pentru o viață care merge în direcția ta.",
    url: BASE,
    siteName: "Adrian Martescu",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Martescu — Dirijarea Realității",
    description: "Instrumente concrete pentru o viață care merge în direcția ta.",
  },
  alternates: {
    canonical: BASE,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adrian Martescu",
  url: BASE,
  jobTitle: "Coach — Dirijarea Realității",
  description:
    "Practicant taoist de aproape 20 de ani. Creator al metodei Dirijarea Realității — un sistem practic care combină Modelul Variantelor, Alchimia Internă Taoistă și tehnicile David R. Hawkins.",
  sameAs: [],
  knowsAbout: [
    "Modelul Variantelor",
    "Alchimia Internă Taoistă",
    "David R. Hawkins",
    "Alan Watts",
    "Vadim Zeland",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Adrian Martescu — Dirijarea Realității",
  url: BASE,
  inLanguage: "ro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
