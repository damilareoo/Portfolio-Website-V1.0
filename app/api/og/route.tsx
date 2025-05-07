import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "#1a1a1c",
        color: "rgba(255, 255, 255, 0.9)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      }}
    >
      DAMILARE OSOFISAN
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
