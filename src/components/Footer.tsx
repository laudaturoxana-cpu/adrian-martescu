import Link from "next/link";
import { LogoFull } from "./LogoMark";

interface FooterProps {
  simple?: boolean;
}

export default function Footer({ simple = false }: FooterProps) {
  return (
    <footer
      className="border-t py-12"
      style={{ background: "#1E1B15", borderColor: "rgba(184,137,42,0.15)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {simple ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <LogoFull className="[&_span]:!text-[#F4EFE4]" />
            <p className="text-xs" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
              © 2026 Adrian Martescu. Toate drepturile rezervate.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <LogoFull />
              <p className="text-sm leading-relaxed" style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}>
                Dirijarea Realității — instrumente concrete pentru o viață care merge în direcția ta.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p
                className="mb-1 text-xs uppercase tracking-widest"
                style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Linkuri rapide
              </p>
              {[
                { label: "Webinar gratuit", href: "/webinar" },
                { label: "Servicii", href: "/#servicii" },
                { label: "Despre", href: "/#despre" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p
                className="mb-1 text-xs uppercase tracking-widest"
                style={{ color: "#B8892A", fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Legal
              </p>
              {[
                { label: "Politică de confidențialitate", href: "/politica-de-confidentialitate" },
                { label: "Termeni și condiții", href: "/termeni-si-conditii" },
                { label: "GDPR", href: "/gdpr" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#9A8F7A", fontFamily: "var(--font-jost), sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <p className="mt-4 text-xs" style={{ color: "#5C5545", fontFamily: "var(--font-jost), sans-serif" }}>
                © 2026 Adrian Martescu.<br />Toate drepturile rezervate.
              </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
