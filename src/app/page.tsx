import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AccordionItem from "@/components/AccordionItem";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Adrian Martescu — Dirijarea Realității | Instrumente concrete pentru o viață care merge în direcția ta",
  description: "Practici concrete din Modelul Variantelor, Alchimia Internă Taoistă și tehnicile David R. Hawkins. Nu motivație — instrumente reale pentru viața ta de zi cu zi.",
};

const faqItems = [
  {
    question: "Trebuie să cunosc Modelul Variantelor sau Zeland ca să particip?",
    answer: "Nu. Webinarul și primul program sunt construite exact pentru oameni care aud aceste concepte pentru prima dată. Totul este explicat pe înțelesul tău, cu exemple din viața de zi cu zi.",
  },
  {
    question: "Cât timp trebuie să aloc zilnic?",
    answer: "Sesiunile live durează 45-60 de minute. Între sesiuni, practicile de bază iau 15-20 de minute pe zi. Nu este necesar mai mult pentru a simți primele schimbări.",
  },
  {
    question: "Ce se întâmplă dacă nu pot participa la o sesiune live?",
    answer: "Toate sesiunile sunt înregistrate și accesibile ulterior. Recomand să participi live pentru energia de grup — dar înregistrările sunt disponibile dacă nu poți.",
  },
  {
    question: "Este vreo garanție?",
    answer: "Ofer garanție de returnare a banilor în primele 15 zile dacă simți că programul nu este pentru tine. Fără întrebări.",
  },
  {
    question: "Cum este diferit de alte cursuri de dezvoltare personală?",
    answer: "Nu îți ofer motivație sau energie artificială. Îți ofer instrumente concrete pe care le aplici singur/ă, oricând, în orice situație din viața ta. Puterea vine din tine — eu îți arăt cum să o accesezi.",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#F4EFE4" }}>
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20" style={{ background: "#F4EFE4" }}>
        {/* Portal ornament background */}
        <div className="portal-pulse pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block">
          <svg width="560" height="560" viewBox="0 0 360 360" fill="none" aria-hidden="true">
            <circle cx="180" cy="180" r="170" stroke="#B8892A" strokeWidth="0.5" />
            <circle cx="180" cy="180" r="130" stroke="#B8892A" strokeWidth="0.5" strokeDasharray="5 7" />
            <circle cx="180" cy="180" r="90" stroke="#B8892A" strokeWidth="0.5" />
            <circle cx="180" cy="180" r="50" stroke="#B8892A" strokeWidth="0.5" strokeDasharray="3 5" />
            <circle cx="180" cy="180" r="10" fill="#B8892A" opacity="0.7" />
            <line x1="180" y1="10" x2="180" y2="350" stroke="#B8892A" strokeWidth="0.3" opacity="0.5" />
            <line x1="10" y1="180" x2="350" y2="180" stroke="#B8892A" strokeWidth="0.3" opacity="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16">
          <AnimatedSection>
            <div className="overline mb-6">Dirijarea Realității</div>

            <h1
              className="mb-6 max-w-2xl leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(38px, 7vw, 72px)",
                color: "#1E1B15",
              }}
            >
              Nu te mai lupta
              <br />cu viața ta.
              <br />
              Învață să o{" "}
              <em style={{ color: "#B8892A", fontStyle: "italic" }}>dirijezi.</em>
            </h1>

            <div
              className="mb-8 max-w-xl border-l-2 pl-5 py-2"
              style={{ borderColor: "#B8892A" }}
            >
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  color: "#5C5545",
                  fontWeight: 300,
                }}
              >
                Vei putea să dai jos negativitatea zilei de pe tine cum dai jos o haină — și să fii prezentă pentru tine.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <Link
                href="/webinar"
                className="block w-full text-center px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                style={{
                  background: "#B8892A",
                  color: "#F4EFE4",
                  fontFamily: "var(--font-jost), sans-serif",
                  letterSpacing: "0.05em",
                  borderRadius: "2px",
                }}
              >
                Înscrie-te la webinar gratuit
              </Link>
              <a
                href="#cum-functioneaza"
                className="block w-full text-center px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                style={{
                  border: "1px solid rgba(184,137,42,0.4)",
                  color: "#5C5545",
                  fontFamily: "var(--font-jost), sans-serif",
                  letterSpacing: "0.05em",
                  borderRadius: "2px",
                }}
              >
                Descoperă cum funcționează →
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 sm:justify-start">
              {[
                { icon: "✦", text: "Webinar 100% gratuit" },
                { icon: "✦", text: "Fără promisiuni false" },
                { icon: "✦", text: "Conținut aplicabil imediat" },
                { icon: "✦", text: "Comunitate de susținere" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-xs"
                  style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}
                >
                  <span style={{ color: "#B8892A" }}>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TE RECUNOȘTI? */}
      <section id="te-recunosi" style={{ background: "#E8DFC8" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Pentru cine sunt</div>
            <h2
              className="mb-8 md:mb-12 max-w-2xl"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Dacă te regăsești în vreuna din acestea, ești exact unde trebuie.
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Mă tot lovesc de aceleași lucruri și nu știu de ce.",
              "Am tot încercat. Nimic nu se schimbă cu adevărat.",
              "Seara ajung acasă stoarsă. Nu mai am energie pentru nimic.",
              "Simt că viața mea nu merge în direcția mea — dar nu știu cum să schimb asta.",
            ].map((text, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="pain-card h-full rounded-sm p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#F4EFE4",
                    border: "1px solid rgba(184,137,42,0.15)",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#1E1B15",
                      fontSize: "18px",
                    }}
                  >
                    &ldquo;{text}&rdquo;
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <p
              className="mt-10 text-center text-sm"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                color: "#9A8F7A",
                fontSize: "16px",
              }}
            >
              Nu trebuie să știi exact ce nu merge. De acolo începem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CE SE SCHIMBĂ CONCRET */}
      <section id="cum-functioneaza" style={{ background: "#F4EFE4" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Ce primești</div>
            <h2
              className="mb-8 md:mb-14 max-w-xl"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Nu motivație. Instrumente concrete.
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Luni dimineața nu va mai fi cea mai grea parte a săptămânii",
                text: "Înveți să oprești gândurile care te epuizează înainte să ajungi la serviciu.",
              },
              {
                title: "Vei ști de ce te blochezi mereu în aceleași situații",
                text: "Nu este ghinionul. Nu este că nu muncești destul. Există un motiv concret — și o cale de ieșire.",
              },
              {
                title: "Viața ta va începe să meargă în direcția ta",
                text: "Nu a șefului. Nu a așteptărilor altora. A ta.",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div
                  className="h-full rounded-sm border-l-4 p-7 transition-all duration-250 hover:-translate-y-1"
                  style={{
                    background: "#E8DFC8",
                    borderLeftColor: "#B8892A",
                    border: "1px solid rgba(184,137,42,0.15)",
                    borderLeft: "4px solid #B8892A",
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      color: "#1E1B15",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                    {card.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICII */}
      <section id="servicii" style={{ background: "#E8DFC8" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Cum lucrez</div>
            <h2
              className="mb-8 md:mb-14"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Trei trepte. Un singur drum — al tău.
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {/* Card 1 */}
            <AnimatedSection delay={0}>
              <div
                className="relative flex h-full flex-col rounded-sm p-7 transition-all duration-250 hover:-translate-y-1"
                style={{ background: "#F4EFE4", border: "1px solid rgba(184,137,42,0.2)" }}
              >
                <span
                  className="mb-4 inline-block self-start rounded-sm px-3 py-1 text-xs"
                  style={{
                    background: "rgba(184,137,42,0.12)",
                    color: "#B8892A",
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "10px",
                  }}
                >
                  Primul pas
                </span>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "22px", color: "#1E1B15" }}
                >
                  Alchimia Internă Taoistă
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                  Practici de liniște mentală care te scot de pe pilotul automat al fricii și oboselii. Fără teorie — direct aplicabil din prima seară.
                </p>
                <div className="mb-6 flex gap-6">
                  <span className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                    Durata: 4 săptămâni
                  </span>
                </div>
                <Link
                  href="/webinar"
                  className="block rounded-sm px-6 py-3 text-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#B8892A", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
                >
                  Înscrie-te la webinar gratuit
                </Link>
                <p className="mt-3 text-center text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                  Webinarul gratuit este poarta de intrare spre acest program.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={120}>
              <div
                className="relative flex h-full flex-col rounded-sm p-7 transition-all duration-250 hover:-translate-y-1"
                style={{ background: "#F4EFE4", border: "1px solid rgba(184,137,42,0.2)" }}
              >
                <span
                  className="mb-4 inline-block self-start rounded-sm px-3 py-1 text-xs"
                  style={{
                    background: "rgba(184,137,42,0.2)",
                    color: "#B8892A",
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "10px",
                  }}
                >
                  Programul central
                </span>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "22px", color: "#1E1B15" }}
                >
                  Dirijarea Realității
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                  Înțelegi de ce viața ta arată cum arată — și primești instrumentele concrete să o schimbi. Tehnici din Modelul Variantelor, Hawkins și Alchimia Taoistă, aplicate pas cu pas.
                </p>
                <div className="mb-6 flex gap-6">
                  <span className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                    Durata: 3 luni
                  </span>
                  <span className="text-sm font-medium" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#B8892A" }}>
                    La cerere
                  </span>
                </div>
                <Link
                  href="/program"
                  className="block rounded-sm px-6 py-3 text-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ border: "1px solid #B8892A", color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
                >
                  Descoperă programul
                </Link>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={240}>
              <div
                className="relative flex h-full flex-col rounded-sm p-7 transition-all duration-250 hover:-translate-y-1"
                style={{ background: "#F4EFE4", border: "1px solid rgba(184,137,42,0.2)" }}
              >
                <span
                  className="mb-4 inline-block self-start rounded-sm px-3 py-1 text-xs"
                  style={{
                    background: "rgba(30,27,21,0.08)",
                    color: "#5C5545",
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "10px",
                  }}
                >
                  Nivel avansat
                </span>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "22px", color: "#1E1B15" }}
                >
                  Masterat în Dirijarea Realității
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                  Pentru cei care au parcurs primele două trepte. Aprofundăm cu Alan Watts, tehnicile Tufty și ieșirea din sistemul tehnigenic — cunoștințe care schimbă fundamental felul de a fi și de a trăi.
                </p>
                <div className="mb-6 flex gap-6">
                  <span className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                    Durata: La cerere
                  </span>
                  <span className="text-sm font-medium" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                    La cerere
                  </span>
                </div>
                <a
                  href="#contact"
                  className="block rounded-sm px-6 py-3 text-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ border: "1px solid rgba(184,137,42,0.3)", color: "#5C5545", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
                >
                  Discutăm
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DESPRE ADRIAN */}
      <section id="despre" style={{ background: "#F4EFE4" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <div className="overline mb-4">Cine sunt</div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4vw, 44px)",
                  color: "#1E1B15",
                }}
              >
                Nu predau teorii.
                <br />
                <em style={{ fontStyle: "italic", color: "#B8892A" }}>Predau ce am trăit.</em>
              </h2>
              <p className="mb-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                Sunt Adrian Martescu și am petrecut aproape 6 ani aprofundând și trăind ceea ce acum îți ofer ție. Modelul Variantelor al lui Vadim Zeland, Alchimia Internă Taoistă, tehnicile lui David R. Hawkins și filozofia lui Alan Watts nu sunt pentru mine concepte citite — sunt instrumente cu care mi-am reconstruit propria viață.
              </p>
              <p className="mb-10 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                Nu am o certificare clasică. Am ceva mai rar: experiența directă, autodidactă, a unui om care a căutat cu adevărat — și a găsit. Ceea ce îți ofer nu vine din manuale. Vine din interior.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "◈", text: "6 ani de practică și studiu" },
                  { icon: "◈", text: "Sistem în 3 trepte, aplicabil imediat" },
                  { icon: "◈", text: "Susținere pe tot parcursul programului" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span style={{ color: "#B8892A", fontSize: "14px" }}>{item.icon}</span>
                    <span className="text-sm" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative" style={{ opacity: 0.3 }}>
                  <svg width="280" height="280" viewBox="0 0 360 360" fill="none" aria-hidden="true">
                    <circle cx="180" cy="180" r="170" stroke="#B8892A" strokeWidth="1" />
                    <circle cx="180" cy="180" r="130" stroke="#B8892A" strokeWidth="0.8" strokeDasharray="5 7" />
                    <circle cx="180" cy="180" r="90" stroke="#B8892A" strokeWidth="1" />
                    <circle cx="180" cy="180" r="50" stroke="#B8892A" strokeWidth="0.8" strokeDasharray="3 5" />
                    <circle cx="180" cy="180" r="10" fill="#B8892A" opacity="0.7" />
                    <line x1="180" y1="10" x2="180" y2="350" stroke="#B8892A" strokeWidth="0.5" opacity="0.5" />
                    <line x1="10" y1="180" x2="350" y2="180" stroke="#B8892A" strokeWidth="0.5" opacity="0.5" />
                  </svg>
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#B8892A", fontSize: "16px", opacity: 2 }}
                  >
                    <span style={{ opacity: 1 }}>Foto Adrian Martescu</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROCESUL */}
      <section id="proces" style={{ background: "#E8DFC8" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Pașii</div>
            <h2
              className="mb-8 md:mb-14"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Simplu. Fără complicații.
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                nr: "01",
                title: "Webinarul gratuit",
                text: "Participi la webinarul de introducere. Primești primul instrument concret și simți dacă rezonezi cu ce ofer.",
              },
              {
                nr: "02",
                title: "Te înscrii în program",
                text: "Dacă simți că e pentru tine, intri în programul Alchimia Internă Taoistă — 4 săptămâni de sesiuni live.",
              },
              {
                nr: "03",
                title: "Practici zilnic",
                text: "Fiecare sesiune durează 45-60 de minute. Primești meditații ghidate și tehnici pe care le aplici imediat, în viața de zi cu zi.",
              },
              {
                nr: "04",
                title: "Observi schimbările",
                text: "Din primele zile observi că reacționezi diferit la situații care înainte te epuizau. Grupul te susține pe tot parcursul.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex flex-col gap-4">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(36px, 5vw, 52px)",
                      fontWeight: 300,
                      color: "#B8892A",
                      opacity: 0.4,
                      lineHeight: 1,
                    }}
                  >
                    {step.nr}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "20px", color: "#1E1B15" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <p
              className="mt-12 text-sm"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                color: "#9A8F7A",
                fontSize: "16px",
                borderLeft: "3px solid rgba(184,137,42,0.3)",
                paddingLeft: "16px",
              }}
            >
              Poți veni și doar cu &ldquo;nu mai pot&rdquo; sau &ldquo;nu înțeleg de ce viața mea arată cum arată&rdquo;. E suficient ca să începem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section id="testimoniale" style={{ background: "#F4EFE4" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Ce spun cei care au parcurs programul</div>
            <h2
              className="mb-8 md:mb-14"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Rezultate reale. Din viața de zi cu zi.
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
            <AnimatedSection delay={0}>
              <div
                className="flex h-full flex-col rounded-sm p-6 sm:p-7"
                style={{ background: "#1A1814" }}
              >
                <p
                  className="mb-6 flex-1 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(15px, 2.5vw, 18px)", color: "#E8DFC8" }}
                >
                  &ldquo;Am trecut de la frica generală de problemele de sănătate la înțelegerea deplină că pot trece prin ele. Pas cu pas am simțit că ține de unde îmi îndrept atenția. M-am simțit susținută cu multă răbdare, compasiune și profesionalism. Starea generală de sănătate s-a îmbunătățit.&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Inela B.
                  </p>
                  <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Alchimia Internă Taoistă
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div
                className="flex h-full flex-col rounded-sm p-6 sm:p-7"
                style={{ background: "#1A1814" }}
              >
                <p
                  className="mb-6 flex-1 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(18px, 3vw, 22px)", color: "#E8DFC8" }}
                >
                  &ldquo;Uitasem să fiu eu. Uitasem să fiu mamă.&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Dana
                  </p>
                  <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                    Alchimia Internă Taoistă
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={240}>
              <div
                className="flex h-full flex-col items-center justify-center rounded-sm p-6 sm:p-7 text-center"
                style={{ background: "#1A1814", border: "1px dashed rgba(184,137,42,0.3)" }}
              >
                <p className="mb-6 text-sm" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                  Ești primul din programul următor.
                </p>
                <Link
                  href="/webinar"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}
                >
                  Locuri disponibile →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#E8DFC8" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Întrebări frecvente</div>
            <h2
              className="mb-8 md:mb-12"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Răspunsuri clare. Fără ocolișuri.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div>
              {faqItems.map((item, i) => (
                <AccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#F4EFE4" }} className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="overline mb-4">Hai să vorbim</div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: "#1E1B15",
              }}
            >
              Nu trebuie să știi de unde să începi.
            </h2>
            <p className="mb-12 text-sm" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
              Îți răspund în maxim 24 de ore.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <ContactForm />

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email</p>
                <a href="mailto:[EMAIL_ADRIAN]" className="text-sm" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                  [EMAIL_ADRIAN]
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>Facebook</p>
                <a href="[LINK_FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif" }}>
                  Pagina Facebook
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", textTransform: "uppercase", letterSpacing: "0.1em" }}>Program</p>
                <p className="text-sm" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>Luni-Vineri, 10:00-19:00</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
