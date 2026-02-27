"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"

export function WorkbenchEmbed() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    // Preconnect to Figma for faster loading
    const link = document.createElement("link")
    link.rel = "preconnect"
    link.href = "https://nacre-quake-50137672.figma.site"
    document.head.appendChild(link)
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.section
      className="py-12 md:py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm font-medium">interactive canvas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Description and context */}
        

        {/* Canvas Container - Optimized for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group"
        >
          {/* Loading skeleton on mobile */}
          {!isLoaded && isMobile && (
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg z-10 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#2a2a2a] border-t-[#525252] rounded-full animate-spin" />
                <p className="text-xs text-[#737373]">Loading canvas...</p>
              </div>
            </div>
          )}

          <div 
            className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden group-hover:border-[#404040] transition-colors duration-200"
            style={{ 
              height: isMobile ? "auto" : "100%",
              aspectRatio: isMobile ? "16 / 12" : "16 / 9",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <iframe
              src="https://nacre-quake-50137672.figma.site"
              title="WorkBench - Interactive Design Canvas"
              className="w-full h-full border-0"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen"
              style={{
                backgroundColor: "#000000",
                opacity: isLoaded ? 1 : 0.2,
                transition: "opacity 0.4s ease-out",
                pointerEvents: "auto",
              }}
            />
          </div>

          {/* Hover indicator for desktop */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-[#525252] transition-all duration-300 hidden md:block" />

          {/* Mobile instruction hint */}
          {isLoaded && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 flex items-center justify-center gap-2 text-xs text-[#737373]"
            >
              <div className="w-2 h-2 bg-[#525252] rounded-full" />
              <span>Swipe to explore</span>
            </motion.div>
          )}
        </motion.div>

        {/* CTA and external link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 md:mt-8 flex items-center gap-3"
        >
          <a
            href="https://nacre-quake-50137672.figma.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#fafafa] hover:text-white transition-colors duration-300"
          >
            Open in fullscreen
            <ExternalLink className="w-4 h-4 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Decorative separator after embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
