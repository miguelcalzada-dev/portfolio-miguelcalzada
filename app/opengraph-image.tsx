import { ImageResponse } from "next/og";

export const alt = "Miguel Angel Calzada Martin - Software Developer | IA & Big Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#f5f5f5",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              background: "#FF3E00",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a3a3a3",
            }}
          >
            miguelcalzada.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: -2,
            }}
          >
            <span>Miguel Angel</span>
            <span style={{ color: "#FF3E00" }}>Calzada Martin</span>
          </div>
          <div style={{ fontSize: 34, color: "#d4d4d4" }}>
            Software Developer · IA &amp; Big Data
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#8a8a8a" }}>
          <span>Node.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>AWS</span>
          <span>·</span>
          <span>Docker</span>
          <span>·</span>
          <span>LLM / RAG</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
