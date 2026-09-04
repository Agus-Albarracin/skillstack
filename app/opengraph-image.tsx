import { ImageResponse } from "next/og";
import { skills } from "@/lib/skills";

export const alt = "Skillstack — Guía de skills para proyectos full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f4f3ee",
          color: "#191b17",
          padding: "76px 84px",
        }}
      >
        <div style={{ display: "flex", maxWidth: 760, flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700 }}>
            <span style={{ marginRight: 16, color: "#7767ed" }}>S /</span>
            skillstack.
          </div>
          <h1 style={{ margin: "70px 0 0", fontSize: 82, lineHeight: 0.98, letterSpacing: "-5px" }}>
            Tu stack completo. Skill por skill.
          </h1>
          <p style={{ margin: "34px 0 0", color: "#656960", fontSize: 27 }}>
            Guía curada para construir aplicaciones full stack.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: 250,
            height: 360,
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #191b17",
            borderRadius: 32,
            background: "#d9ff5a",
            padding: 32,
            transform: "rotate(4deg)",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700 }}>LEARN</span>
          <strong style={{ fontSize: 62 }}>{skills.length}</strong>
          <span style={{ fontSize: 22 }}>skills open source</span>
        </div>
      </div>
    ),
    size,
  );
}
