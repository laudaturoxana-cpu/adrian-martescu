import type { Metadata } from "next";
import Link from "next/link";
import { LogoFull } from "@/components/LogoMark";
import AnimatedSection from "@/components/AnimatedSection";
import AccordionItem from "@/components/AccordionItem";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Programul Dirijarea Realității — 3 luni | Adrian Martescu",
  description: "Înțelegi de ce viața ta arată cum arată. Primești instrumentele să o schimbi. Și nu rămâi singur/ă în acest proces.",
};

const faqProgram = [
  {
    question: "Trebuie să fi participat la webinar înainte?",
    answer: "Recomandat, dar nu obligatoriu. Webinarul oferă o introducere utilă, dar programul este explicat de la zero.",
  },
  {
    question: "Pot participa dacă nu cunosc Modelul Variantelor?",
    answer: "Da. Totul se explică de la zero, cu exemple din viața de zi cu zi. Nu ai nevoie de cunoștințe prealabile.",
  },
  {
    question: "Există garanție?",
    answer: "Da. 15 zile returnare completă, fără întrebări. Dacă în primele 15 zile simți că programul nu este pentru tine, îți returnăm integral suma.",
  },
];

export default function ProgramPage() {
  return (
    <div style={{ background: "#F4EFE4" }}>
      {/* Minimal header */}
      <header className="border-b px-6 py-4" style={{ borderColor: "rgba(184,137,42,0.15)", background: "#F4EFE4" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between">
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
        <section className="relative overflow-hidden py-14 md:py-24 px-4 sm:px-6" style={{ background: "#F4EFE4" }}>
          {/* Portal ornament */}
          <div className="portal-pulse pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hidden lg:block" style={{ opacity: 0.07 }}>
            <svg width="500" height="500" viewBox="0 0 360 360" fill="none" aria-hidden="true">
              <circle cx="180" cy="180" r="170" stroke="#B8892A" strokeWidth="1" />
              <circle cx="180" cy="180" r="130" stroke="#B8892A" strokeWidth="1" strokeDasharray="5 7" />
              <circle cx="180" cy="180" r="90" stroke="#B8892A" strokeWidth="1" />
              <circle cx="180" cy="180" r="50" stroke="#B8892A" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="180" cy="180" r="10" fill="#B8892A" />
              <line x1="180" y1="10" x2="180" y2="350" stroke="#B8892A" strokeWidth="0.5" />
              <line x1="10" y1="180" x2="350" y2="180" stroke="#B8892A" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <AnimatedSection>
              <span
                className="mb-6 inline-block rounded-sm px-4 py-1.5 text-xs"
                style={{
                  background: "rgba(184,137,42,0.12)",
                  color: "#B8892A",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Program complet · 3 luni
              </span>

              <h1
                className="mb-5 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(48px, 7vw, 72px)",
                  color: "#1E1B15",
                }}
              >
                Dirijarea{" "}
                <em style={{ color: "#B8892A", fontStyle: "italic" }}>Realității</em>
              </h1>

              <p
                className="mb-10 max-w-xl text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
              >
                Înțelegi de ce viața ta arată cum arată. Primești instrumentele să o schimbi. Și nu rămâi singur/ă în acest proces.
              </p>

              <div className="flex flex-col items-center sm:items-start gap-3">
                <a
                  href="[LINK_CALENDLY]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                  style={{
                    background: "#B8892A",
                    color: "#F4EFE4",
                    fontFamily: "var(--font-jost), sans-serif",
                    letterSpacing: "0.05em",
                    borderRadius: "2px",
                  }}
                >
                  Vreau să știu mai mult — Rezervă o discuție
                </a>
                <p className="text-xs text-center sm:text-left" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                  Discuție gratuită de 30 de minute. Fără obligații.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PENTRU CINE */}
        <section style={{ background: "#E8DFC8" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Acest program este pentru tine dacă...
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Te lovești mereu de aceleași situații și nu înțelegi de ce",
                  "Simți că viața ta merge pe un drum ales de altcineva pentru tine",
                  "Ai mai încercat cursuri sau cărți de dezvoltare personală — dar nu s-a schimbat nimic concret",
                  "Vrei instrumente pe care le aplici singur/ă, oricând, fără să depinzi de nimeni",
                  "Ești pregătit/ă să investești 3 luni serios în tine",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ color: "#B8892A", fontSize: "16px", flexShrink: 0, marginTop: "3px" }}>✓</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CE CONȚINE */}
        <section style={{ background: "#F4EFE4" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Structura programului</div>
              <h2
                className="mb-14"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Trei module. Un singur fir conductor.
              </h2>
            </AnimatedSection>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  nr: "01",
                  luna: "Luna 1",
                  title: "Alchimia Internă Taoistă",
                  text: "Practici de liniște mentală și centrare în propriul corp. Ieși de pe pilotul automat al fricii și oboselii. Baza fără de care nimic altceva nu funcționează.",
                },
                {
                  nr: "02",
                  luna: "Luna 2",
                  title: "Dirijarea Realității",
                  text: "Tehnicile din Modelul Variantelor (Zeland) explicate și aplicate în viața ta reală. Înțelegi cum îți creezi propria realitate — și cum o poți dirija conștient.",
                },
                {
                  nr: "03",
                  luna: "Luna 3",
                  title: "Integrare și avans",
                  text: "Tehnicile lui David R. Hawkins pentru dizolvarea tiparelor negative. Alan Watts și susținerea în fluxul vieții. Consolidarea și aplicarea în situații concrete din viața ta.",
                },
              ].map((module, i) => (
                <AnimatedSection key={i} delay={i * 120}>
                  <div
                    className="h-full rounded-sm p-7"
                    style={{ background: "#E8DFC8", borderLeft: "4px solid #B8892A" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(32px, 4vw, 44px)",
                        fontWeight: 300,
                        color: "#B8892A",
                        opacity: 0.4,
                        lineHeight: 1,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {module.nr}
                    </span>
                    <p className="mb-1 text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {module.luna}
                    </p>
                    <h3
                      className="mb-4"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "20px", color: "#1E1B15" }}
                    >
                      {module.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {module.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CE PRIMEȘTI */}
        <section style={{ background: "#E8DFC8" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Inclus în program</div>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Tot ce ai nevoie. Nimic în plus.
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "12 sesiuni live (3/lună), înregistrate",
                  "Meditații ghidate de descărcat și folosit zilnic",
                  "Grup privat de WhatsApp cu toți participanții",
                  "Suport direct de la Adrian între sesiuni",
                  "Acces la înregistrări pe toată durata programului",
                  "Garanție de returnare 15 zile",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ color: "#B8892A", fontSize: "16px", flexShrink: 0, marginTop: "3px" }}>✦</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TESTIMONIALE */}
        <section style={{ background: "#F4EFE4" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Ce spun participanții</div>
              <h2
                className="mb-14"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Rezultate reale. Din viața de zi cu zi.
              </h2>
            </AnimatedSection>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
              <AnimatedSection delay={0}>
                <div className="rounded-sm p-7" style={{ background: "#1A1814" }}>
                  <p className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "18px", color: "#E8DFC8" }}>
                    &ldquo;Am trecut de la frica generală de problemele de sănătate la înțelegerea deplină că pot trece prin ele. Pas cu pas am simțit că ține de unde îmi îndrept atenția. Starea generală de sănătate s-a îmbunătățit.&rdquo;
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>Inela B.</p>
                  <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>Alchimia Internă Taoistă</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={120}>
                <div className="rounded-sm p-7" style={{ background: "#1A1814" }}>
                  <p className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "22px", color: "#E8DFC8" }}>
                    &ldquo;Uitasem să fiu eu. Uitasem să fiu mamă.&rdquo;
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>Dana</p>
                  <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>Alchimia Internă Taoistă</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PROCESUL */}
        <section style={{ background: "#E8DFC8" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2
                className="mb-12"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Primești. Aplici. Observi.
              </h2>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3">
                {[
                  { nr: "1", text: "Participi la sesiunile live de 3 ori pe lună" },
                  { nr: "2", text: "Practici zilnic 15-20 de minute (meditații ghidate)" },
                  { nr: "3", text: "Observi schimbările în viața de zi cu zi și vii cu ele la sesiunile de grup" },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(32px, 4vw, 44px)",
                        fontWeight: 300,
                        color: "#B8892A",
                        opacity: 0.4,
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {step.nr}
                    </span>
                    <p className="text-sm leading-relaxed pt-2" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* INVESTIȚIA */}
        <section style={{ background: "#F4EFE4" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Investiția în program
              </h2>
              <p
                className="mb-10 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
              >
                Prețul exact îl stabilim împreună în cadrul discuției de 30 de minute, în funcție de situația ta și de modulele pe care le alegi.
              </p>

              <a
                href="[LINK_CALENDLY]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm px-10 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#B8892A",
                  color: "#F4EFE4",
                  fontFamily: "var(--font-jost), sans-serif",
                  letterSpacing: "0.05em",
                  borderRadius: "2px",
                }}
              >
                Rezervă discuția gratuită de 30 de minute →
              </a>
              <p className="mt-4 text-sm" style={{ color: "#9A8F7A", fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}>
                Fără presiune. Fără obligații. Dacă nu simți că e pentru tine — nu e o problemă.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#E8DFC8" }} className="py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <h2
                className="mb-12"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1E1B15",
                }}
              >
                Întrebări frecvente
              </h2>
              {faqProgram.map((item, i) => (
                <AccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: "#1A1814" }} className="py-14 md:py-24 px-4 sm:px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "#F4EFE4",
                }}
              >
                Dacă ai ajuns până aici,{" "}
                <em style={{ color: "#B8892A", fontStyle: "italic" }}>ceva în tine știe deja.</em>
              </h2>
              <p
                className="mb-10 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
              >
                Nu îți cer să crezi că va funcționa. Îți cer să aloci 30 de minute pentru a afla dacă este pentru tine.
              </p>
              <a
                href="[LINK_CALENDLY]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm px-10 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#B8892A",
                  color: "#F4EFE4",
                  fontFamily: "var(--font-jost), sans-serif",
                  letterSpacing: "0.05em",
                  borderRadius: "2px",
                }}
              >
                Rezervă discuția gratuită →
              </a>

              <div className="mt-12">
                <Link href="/" className="text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
                  ← Înapoi la site
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer simple />
    </div>
  );
}
