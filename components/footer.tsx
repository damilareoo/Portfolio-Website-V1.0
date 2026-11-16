"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-6 md:pb-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
    >
      <div className="h-px bg-[#2a2a2a] mb-4 sm:mb-6 md:mb-8" />

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-[#a1a1a1] text-xs sm:text-sm tracking-wide flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center leading-relaxed"
          >
            <span className="whitespace-nowrap">Built with love and music by</span>
            <a
              href="https://x.com/damilareoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] hover:text-[#a1a1a1] transition-colors underline decoration-[#404040] hover:decoration-[#fafafa] flex-shrink-0"
            >
              Damilare
            </a>

          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-3">
          <div className="w-4 sm:w-6 md:w-8 h-px bg-[#2a2a2a]" />
          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full flex-shrink-0" />
          <div className="w-4 sm:w-6 md:w-8 h-px bg-[#2a2a2a]" />
        </div>

        <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-3 left-2 sm:left-3 md:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-l border-b border-[#333]" />
        <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-3 right-2 sm:right-3 md:right-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-r border-b border-[#333]" />
      </div>
    </motion.footer>
  )
}
