"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Heatmap = dynamic(() => import("@paper-design/shaders-react").then((mod) => mod.Heatmap), { ssr: false })

export function Logo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1a1a1a]" />
  }

  return (
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-[#333] cursor-pointer">
      <Heatmap
        speed={1}
        contour={0.5}
        angle={0}
        noise={0}
        innerGlow={0.5}
        outerGlow={0.5}
        scale={0.75}
        image="https://workers.paper.design/file-assets/01KAZS6TK900909JA4ZNEHW44Q/01KEEBFKDM1N4042R8JDM7FRKB.png"
        colors={["#11206A", "#1F3BA2", "#2F63E7", "#6BD7FF", "#FFE679", "#FF991E", "#FF4C00"]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#000000",
          borderRadius: "10px",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  )
}
