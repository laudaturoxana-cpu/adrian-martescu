"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  dark?: boolean;
}

export default function AccordionItem({ question, answer, dark = false }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b py-5 cursor-pointer"
      style={{ borderColor: "rgba(184,137,42,0.2)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          className="text-base"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 500,
            color: dark ? "#E8DFC8" : "#1E1B15",
            fontSize: "18px",
          }}
        >
          {question}
        </h3>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#B8892A",
            fontSize: "20px",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-jost), sans-serif", color: dark ? "#9A8F7A" : "#5C5545" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
