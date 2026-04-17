import type { Metadata } from "next";
import Link from "next/link";
import { LogoFull } from "@/components/LogoMark";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bine ai venit în program — Adrian Martescu",
  description: "Plata a fost confirmată. Urmează să programezi prima ta întâlnire cu Adrian.",
  robots: { index: false, follow: false },
};

export default function MultumireProgramPage() {
  const waMessage = encodeURIComponent(
    "Bună ziua, tocmai am achitat programul Alchimia Internă Taoistă și aș dori să programăm prima întâlnire."
  );
  const waLink = `https://wa.me/40765350339?text=${waMessage}`;

  return (
    <div style={{ background: "#1A1814", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header className="border-b px-6 py-4" style={{ borderColor: "rgba(184,137,42,0.15)", background: "#1A1814" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/">
            <LogoFull dark />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-xl text-center">

          {/* Portal SVG pulsing */}
          <div className="portal-pulse mb-8 flex justify-center">
            <svg width="90" height="90" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="16.5" stroke="#B8892A" strokeWidth="0.8" />
              <circle cx="18" cy="18" r="11.5" stroke="#B8892A" strokeWidth="0.5" strokeDasharray="3 4" />
              <circle cx="18" cy="18" r="6.5" stroke="#B8892A" strokeWidth="0.8" />
              <circle cx="18" cy="18" r="2.5" fill="#B8892A" />
              <line x1="18" y1="1.5" x2="18" y2="34.5" stroke="#B8892A" strokeWidth="0.35" opacity="0.45" />
              <line x1="1.5" y1="18" x2="34.5" y2="18" stroke="#B8892A" strokeWidth="0.35" opacity="0.45" />
            </svg>
          </div>

          {/* Overline */}
          <p
            className="mb-4 text-xs uppercase tracking-widest"
            style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
          >
            Plată confirmată
          </p>

          {/* Titlu */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 6vw, 54px)",
              color: "#F4EFE4",
              lineHeight: 1.2,
            }}
          >
            Ai intrat în{" "}
            <em style={{ color: "#B8892A", fontStyle: "italic" }}>Alchimia Internă.</em>
          </h1>

          {/* Separator auriu */}
          <div className="mx-auto mb-8 h-px w-16" style={{ background: "rgba(184,137,42,0.4)" }} />

          {/* Text principal */}
          <p
            className="mb-4 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
          >
            Tocmai ai făcut un pas real. Nu un pas motivațional — un angajament față de tine.
          </p>
          <p
            className="mb-10 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
          >
            Acum urmează un singur lucru: ia legătura cu Adrian pe WhatsApp ca să vă programați prima întâlnire.
          </p>

          {/* Buton WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mb-4"
            style={{
              background: "#25D366",
              color: "#ffffff",
              fontFamily: "var(--font-jost), sans-serif",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactează-l pe Adrian →
          </a>

          <p className="mb-12 text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
            Mesajul se pre-completează automat. Dai doar Send.
          </p>

          {/* Citat italic */}
          <p
            className="text-base"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              color: "rgba(184,137,42,0.7)",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              lineHeight: 1.6,
            }}
          >
            Transformarea nu începe când ești gata —<br />
            începe când decizi.
          </p>

        </div>
      </main>

      <Footer simple />
    </div>
  );
}
