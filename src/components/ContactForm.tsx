"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-xs"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Nume complet *
          </label>
          <input
            type="text"
            required
            className="rounded-sm border px-4 py-3 text-sm outline-none"
            style={{
              background: "#E8DFC8",
              border: "1px solid rgba(184,137,42,0.25)",
              color: "#1E1B15",
              fontFamily: "var(--font-jost), sans-serif",
              borderRadius: "2px",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-xs"
            style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Email *
          </label>
          <input
            type="email"
            required
            className="rounded-sm border px-4 py-3 text-sm outline-none"
            style={{
              background: "#E8DFC8",
              border: "1px solid rgba(184,137,42,0.25)",
              color: "#1E1B15",
              fontFamily: "var(--font-jost), sans-serif",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-xs"
          style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Telefon (opțional)
        </label>
        <input
          type="tel"
          className="rounded-sm border px-4 py-3 text-sm outline-none"
          style={{
            background: "#E8DFC8",
            border: "1px solid rgba(184,137,42,0.25)",
            color: "#1E1B15",
            fontFamily: "var(--font-jost), sans-serif",
            borderRadius: "2px",
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-xs"
          style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Subiect
        </label>
        <select
          className="rounded-sm border px-4 py-3 text-sm outline-none"
          style={{
            background: "#E8DFC8",
            border: "1px solid rgba(184,137,42,0.25)",
            color: "#1E1B15",
            fontFamily: "var(--font-jost), sans-serif",
            borderRadius: "2px",
          }}
        >
          <option>Webinar gratuit</option>
          <option>Programul Alchimia Internă Taoistă</option>
          <option>Programul complet Dirijarea Realității</option>
          <option>Altceva</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-xs"
          style={{ fontFamily: "var(--font-jost), sans-serif", color: "#9A8F7A", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Mesaj
        </label>
        <textarea
          rows={5}
          className="rounded-sm border px-4 py-3 text-sm outline-none resize-none"
          style={{
            background: "#E8DFC8",
            border: "1px solid rgba(184,137,42,0.25)",
            color: "#1E1B15",
            fontFamily: "var(--font-jost), sans-serif",
            borderRadius: "2px",
          }}
        />
      </div>

      <button
        type="submit"
        className="rounded-sm px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "#B8892A",
          color: "#F4EFE4",
          fontFamily: "var(--font-jost), sans-serif",
          letterSpacing: "0.05em",
          borderRadius: "2px",
        }}
      >
        Trimite mesajul
      </button>

      <p
        className="text-xs text-center"
        style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#9A8F7A" }}
      >
        Îți răspund în maxim 24 de ore. E în regulă să vii și fără să știi exact ce vrei — și asta e un loc bun de pornit.
      </p>
    </form>
  );
}
