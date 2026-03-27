import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Adrian Martescu — Dirijarea Realității";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1814",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 90px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Linie aurie sus */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#B8892A",
          }}
        />

        {/* Stânga: text */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "640px" }}>
          <div
            style={{
              color: "#B8892A",
              fontSize: "13px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "28px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            DIRIJAREA REALITĂȚII
          </div>

          <div
            style={{
              color: "#F4EFE4",
              fontSize: "72px",
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: "28px",
              letterSpacing: "2px",
            }}
          >
            Adrian Martescu
          </div>

          <div
            style={{
              color: "#9A8F7A",
              fontSize: "22px",
              fontWeight: 300,
              lineHeight: 1.55,
              fontFamily: "Arial, sans-serif",
              maxWidth: "520px",
            }}
          >
            Instrumente concrete pentru o viață care merge în direcția ta.
          </div>

          {/* URL */}
          <div
            style={{
              marginTop: "48px",
              color: "#5C5545",
              fontSize: "14px",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "2px",
            }}
          >
            adrianmartescu.ro
          </div>
        </div>

        {/* Dreapta: portal concentric circles */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "300px",
            height: "300px",
            flexShrink: 0,
          }}
        >
          {[148, 110, 74, 40].map((d, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: d,
                height: d,
                borderRadius: "50%",
                border: `1px solid #B8892A`,
                opacity: i % 2 === 1 ? 0.45 : 0.75,
              }}
            />
          ))}
          {/* Centru */}
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#B8892A",
            }}
          />
          {/* Linii cruce */}
          <div style={{ position: "absolute", width: "1px", height: "148px", background: "rgba(184,137,42,0.35)" }} />
          <div style={{ position: "absolute", width: "148px", height: "1px", background: "rgba(184,137,42,0.35)" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
