"use client";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export default function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16.5" stroke="#B8892A" strokeWidth="0.8" />
      <circle cx="18" cy="18" r="11.5" stroke="#B8892A" strokeWidth="0.5" strokeDasharray="3 4" />
      <circle cx="18" cy="18" r="6.5" stroke="#B8892A" strokeWidth="0.8" />
      <circle cx="18" cy="18" r="2.5" fill="#B8892A" />
      <line x1="18" y1="1.5" x2="18" y2="34.5" stroke="#B8892A" strokeWidth="0.35" opacity="0.45" />
      <line x1="1.5" y1="18" x2="34.5" y2="18" stroke="#B8892A" strokeWidth="0.35" opacity="0.45" />
    </svg>
  );
}

export function LogoFull({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={36} />
      <div className="flex flex-col leading-tight">
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "18px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: dark ? "#F4EFE4" : "#1E1B15",
            fontWeight: 400,
          }}
        >
          Adrian Martescu
        </span>
        <span
          style={{
            fontFamily: "var(--font-jost), sans-serif",
            fontSize: "8px",
            fontWeight: 500,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#B8892A",
          }}
        >
          Dirijarea Realității
        </span>
      </div>
    </div>
  );
}
