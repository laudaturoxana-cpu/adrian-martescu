import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oglinda Duală — Webinar Gratuit | Adrian Martescu",
  description:
    "Descoperă mecanismul de formare a realității personale. Webinar gratuit cu Adrian Martescu — 20 aprilie, ora 19:00. Locuri limitate.",
  keywords: [
    "webinar gratuit",
    "dirijarea realitatii",
    "oglinda duala",
    "Adrian Martescu",
    "mecanismul realitatii",
    "transformare personala",
  ],
  openGraph: {
    title: "Oglinda Duală — Webinar Gratuit cu Adrian Martescu",
    description:
      "Descoperă mecanismul care îți formează realitatea. 20 aprilie · ora 19:00 · Gratuit · Locuri limitate.",
    url: "https://www.adrianmartescu.ro/webinar",
    type: "website",
  },
  alternates: {
    canonical: "https://www.adrianmartescu.ro/webinar",
  },
};

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
