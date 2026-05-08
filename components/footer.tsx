"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false)

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
        <div
          className="flex justify-center items-center px-2"
          onMouseEnter={() => setShowSpotifyEmbed(true)}
          onMouseLeave={() => setShowSpotifyEmbed(false)}
        >
          <p className="text-[#a1a1a1] text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 md:gap-2.5 flex-wrap justify-center leading-relaxed">
            <span className="whitespace-nowrap">Built with love and music by</span>
            <a
              href="https://x.com/damilareoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] hover:text-[#a1a1a1] transition-colors underline decoration-[#404040] hover:decoration-[#fafafa] flex-shrink-0"
            >
              Damilare
            </a>

            <span className="relative inline-flex items-center cursor-pointer">
              {/* Spotify icon — turns green + scales on hover */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0"
                animate={
                  showSpotifyEmbed
                    ? { color: "#1DB954", scale: 1.2 }
                    : { color: "#a1a1a1", scale: 1 }
                }
                transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </motion.svg>

              <AnimatePresence>
                {showSpotifyEmbed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.82, y: 14, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.88, y: 8, filter: "blur(4px)" }}
                    transition={{
                      scale: { type: "spring", stiffness: 420, damping: 26 },
                      opacity: { duration: 0.18 },
                      filter: { duration: 0.18 },
                      y: { type: "spring", stiffness: 420, damping: 26 },
                    }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                    style={{ filter: "drop-shadow(0 0 28px rgba(29,185,84,0.18))" }}
                  >
                    {/* Card shell with green glow border */}
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(29,185,84,0.28), 0 28px 64px rgba(0,0,0,0.85), inset 0 1px 0 rgba(29,185,84,0.08)",
                        background: "#0d0d0d",
                        width: "300px",
                      }}
                    >
                      {/* Animated green sweep bar */}
                      <motion.div
                        className="h-px w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, #1DB954 50%, transparent 100%)",
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
                      />

                      {/* Now Playing header */}
                      <motion.div
                        className="flex items-center gap-2.5 px-3.5 pt-3 pb-2"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        {/* Animated equalizer bars */}
                        <div className="flex items-end gap-[2.5px] h-3.5">
                          {[0, 0.12, 0.06, 0.18].map((delay, i) => (
                            <motion.div
                              key={i}
                              className="w-[3px] rounded-full"
                              style={{ background: "#1DB954" }}
                              animate={{ height: ["3px", "11px", "5px", "14px", "3px"] }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.75,
                                delay,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                        <span
                          className="text-[9px] font-semibold tracking-[0.18em] uppercase"
                          style={{ color: "#1DB954" }}
                        >
                          Now Playing
                        </span>
                      </motion.div>

                      {/* Spotify iframe */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.12, duration: 0.2 }}
                      >
                        <iframe
                          src="https://open.spotify.com/embed/track/69AHqDMcDKyxKL1lNNCIve?utm_source=generator&theme=0"
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          style={{ display: "block" }}
                        />
                      </motion.div>

                      {/* Bottom green shimmer line */}
                      <motion.div
                        className="h-px w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(29,185,84,0.4) 50%, transparent 100%)",
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
                      />
                    </div>

                    {/* Arrow pointing down */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid rgba(29,185,84,0.28)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
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
