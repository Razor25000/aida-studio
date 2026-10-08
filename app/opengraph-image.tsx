import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "A'IDA — Atelier d'Architectes, Designers & Ingénieurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#FCFCFC",
          color: "#080807",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#D30000",
            }}
          />
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#4a4a4a",
            }}
          >
            Paris · Singapour · depuis 2015
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            Architecture. Design. Ingénierie.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#4a4a4a",
              maxWidth: 800,
            }}
          >
            Atelier pluridisciplinaire entre Paris et Singapour — 19 projets
            livrés dans 7 pays.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(8, 8, 7, 0.12)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            A'IDA
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#4a4a4a",
            }}
          >
            a-ida.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
