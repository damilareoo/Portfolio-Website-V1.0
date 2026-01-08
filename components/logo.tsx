"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Heatmap = dynamic(() => import("@paper-design/shaders-react").then((mod) => mod.Heatmap), { ssr: false })

export function Logo() {
  const [isMobile, setIsMobile] = useState(false)
  const [showHeatmap, setShowHeatmap] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setShowHeatmap(window.innerWidth < 768) // Show heatmap by default on mobile
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile || showHeatmap) {
    return (
      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-[#333] hover:border-[#666] transition-colors duration-300">
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

  return (
    <div
      className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-[#333] transition-colors duration-300 relative cursor-pointer"
      onMouseEnter={() => setShowHeatmap(true)}
      onMouseLeave={() => setShowHeatmap(false)}
    >
      {showHeatmap ? (
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
      ) : (
        <Image
          src="/images/avatar.png"
          alt="Damilare Osofisan"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}
