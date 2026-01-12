"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function WorkbenchEmbed() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [eagerLoad, setEagerLoad] = useState(false)

  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "preconnect"
    link.href = "https://nacre-quake-50137672.figma.site"
    document.head.appendChild(link)

    setEagerLoad(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { rootMargin: "0px" },
    )

    const element = document.getElementById("workbench-embed")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="px-4 md:px-8">
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
                <span className="text-mono text-[#737373] text-xs md:text-sm">workbench</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#636363] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0 }}
          className="relative group"
        >
          <div className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden md:h-[1000px] h-[600px] group-hover:border-[#404040] transition-colors duration-200">
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] z-10" />
            )}

            {eagerLoad && (
              <iframe
                src="https://nacre-quake-50137672.figma.site"
                title="WorkBench - Interactive Design Canvas"
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                allow="fullscreen"
                loading="lazy"
                style={{ contain: "layout style paint" }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
