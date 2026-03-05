import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Samuel Pokam — Full-Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const OgImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #161619 0%, #1e1e24 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#faf8f5",
            marginBottom: 16,
          }}
        >
          Samuel Pokam
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#d4a054",
            letterSpacing: 2,
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            marginTop: 24,
          }}
        >
          khimerafolio.vercel.app
        </div>
      </div>
    ),
    { ...size },
  )

export default OgImage
