"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoFull } from "./LogoMark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Cum te ajut", href: "#cum-functioneaza" },
    { label: "Servicii", href: "#servicii" },
    { label: "Despre", href: "#despre" },
    { label: "Proces", href: "#proces" },
    { label: "Testimoniale", href: "#testimoniale" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(244,239,228,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,137,42,0.15)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" aria-label="Acasă">
          <LogoFull />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
                color: "#5C5545",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#B8892A")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5C5545")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/webinar"
            className="hidden rounded-sm px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 lg:block"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              background: "#B8892A",
              color: "#F4EFE4",
              letterSpacing: "0.04em",
              borderRadius: "2px",
            }}
          >
            Înscrie-te la webinar
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{ background: "#1E1B15", transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none" }}
            />
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{ background: "#1E1B15", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{ background: "#1E1B15", transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-4 sm:px-6 py-4 sm:py-5 lg:hidden"
          style={{ background: "rgba(244,239,228,0.97)", borderColor: "rgba(184,137,42,0.15)" }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm"
                style={{ fontFamily: "var(--font-jost), sans-serif", color: "#5C5545" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/webinar"
              className="mt-2 block rounded-sm px-5 py-3 text-center text-sm font-medium"
              style={{ background: "#B8892A", color: "#F4EFE4", borderRadius: "2px" }}
              onClick={() => setMenuOpen(false)}
            >
              Înscrie-te la webinar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
