"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function WorkbenchEmbed() {
  const [isLoading, setIsLoading] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.section
      id="workbench-embed"
      className="py-8 md:py-12 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="px-4 md:px-8">
        {/* Section header with line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-4 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-4 md:w-6 h-px bg-[#404040]" />
                <span className="text-mono text-[#737373] text-xs md:text-sm">interactive workspace</span>
              </div>
              <span className="text-mono text-[#525252] text-xs md:text-sm hidden md:inline">← explore the canvas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#636363] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          <div className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden md:h-[1000px] h-[600px] group-hover:border-[#404040] transition-colors duration-300">
            {/* Loading skeleton with smoother animation */}
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] animate-pulse z-10" />
            )}

            <iframe
              src="https://nacre-quake-50137672.figma.site"
              title="WorkBench - Interactive Design Canvas"
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              allow="fullscreen"
            />
          </div>

          {/* Subtle glow effect on hover - uses GPU acceleration */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 will-change-opacity" />
        </motion.div>

        {/* Bottom divider with visual balance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 md:mt-8 flex items-center gap-2 md:gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
