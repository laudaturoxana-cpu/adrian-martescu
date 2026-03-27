import type { Metadata } from "next";
import Link from "next/link";
import { LogoFull } from "@/components/LogoMark";
import AnimatedSection from "@/components/AnimatedSection";
import AccordionItem from "@/components/AccordionItem";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alchimia Internă Taoistă — Program complet | Adrian Martescu",
  description: "12 sesiuni live de practică și vindecare energetică. Transformă stresul, blocajele și frica în claritate, vitalitate și curaj. 487 lei · Garanție 15 zile.",
  keywords: [
    "alchimie interna taoista",
    "program online",
    "vindecare energetica",
    "Adrian Martescu",
    "sesiuni live",
    "meditatie taoista",
    "dezvoltare personala",
  ],
  alternates: { canonical: "https://www.adrianmartescu.ro/program" },
  openGraph: {
    title: "Alchimia Internă Taoistă — Program cu Adrian Martescu",
    description: "12 sesiuni live · Vindecare energetică · 487 lei · Garanție 15 zile.",
    url: "https://www.adrianmartescu.ro/program",
    type: "website",
  },
};

const faqProgram = [
  {
    question: "Trebuie să fi participat la webinar înainte?",
    answer: "Recomandat, dar nu obligatoriu. Webinarul oferă o introducere utilă, dar programul este explicat de la zero.",
  },
  {
    question: "Sesiunile sunt live sau înregistrate?",
    answer: "Sesiunile sunt live, online, accesibile de pe telefon sau laptop. Toate rămân disponibile 12 luni, deci le poți revedea oricând.",
  },
  {
    question: "Există garanție?",
    answer: "Da. 15 zile returnare completă, fără întrebări. Dacă în primele 15 zile simți că programul nu este pentru tine, îți returnăm integral suma.",
  },
  {
    question: "Am nevoie de experiență cu metodele energetice?",
    answer: "Nu. Totul se explică de la zero, cu exemple concrete din viața de zi cu zi. Singurul lucru necesar este deschiderea spre explorare interioară.",
  },
];

