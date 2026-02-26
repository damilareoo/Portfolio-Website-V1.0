"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function WorkbenchEmbed() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preconnect to Figma for faster loading
    const link = document.createElement("link")
    link.rel = "preconnect"
    link.href = "https://nacre-quake-50137672.figma.site"
    document.head.appendChild(link)
  }, [])

  return (
    <motion.section
      className="py-8 md:py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative mb-8 md:mb-12"
        >
          <div className="h-px bg-[#2a2a2a] mb-4 md:mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">workbench</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#636363] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Description text - helps set context before the embed */}
        

        {/* Canvas Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden h-[500px] md:h-[800px] group-hover:border-[#404040] transition-colors duration-200">
            <iframe
              src="https://nacre-quake-50137672.figma.site"
              title="WorkBench - Interactive Design Canvas"
              className="w-full h-full border-0"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen"
              style={{
                backgroundColor: "#000000",
                opacity: isLoaded ? 1 : 0.3,
                transition: "opacity 0.3s ease-out",
              }}
            />
          </div>
          
          {/* Bottom hint for scrolling */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-4 text-center"
          >
            
          </motion.div>
        </motion.div>

        {/* Decorative separator after embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 flex items-center gap-2 md:gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
