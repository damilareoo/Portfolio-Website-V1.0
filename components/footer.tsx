"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { NowPlaying } from "./now-playing"

export function Footer() {
  const [show, setShow] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  const handleMouseEnter = () => {
    if (isTouch) return
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setShow(true)
  }
  const handleMouseLeave = () => {
    if (isTouch) return
    closeTimer.current = setTimeout(() => setShow(false), 120)
  }
  const handleClick = () => {
    if (!isTouch) return
    setShow((v) => !v)
  }

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
            className="text-[#a1a1a1] text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center leading-relaxed"
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

            <span
              className="relative inline-flex items-center"
              style={{
                cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' fill='white'/%3E%3C/svg%3E") 6 0, pointer`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              aria-label="Now playing on Spotify"
              role="button"
              tabIndex={0}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0"
                animate={show ? { color: "#1DB954", scale: 1.15 } : { color: "#a1a1a1", scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </motion.svg>

              {/* Desktop: hover popup above icon */}
              {!isTouch && (
                <AnimatePresence>
                  {show && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                      style={{ perspective: "800px", perspectiveOrigin: "50% 100%" }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 22, rotateX: -14, scale: 0.93, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0,  rotateX: 0,   scale: 1,    filter: "blur(0px)" }}
                        exit={{    opacity: 0, y: 12, rotateX: 10,  scale: 0.95, filter: "blur(4px)" }}
                        transition={{
                          y:       { type: "spring", stiffness: 340, damping: 26 },
                          rotateX: { type: "spring", stiffness: 340, damping: 26 },
                          scale:   { type: "spring", stiffness: 340, damping: 26 },
                          opacity: { duration: 0.15 },
                          filter:  { duration: 0.2 },
                        }}
                        style={{ transformOrigin: "50% 100%" }}
                      >
                        <NowPlaying />
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              )}
            </span>
          </p>

          {/* Mobile: inline player below footer text */}
          {isTouch && (
            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NowPlaying />
                </motion.div>
              )}
            </AnimatePresence>
          )}
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
