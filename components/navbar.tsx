"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { useScrollContext } from "./smooth-scroll-provider"
import { MobileMenu } from "./mobile-menu"
import { Logo } from "./logo"

const ease = [0.16, 1, 0.3, 1]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { currentSection } = useScrollContext()

  const navItems = [
    { name: "Featured", href: "#featured", id: "featured" },
    { name: "Experiments", href: "#work", id: "work" },
    { name: "Elsewhere", href: "#across-the-web", id: "across-the-web" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/85 backdrop-blur-md" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="h-px bg-[#2a2a2a]" />

        <div className="grid-container">
          <div className="flex items-center justify-between py-3 md:py-4 px-6 md:px-8">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 md:gap-3 group focus-visible:outline-2 outline-offset-2 outline-[#525252]"
              aria-label="Portfolio home"
            >
              <motion.div
                className="h-px bg-[#333]"
                style={{ width: "6px" }}
                whileHover={{ width: "16px", backgroundColor: "#555" }}
                transition={{ duration: 0.25, ease }}
              />
              <Logo />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main links">
              {navItems.map((item, index) => {
                const active = currentSection === item.id
                return (
                  <div key={item.name} className="flex items-center">
                    {index > 0 && (
                      <div className="w-3 md:w-4 h-px bg-[#222] mx-1.5 md:mx-2" />
                    )}
                    <a
                      href={item.href}
                      className="relative px-2.5 md:px-3 py-2 text-xs md:text-sm transition-colors duration-200 focus-visible:outline-2 outline-offset-2 outline-[#525252] rounded"
                      style={{ color: active ? "#fafafa" : "#6a6a6a" }}
                      aria-current={active ? "page" : undefined}
                    >
                      {/* Sliding active indicator */}
                      <AnimatePresence>
                        {active && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute inset-0 rounded"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease }}
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative z-10 transition-colors duration-200" style={{ color: active ? "#fafafa" : undefined }}>
                        {item.name}
                      </span>
                      {/* Bottom dot indicator */}
                      <AnimatePresence>
                        {active && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#555]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2, ease }}
                          />
                        )}
                      </AnimatePresence>
                    </a>
                  </div>
                )
              })}
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-9 h-9 border border-[#2a2a2a] text-[#ededed]"
                whileHover={{ borderColor: "#444", backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.15 }}
                aria-label="Open menu"
                aria-expanded={isOpen}
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#2a2a2a]" />
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
