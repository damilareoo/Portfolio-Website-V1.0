"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useScrollContext } from "./smooth-scroll-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { currentSection } = useScrollContext()

  const navItems = [
    { name: "Work", href: "#work", id: "work" },
    { name: "About", href: "#about", id: "about" },
    { name: "Across the Web", href: "#across-the-web", id: "across-the-web" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 py-8 md:py-12 transition-all duration-500 ${
        scrolled ? "backdrop-blur-sm bg-background/70" : ""
      }`}
    >
      <div className="container-xl flex items-center justify-between">
        <a href="#" className="meta-text font-medium">
          DO
        </a>

        <div className="hidden md:flex items-center space-x-16">
          <nav className="flex space-x-16">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`meta-text transition-colors duration-500 ${
                  currentSection === item.id ? "text-foreground" : "text-foreground-secondary hover:text-foreground"
                }`}
              >
                {item.name}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="h-px bg-foreground mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-foreground-secondary hover:text-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50"
              >
                <div className="container-xl h-full flex flex-col">
                  <div className="flex justify-between items-center py-8">
                    <a href="#" className="meta-text font-medium">
                      DO
                    </a>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-foreground-secondary hover:text-foreground transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <motion.nav className="flex flex-col justify-center items-center h-full pb-20">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1.0],
                        }}
                        className="mb-12 relative"
                      >
                        <a
                          href={item.href}
                          className={`text-3xl font-light tracking-wide transition-all duration-500 ${
                            currentSection === item.id
                              ? "text-foreground"
                              : "text-foreground-secondary hover:text-foreground"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                          {currentSection === item.id && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="h-px bg-foreground mt-2 mx-auto w-1/2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </a>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
