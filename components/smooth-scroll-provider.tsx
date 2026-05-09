"use client"

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

type ScrollContextType = { currentSection: string }
const ScrollContext = createContext<ScrollContextType | null>(null)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) throw new Error("useScrollContext must be used within a ScrollProvider")
  return context
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState("hero")
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const lastRef = useRef("hero")

  useEffect(() => {
    const sections = ["hero", "featured", "work", "across-the-web"]

    const observer = new IntersectionObserver(
      (entries) => {
        let next = lastRef.current
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            const id = entry.target.id
            if (sections.includes(id)) next = id
          }
        })
        if (next !== lastRef.current) {
          if (debounceRef.current) clearTimeout(debounceRef.current)
          debounceRef.current = setTimeout(() => {
            lastRef.current = next
            setCurrentSection(next)
          }, 120)
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: [0.1, 0.2, 0.5] },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return <ScrollContext.Provider value={{ currentSection }}>{children}</ScrollContext.Provider>
}

export function SectionTransition({ children, id }: { children: ReactNode; id: string }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  if (prefersReducedMotion) return <div>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: id === "hero" ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04, margin: "0px 0px -4% 0px" }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.5 },
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}
