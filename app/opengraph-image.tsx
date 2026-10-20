import { ImageResponse } from "next/og";

export const alt =
  "Miguel Calzada — Software, datos e IA en producción";
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
          background: "#E9E5DA",
          color: "#10110F",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontSize: 28, letterSpacing: 2 }}>CALZADA</span>
            <span style={{ width: 10, height: 10, background: "#1937FF", display: "flex" }} />
          </div>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontFamily: "monospace",
              color: "#45463F",
            }}
          >
            Software & Data Systems
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            <span>Software que sale</span>
            <span>
              a <span style={{ color: "#1937FF" }}>producción.</span>
            </span>
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: 1,
              color: "#45463F",
            }}
          >
            Miguel Ángel Calzada Martín · Madrid
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            borderTop: "1px solid #10110F",
            paddingTop: 18,
            fontFamily: "monospace",
            fontSize: 16,
            color: "#45463F",
          }}
        >
          <span>ImpactDB MCP</span>
          <span>·</span>
          <span>Applied AI Solutions</span>
          <span>·</span>
          <span>SQLSense AI</span>
          <span>·</span>
          <span>Madrid Transit Pulse</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
