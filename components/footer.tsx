"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false)

  return (
    <motion.footer
      className="px-4 md:px-8 pt-4 md:pt-6 pb-6 md:pb-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="h-px bg-[#2a2a2a] mb-6 md:mb-8" />

      <div className="flex flex-col items-center justify-center gap-8">
        {/* Spotify embed popup section */}
        <div
          className="flex justify-center items-center"
          onMouseEnter={() => setShowSpotifyEmbed(true)}
          onMouseLeave={() => setShowSpotifyEmbed(false)}
        >
          <p className="text-[#a1a1a1] text-xs md:text-sm flex items-center gap-2 md:gap-2.5 flex-wrap justify-center">
            <span>Built with love and music by</span>
            <a
              href="https://x.com/damilareoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] hover:text-[#a1a1a1] transition-colors underline decoration-[#404040] hover:decoration-[#fafafa]"
            >
              Damilare
            </a>

            {/* Spotify icon with embed */}
            <span className="relative inline-flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-[#a1a1a1] hover:text-[#fafafa] transition-colors"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>

              {/* Spotify Embed Popup */}
              <AnimatePresence>
                {showSpotifyEmbed && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 10,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: 5,
                      filter: "blur(2px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1.0],
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                    }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50 bg-[#121212] rounded-lg shadow-2xl border border-[#2a2a2a] overflow-hidden spotify-popup"
                  >
                    <motion.div
                      className="w-72 md:w-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      <iframe
                        src="https://open.spotify.com/embed/playlist/2WqAscMqGj6fGkjaYN9jsY?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-lg"
                      />
                    </motion.div>

                    {/* Animated arrow pointer */}
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#2a2a2a]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </p>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full" />
          <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
        </div>

        {/* Corner accents */}
        <div className="absolute bottom-0 left-3 md:left-4 w-3 h-3 md:w-4 md:h-4 border-l border-b border-[#333]" />
        <div className="absolute bottom-0 right-3 md:right-4 w-3 h-3 md:w-4 md:h-4 border-r border-b border-[#333]" />
      </div>
    </motion.footer>
  )
}
