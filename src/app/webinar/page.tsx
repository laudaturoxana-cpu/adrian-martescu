"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoFull } from "@/components/LogoMark";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export default function WebinarPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Eroare. Încearcă din nou.");
        setLoading(false);
        return;
      }
      router.push(`/multumire?name=${encodeURIComponent(name)}`);
    } catch {
      setError("Eroare de rețea. Încearcă din nou.");
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#1A1814" }}>
      {/* Header */}
      <header className="border-b px-4 sm:px-6 py-3 sm:py-4" style={{ borderColor: "rgba(184,137,42,0.15)", background: "#1A1814" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/">
            <LogoFull dark />
          </Link>
          <Link href="/" className="text-xs transition-colors duration-200" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#7A7060" }}>
            ← Înapoi acasă
          </Link>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "#1A1814" }}>
          <div className="mx-auto max-w-3xl text-center">
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
                Webinar 100% gratuit
              </span>

              <h1
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(44px, 8vw, 80px)",
                  color: "#F4EFE4",
                  letterSpacing: "0.04em",
                }}
              >
                Oglinda Duală
              </h1>

              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  color: "#B8892A",
                  fontWeight: 300,
                }}
              >
                Mecanismul de formare a realității personale
              </p>

              <p
                className="mb-10 mx-auto max-w-xl text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", fontWeight: 300 }}
              >
                De ce nu poți rupe cercul vieții, oricât de mult ai încerca?
              </p>

              {/* Data + ora */}
              <div className="mb-10 flex flex-wrap justify-center gap-6">
                {[
                  { icon: "📅", text: "Data: 20 aprilie" },
                  { icon: "⏰", text: "Ora: 19:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#C8B89A" }}>
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <a
                href="#formular"
                className="block w-full text-center rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 sm:inline-block sm:w-auto"
                style={{ background: "#B8892A", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", letterSpacing: "0.05em", borderRadius: "2px" }}
              >
                Rezervă-ți locul →
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CEVA TE ȚINE PE LOC ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#F4EFE4" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Punctul de plecare</div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#1E1B15" }}
              >
                Ceva te ține pe loc
              </h2>
              <p
                className="mb-8 text-sm font-medium uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#B8892A" }}
              >
                Fii sincer cu tine:
              </p>

              <div className="flex flex-col gap-5">
                {[
                  "Muncești, evoluezi, aduni experiență.",
                  "Faci tot mai mult — dar simți aceleași frâne invizibile.",
                  "Ajungi mai departe, dar libertatea interioară nu apare.",
                  "Exteriorul se schimbă, dar înăuntru rămâi la fel: grabă, presiune, nevoia de a ajunge undeva.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span style={{ color: "#B8892A", flexShrink: 0, marginTop: "3px" }}>✦</span>
                    <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 border-l-2 pl-5 py-2"
                style={{ borderColor: "#B8892A" }}
              >
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "20px", color: "#1E1B15" }}>
                  Și atunci apare întrebarea: de ce, dacă evoluezi, trăirea ta interioară rămâne neschimbată?
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── TIPARUL ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#1A1814" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Mecanismul</div>
              <h2
                className="mb-8"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#F4EFE4" }}
              >
                Poate ai observat și tu tiparul
              </h2>

              <p className="mb-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Indiferent cât de mult te străduiești, apare o îndoială, o frică, o decizie grăbită — iar ciclul se restaurează.
              </p>
              <p className="mb-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Viața e un joc pe niveluri de conștiință. Și fiecare nivel are un termostat interior — o limită invizibilă care decide cât „îți permiți" să crești.
              </p>
              <p className="mb-10 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Nu e conștient. E un mecanism format din experiențe, frici și convingeri vechi: „atât pot", „așa e sigur", „nu e pentru mine"… Și, de fiecare dată când vrei să depășești această limită, rezistența reapare. Fără să realizezi, încetinești, te îndoiești, revii la „zona sigură".
              </p>

              <div
                className="rounded-sm p-6"
                style={{ background: "rgba(184,137,42,0.08)", border: "1px solid rgba(184,137,42,0.2)" }}
              >
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "20px", color: "#E8DFC8" }}>
                  Cercul continuă. Viața merge mai departe, dar nivelul interior rămâne același.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── DOI FACTORI ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#E8DFC8" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Rădăcina problemei</div>
              <h2
                className="mb-10"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#1E1B15" }}
              >
                Doi factori care te mențin blocat
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    label: "Realitatea exterioară",
                    text: "Te condiționează, dar de multe ori o negi. Circumstanțele și oamenii din jur îți modelează limitele fără să îți dai seama.",
                  },
                  {
                    label: "Vinovăția pentru creștere",
                    text: 'Lipită de ideea de evoluție. „Dacă mă schimb prea mult, îi pierd." „Dacă reușesc prea ușor, nu merit." „Dacă ajung prea sus, voi pierde tot."',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm p-6"
                    style={{ background: "#1A1814", border: "1px solid rgba(184,137,42,0.15)" }}
                  >
                    <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                Nu le-ai spus cu voce tare, dar le-ai simțit: te-ai oprit exact când începea transformarea reală. Acel mecanism interior te aliniază perfect la mediul tău exterior, iar bucla se închide în mișcarea ei continuă.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── PRINS ÎNTRE DOUĂ LUMI ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#252018" }}>
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "clamp(30px, 5vw, 48px)", color: "#F4EFE4" }}
              >
                Ești prins între două lumi
              </h2>
              <p className="mb-4 text-sm leading-relaxed mx-auto max-w-xl" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Exteriorul — prin circumstanțe și oameni. Interiorul — prin reflexele inconștiente care te readuc „acasă".
              </p>
              <p
                className="mx-auto max-w-xl"
                style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "20px", color: "#C8B89A" }}
              >
                Nu e despre a face mai mult. Nu e despre obiective. E despre ce crezi intim că ți se permite — despre limitele nevăzute care decid cât de sus îți poți ridica propria realitate.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CE VEI TRĂI ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#F4EFE4" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Ce primești</div>
              <h2
                className="mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#1E1B15" }}
              >
                Ce vei trăi în acest webinar
              </h2>
              <p className="mb-10 text-sm" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#9A8F7A", fontSize: "17px" }}>
                Nu te așteaptă teorii. Nici promisiuni. Ci o confruntare blândă, dar profundă cu mecanismul real care te ține pe loc.
              </p>

              <p className="mb-5 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#B8892A", fontWeight: 500 }}>
                Vei înțelege:
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {[
                  "Cum se formează setarea ta interioară",
                  'De ce „bucla" se reactivează mereu',
                  "Cum poți face o alegere diferită — una conștientă",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span style={{ color: "#B8892A", flexShrink: 0, marginTop: "3px" }}>✦</span>
                    <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545", fontWeight: 300 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CUM SE DESFĂȘOARĂ ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#1A1814" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Procesul</div>
              <h2
                className="mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#F4EFE4" }}
              >
                Cum se desfășoară
              </h2>
              <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#9A8F7A", fontSize: "17px" }}>
                Este un proces ghidat, nu o prezentare.
              </p>

              <div className="grid gap-5 sm:grid-cols-3 mb-10">
                {[
                  { nr: "01", text: "Scrii, observi, reflectezi" },
                  { nr: "02", text: "Vezi unde se închide cercul" },
                  { nr: "03", text: "Alegi conștient să nu mai repeți tiparul" },
                ].map((step) => (
                  <div key={step.nr} className="flex flex-col gap-3">
                    <span
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 300, color: "#B8892A", opacity: 0.5, lineHeight: 1 }}
                    >
                      {step.nr}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="border-l-2 pl-5 py-2"
                style={{ borderColor: "rgba(184,137,42,0.4)" }}
              >
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "19px", color: "#C8B89A" }}>
                  La final, nu pleci cu entuziasm de suprafață, ci cu liniște, claritate și o nouă stare de prezență.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── NU SE ÎNCHEIE CU APLAUZE ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#E8DFC8" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <h2
                className="mb-8"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#1E1B15" }}
              >
                Atelierul nu se încheie cu aplauze
              </h2>
              <p className="mb-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                Se încheie cu un pas diferit față de tine însuți. În exercițiul de integrare alegi:
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  "Cine ești de acum în raport cu viața ta",
                  "Ce tipare nu mai lași să te conducă",
                  "Unde vrei să crești fără să te mai limitezi",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span style={{ color: "#B8892A", flexShrink: 0, marginTop: "3px" }}>✦</span>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-sm p-6"
                style={{ background: "#1A1814" }}
              >
                <p className="mb-3 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                  Schimbarea nu începe când înveți lucruri noi, ci când vezi ce ai evitat să vezi — și înțelegi ce ai de făcut.
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                  Nu se întâmplă miracole. Se întâmplă clarificări profunde. După webinar: observi când reapare tiparul, îl recunoști — și, pentru prima oară, alegi altceva.
                </p>
                <p
                  className="mt-4"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "18px", color: "#B8892A" }}
                >
                  De la automatism — la alegere. De la repetare — la evoluție.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── ÎNTREBAREA REALĂ ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#1A1814" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300, fontSize: "clamp(28px, 4vw, 40px)", color: "#F4EFE4" }}
              >
                Întrebarea reală
              </h2>
              <p
                className="mb-8"
                style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 26px)", color: "#B8892A" }}
              >
                Dacă nu faci nimic acum... ce va fi diferit peste 6 luni?
              </p>
              <p className="mb-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Alte obiective, alte eforturi — același mecanism. Viața ta se va reseta la fel. Dar vestea bună e simplă: mecanismul poate fi schimbat.
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A" }}>
                Totul pornește din conștientizare. Aici începe ieșirea din buclă.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── NU E PENTRU ORICINE ── */}
        <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: "#E8DFC8" }}>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="overline mb-5">Înainte să te înscrii</div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#1E1B15" }}
              >
                Acest proces nu e pentru oricine
              </h2>
              <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}>
                Nu este pentru mulțime. Nu este pentru bifă sau entuziasm de o zi. Este pentru cei care vor să vadă dincolo de suprafață și să descopere ce i-a ținut în același loc.
              </p>
              <p
                className="text-base"
                style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "19px", color: "#1E1B15" }}
              >
                Dacă te regăsești aici, înseamnă că e timpul să încetezi să repeți și să începi, cu adevărat, să crești.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FORMULAR CTA ── */}
        <section id="formular" className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "#252018" }}>
          <div className="mx-auto max-w-lg">
            <AnimatedSection>
              {/* Data + ora */}
              <div className="mb-8 flex flex-wrap justify-center gap-6">
                {[
                  { icon: "📅", text: "Data: 20 aprilie" },
                  { icon: "⏰", text: "Ora: 19:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#C8B89A" }}>
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Card formular */}
              <div
                className="rounded-sm p-5 sm:p-8 md:p-10"
                style={{ background: "#1A1814", border: "1px solid rgba(184,137,42,0.2)" }}
              >
                <p
                  className="mb-6 text-center"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "28px", fontWeight: 400, color: "#B8892A" }}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{ background: "rgba(244,239,228,0.06)", border: "1px solid rgba(184,137,42,0.25)", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{ background: "rgba(244,239,228,0.06)", border: "1px solid rgba(184,137,42,0.25)", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs" style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Telefon (opțional)
                    </label>
                    <input
                      type="tel"
                      placeholder="07XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-sm border px-4 py-3 text-sm outline-none"
                      style={{ background: "rgba(244,239,228,0.06)", border: "1px solid rgba(184,137,42,0.25)", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", borderRadius: "2px" }}
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-center" style={{ color: "#E07070", fontFamily: "var(--font-jost), sans-serif" }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 block w-full text-center rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "#B8892A", color: "#F4EFE4", fontFamily: "var(--font-jost), sans-serif", letterSpacing: "0.05em", borderRadius: "2px" }}
                  >
                    {loading ? "Se înregistrează..." : "Vreau să particip la webinar →"}
                  </button>
                  <p className="text-center text-xs" style={{ color: "#7A7060", fontFamily: "var(--font-jost), sans-serif" }}>
                    Gratuit · Fără obligații · Locuri limitate
                  </p>
                </form>
              </div>

              {/* Testimonial */}
              <div className="mt-8 text-center">
                <p
                  className="mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "18px", color: "#9A8F7A" }}
                >
                  &ldquo;M-am simțit susținută cu multă răbdare. Starea de sănătate s-a îmbunătățit.&rdquo;
                </p>
                <p className="text-xs" style={{ color: "#7A7060", fontFamily: "var(--font-jost), sans-serif" }}>
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