export default function ProgramPage() {
  return (
    <div style={{ background: "#1A1814" }}>
      {/* Minimal header — dark */}
      <header className="border-b px-4 sm:px-6 py-4" style={{ borderColor: "rgba(184,137,42,0.12)", background: "#1A1814" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/">
            <LogoFull dark />
          </Link>
          <Link
            href="/"
            className="text-xs transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}
            onMouseEnter={undefined}
          >
            ← Înapoi acasă
          </Link>
        </div>
      </header>

      <main>
        {/* HERO — dark #1A1814 */}
        <section className="relative overflow-hidden py-16 md:py-28 px-4 sm:px-6" style={{ background: "#1A1814" }}>
          {/* Portal ornament */}
          <div
            className="portal-pulse pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hidden lg:block"
            style={{ opacity: 0.06 }}
          >
            <svg width="520" height="520" viewBox="0 0 360 360" fill="none" aria-hidden="true">
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
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Program complet · 12 sesiuni live
              </span>

              <h1
                className="mb-5 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(44px, 7vw, 76px)",
                  color: "#F4EFE4",
                }}
              >
                Alchimia Internă{" "}
                <em style={{ color: "#B8892A", fontStyle: "italic" }}>Taoistă</em>
              </h1>

              <p
                className="mb-3 max-w-2xl text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
              >
                Învață cum să transformi stresul, blocajele și frica în claritate, vitalitate și curaj.
              </p>
              <p
                className="mb-10 max-w-xl text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
              >
                Pentru cei care simt că au obosit să repete aceleași tipare — în relații, în carieră sau în viața personală — și vor, în sfârșit, să iasă din cercul stagnării.
              </p>

              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://wa.me/40765350339"
                  className="block w-full text-center rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                  style={{
                    background: "#B8892A",
                    color: "#F4EFE4",
                    fontFamily: "var(--font-jost), sans-serif",
                    letterSpacing: "0.06em",
                    borderRadius: "2px",
                  }}
                >
                  Înscrie-te acum — 487 lei →
                </a>
                <p className="text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
                  Garanție de returnare 15 zile. Fără risc.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CE ESTE — crem #F4EFE4 */}
        <section style={{ background: "#F4EFE4" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Ce este</div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#1E1B15",
                }}
              >
                Un program practic de 12 sesiuni live
              </h2>
              <p
                className="mb-10 max-w-2xl text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
              >
                Care îți reînvață corpul, mintea și energia să lucreze împreună. O combinație de meditații taoiste, introspecție, respirație și conștiență corporală. Este mai mult decât practică spirituală — este un proces de reconectare profundă cu tine.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: "◈",
                    text: "Te cureți de energie stagnantă și emoții blocate",
                  },
                  {
                    icon: "◈",
                    text: "Îți ridici vibrația și încrederea",
                  },
                  {
                    icon: "◈",
                    text: "Aduci flux, claritate și ușurință în viața de zi cu zi",
                  },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div
                      className="rounded-sm p-6 h-full"
                      style={{ background: "#E8DFC8", borderLeft: "3px solid #B8892A" }}
                    >
                      <span style={{ color: "#B8892A", fontSize: "18px", display: "block", marginBottom: "10px" }}>
                        {item.icon}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                        {item.text}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CUM SE DESFĂȘOARĂ — dark #1A1814 */}
        <section style={{ background: "#1A1814" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4" style={{ color: "#B8892A" }}>
                <span style={{ background: "#B8892A", width: "32px", height: "1px", display: "inline-block", marginRight: "12px", verticalAlign: "middle" }} />
                Structura
              </div>
              <h2
                className="mb-14"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#F4EFE4",
                }}
              >
                Cum se desfășoară programul
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    nr: "01",
                    label: "Conectare",
                    text: "Intri într-un spațiu ghidat și susținut energetic, alături de persoane cu aceeași intenție.",
                  },
                  {
                    nr: "02",
                    label: "Vindecare",
                    text: "În sesiunile live, eliberăm blocajele energetice și restabilim echilibrul interior.",
                  },
                  {
                    nr: "03",
                    label: "Reflectare",
                    text: "Conștientizezi tiparele care te țin pe loc și înveți să le transformi.",
                  },
                  {
                    nr: "04",
                    label: "Manifestare",
                    text: "Aplici principiile taoiste pentru a crea o viață mai ușoară și mai limpede.",
                  },
                ].map((step, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div
                      className="rounded-sm p-6 h-full"
                      style={{ background: "#252018", border: "1px solid rgba(184,137,42,0.12)" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "clamp(32px, 4vw, 44px)",
                          fontWeight: 300,
                          color: "#B8892A",
                          opacity: 0.45,
                          lineHeight: 1,
                          display: "block",
                          marginBottom: "10px",
                        }}
                      >
                        {step.nr}
                      </span>
                      <p
                        className="mb-3 text-xs uppercase tracking-widest"
                        style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
                      >
                        {step.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                        {step.text}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <p className="mt-10 text-sm" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontStyle: "italic" }}>
                Toate sesiunile sunt online, accesibile de pe telefon sau laptop, și rămân disponibile 12 luni.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CE PRIMEȘTI — crem #E8DFC8 */}
        <section style={{ background: "#E8DFC8" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Inclus în program</div>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#1E1B15",
                }}
              >
                Ce primești concret
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 mb-10">
                {[
                  "12 sesiuni live de practică și vindecare energetică",
                  "1 sesiune individuală — evaluarea completă a câmpului tău energetic",
                  "Acces timp de 12 luni la toate materialele",
                  "Comunitatea Alchimiei Interne Taoiste — un spațiu viu de sprijin și evoluție",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ color: "#B8892A", fontSize: "16px", flexShrink: 0, marginTop: "3px" }}>✦</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bonusuri */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    label: "BONUS 1",
                    title: "Minicursul Brocada Taoistă",
                    text: "Cele 8 mișcări clasice pentru energie zilnică ridicată.",
                  },
                  {
                    label: "BONUS 2",
                    title: "Generatorul de Intenție",
                    text: "Ghidul practic pentru manifestare zilnică.",
                  },
                ].map((bonus, i) => (
                  <div
                    key={i}
                    className="rounded-sm p-6"
                    style={{ background: "#1A1814", border: "1px solid rgba(184,137,42,0.2)" }}
                  >
                    <span
                      className="mb-2 inline-block text-xs uppercase tracking-widest"
                      style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
                    >
                      {bonus.label}
                    </span>
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "18px", fontWeight: 500, color: "#E8DFC8" }}
                    >
                      {bonus.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                      {bonus.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CINE ESTE GHIDUL — dark #1A1814 */}
        <section style={{ background: "#1A1814" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="overline mb-5" style={{ color: "#B8892A" }}>
                    <span style={{ background: "#B8892A", width: "32px", height: "1px", display: "inline-block", marginRight: "12px", verticalAlign: "middle" }} />
                    Ghidul tău
                  </div>
                  <h2
                    className="mb-6"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 4vw, 42px)",
                      color: "#F4EFE4",
                    }}
                  >
                    Cine este Adrian Mărtescu
                  </h2>
                  <p
                    className="mb-5 text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
                  >
                    Practicant taoist de aproape 20 de ani, pasionat de alchimia internă și transformare prin energie. Nu predau din cărți. Predau din experiență trăită.
                  </p>
                  <p
                    className="mb-8 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}
                  >
                    Am integrat în viața mea taoismul, Modelul Variantelor al lui Vadim Zeland, lucrările lui David R. Hawkins și filosofia lui Alan Watts. Toate acestea au devenit un sistem care funcționează în lumea reală — pentru liniște, curaj și claritate.
                  </p>

                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      fontSize: "20px",
                      color: "#C8B89A",
                    }}
                  >
                    &ldquo;Transformarea este reală — dar ea începe doar când spui &lsquo;da&rsquo; propriului tău drum.&rdquo;
                  </p>
                </div>

                {/* Portal decorativ */}
                <div className="hidden lg:flex justify-center items-center">
                  <svg width="280" height="280" viewBox="0 0 360 360" fill="none" aria-hidden="true" style={{ opacity: 0.25 }}>
                    <circle cx="180" cy="180" r="170" stroke="#B8892A" strokeWidth="1" />
                    <circle cx="180" cy="180" r="130" stroke="#B8892A" strokeWidth="1" strokeDasharray="5 7" />
                    <circle cx="180" cy="180" r="90" stroke="#B8892A" strokeWidth="1" />
                    <circle cx="180" cy="180" r="50" stroke="#B8892A" strokeWidth="1" strokeDasharray="3 5" />
                    <circle cx="180" cy="180" r="10" fill="#B8892A" />
                    <line x1="180" y1="10" x2="180" y2="350" stroke="#B8892A" strokeWidth="0.5" />
                    <line x1="10" y1="180" x2="350" y2="180" stroke="#B8892A" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PENTRU CINE — crem #E8DFC8 */}
        <section style={{ background: "#E8DFC8" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#1E1B15",
                }}
              >
                Acest program este pentru tine dacă...
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 mb-12">
                {[
                  "vrei să vindeci relații și să ieși din tipare frustrante",
                  "simți că ești blocat financiar sau emoțional",
                  "vrei să elimini tensiunea interioară și să guști pacea zilnică",
                  "ești dispus să practici, nu doar să citești",
                  "vrei o viață în flux, fără rezistență și luptă",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span style={{ color: "#B8892A", fontSize: "15px", flexShrink: 0, marginTop: "3px" }}>✔</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-sm p-8"
                style={{ background: "#1A1814", border: "1px solid rgba(184,137,42,0.12)" }}
              >
                <p
                  className="mb-5 text-sm uppercase tracking-widest"
                  style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
                >
                  Nu este pentru tine dacă
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "nu ești deschis la explorare interioară",
                    "vrei rezultate fără implicare",
                    "respingi metodele energetice neconvenționale",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span style={{ color: "#5C5545", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✕</span>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TESTIMONIALE — crem #F4EFE4 cu carduri dark */}
        <section style={{ background: "#F4EFE4" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="overline mb-4">Ce spun participanții</div>
              <h2
                className="mb-14"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#1E1B15",
                }}
              >
                Rezultate reale. Din viața de zi cu zi.
              </h2>
            </AnimatedSection>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
              <AnimatedSection delay={0}>
                <div className="rounded-sm p-7 h-full" style={{ background: "#1A1814" }}>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "18px", color: "#E8DFC8" }}
                  >
                    &ldquo;Am trecut de la frica generală de problemele de sănătate la înțelegerea deplină că pot trece prin ele. Pas cu pas am simțit că ține de unde îmi îndrept atenția. Starea generală de sănătate s-a îmbunătățit.&rdquo;
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Inela B.
                  </p>
                  <p className="text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
                    Alchimia Internă Taoistă
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={120}>
                <div className="rounded-sm p-7 h-full" style={{ background: "#1A1814" }}>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "22px", color: "#E8DFC8" }}
                  >
                    &ldquo;Uitasem să fiu eu. Uitasem să fiu mamă.&rdquo;
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Dana
                  </p>
                  <p className="text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
                    Alchimia Internă Taoistă
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ — dark #252018 */}
        <section style={{ background: "#252018" }} className="py-14 md:py-22 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <h2
                className="mb-12"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "#F4EFE4",
                }}
              >
                Întrebări frecvente
              </h2>
              {faqProgram.map((item, i) => (
                <AccordionItem key={i} question={item.question} answer={item.answer} dark />
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FINAL — dark #1A1814 */}
        <section style={{ background: "#1A1814" }} className="py-16 md:py-28 px-4 sm:px-6 text-center relative overflow-hidden">
          {/* linie aurie subtilă */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,137,42,0.3), transparent)" }}
          />

          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  color: "#F4EFE4",
                }}
              >
                Alătură-te programului și începe să manifești{" "}
                <em style={{ color: "#B8892A", fontStyle: "italic" }}>viața pe care o meriți.</em>
              </h2>
              <p
                className="mb-10 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
              >
                Transformarea este reală — dar ea începe doar când spui „da" propriului tău drum.
              </p>

              <a
                href="https://wa.me/40765350339"
                className="inline-block rounded-sm px-10 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#B8892A",
                  color: "#F4EFE4",
                  fontFamily: "var(--font-jost), sans-serif",
                  letterSpacing: "0.06em",
                  borderRadius: "2px",
                }}
              >
                Înscrie-te — scrie pe WhatsApp →
              </a>
              <p
                className="mt-4 text-sm"
                style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#5C5545" }}
              >
                Garanție de returnare 15 zile. Fără presiune.
              </p>

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
