import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080c",
          color: "#f2f2f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#f775be", letterSpacing: 6 }}>
          SLLAMUCA.COM
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
          }}
        >
          Desarrollador
          <span
            style={{
              marginLeft: 24,
              padding: "0 20px",
              whiteSpace: "nowrap",
              backgroundColor: "#ff1399",
              color: "#fff",
            }}
          >
            Full Stack
          </span>
        </div>
        <div style={{ marginTop: 32, fontSize: 36, color: "#a1a1ac" }}>
          {`${site.name} · Lima, Perú`}
        </div>
      </div>
    ),
    size,
  );
}
