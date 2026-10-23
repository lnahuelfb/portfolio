import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Nahuel Fernandez · Reliable data collection and automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0D10",
          color: "#E6E8EB",
          padding: 72,
          borderTop: "6px solid #F5A524",
        }}
      >
        <div style={{ fontSize: 28, color: "#F5A524", letterSpacing: 2 }}>DATA COLLECTION · AUTOMATION</div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>
          Reliable data collection and automation, built to keep running.
        </div>
        <div style={{ fontSize: 32, color: "#8B95A3" }}>Nahuel Fernandez</div>
      </div>
    ),
    size,
  );
}
