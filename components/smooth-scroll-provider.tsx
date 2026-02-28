"use client"

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react"
import { motion, useSpring, useInView } from "framer-motion"

type ScrollContextType = {
  currentSection: string
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider")
  }
  return context
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState("hero")
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastSectionRef = useRef("hero")

  useEffect(() => {
    const sections = ["hero", "work", "across-the-web"]

    const observer = new IntersectionObserver(
      (entries) => {
        let newSection = lastSectionRef.current

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            const id = entry.target.id
            if (sections.includes(id)) {
              newSection = id
            }
          }
        })

        if (newSection !== lastSectionRef.current) {
          if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current)
          }

          debounceTimerRef.current = setTimeout(() => {
            lastSectionRef.current = newSection
            setCurrentSection(newSection)
          }, 150)
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0.1, 0.2, 0.5],
      },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return <ScrollContext.Provider value={{ currentSection }}>{children}</ScrollContext.Provider>
}

export function SectionTransition({ children, id }: { children: ReactNode; id: string }) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    once: true,
    amount: 0.2,
  })

  // Snappy easing curve for buttery smooth feel
  const easing = [0.2, 0, 0.38, 0.9]
  
  // Always call useSpring - use spring physics only on desktop for premium feel
  const springConfig = { stiffness: 100, damping: 30, mass: 0.3 }
  const opacity = useSpring(isInView ? 1 : 0.8, springConfig)

  // Mobile uses faster, lighter animations; desktop uses spring physics for that premium feel
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={isMobile ? { duration: 0.2, ease: easing } : undefined}
      style={!isMobile ? { opacity, willChange: "opacity" } : { willChange: "opacity" }}
    >
      {children}
    </motion.div>
  )
}
