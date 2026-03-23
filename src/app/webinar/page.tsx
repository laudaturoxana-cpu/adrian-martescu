"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoFull } from "@/components/LogoMark";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export default function WebinarPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/multumire");
  };

  return (
    <div style={{ background: "#F4EFE4" }}>
      {/* Minimal header */}
      <header className="border-b px-6 py-4" style={{ borderColor: "rgba(184,137,42,0.15)", background: "#F4EFE4" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/">
            <LogoFull />
          </Link>
          <Link
            href="/"
            className="text-xs transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}
          >
            ← Înapoi acasă
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-4">
                <span
                  className="inline-block rounded-sm px-4 py-1.5 text-xs"
                  style={{
                    background: "rgba(184,137,42,0.12)",
                    color: "#B8892A",
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Webinar 100% gratuit
                </span>
              </div>

              <h1
                className="mb-6 max-w-2xl leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 6vw, 60px)",
                  color: "#1E1B15",
                }}
              >
                De ce te lovești mereu de aceleași lucruri —{" "}
                <em style={{ color: "#B8892A", fontStyle: "italic" }}>și cum ieși din cercul acela</em>
              </h1>

              <p
                className="mb-12 max-w-xl text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
              >
                90 de minute în care înțelegi mecanismul prin care îți creezi propria realitate — și primești primul instrument concret ca să schimbi asta.
              </p>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 md:mb-16">
                {[
                  "De ce efortul singur nu schimbă nimic — și ce funcționează cu adevărat",
                  "Cum să dai jos negativitatea zilei de pe tine cum dai jos o haină",
                  "Primul pas concret pe care îl faci chiar din seara webinarului",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ color: "#B8892A", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>✦</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* FORMULAR */}
            <AnimatedSection delay={200}>
              <div
                className="mx-auto max-w-lg rounded-sm p-5 sm:p-8 md:p-10"
                style={{ background: "#1A1814" }}
              >
                <p
                  className="mb-6 text-center"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "#B8892A",
                  }}
                >
                  Rezervă-ți locul
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Nume *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Prenume și nume"
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{
                        background: "rgba(244,239,228,0.08)",
                        border: "1px solid rgba(184,137,42,0.25)",
                        color: "#F4EFE4",
                        fontFamily: "var(--font-jost), sans-serif",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adresa@email.ro"
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{
                        background: "rgba(244,239,228,0.08)",
                        border: "1px solid rgba(184,137,42,0.25)",
                        color: "#F4EFE4",
                        fontFamily: "var(--font-jost), sans-serif",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Telefon (opțional)
                    </label>
                    <input
                      type="tel"
                      placeholder="07XX XXX XXX"
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{
                        background: "rgba(244,239,228,0.08)",
                        border: "1px solid rgba(184,137,42,0.25)",
                        color: "#F4EFE4",
                        fontFamily: "var(--font-jost), sans-serif",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "#B8892A",
                      color: "#F4EFE4",
                      fontFamily: "var(--font-jost), sans-serif",
                      letterSpacing: "0.05em",
                      borderRadius: "2px",
                    }}
                  >
                    Vreau să particip la webinar →
                  </button>

                  <p className="text-center text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Gratuit · Fără obligații · Locuri limitate
                  </p>
                </form>
              </div>

              {/* Testimonial sub formular */}
              <div className="mx-auto mt-8 max-w-lg text-center">
                <p
                  className="mb-2 text-base"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#5C5545", fontSize: "18px" }}
                >
                  &ldquo;M-am simțit susținută cu multă răbdare. Starea de sănătate s-a îmbunătățit.&rdquo;
                </p>
                <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                  Inela B. — Alchimia Internă Taoistă
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer simple />
    </div>
  );
}
