"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useScrollContext } from "./smooth-scroll-provider"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

const ease = [0.16, 1, 0.3, 1]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { currentSection } = useScrollContext()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { name: "Featured", href: "#featured", id: "featured" },
    { name: "Experiments", href: "#work", id: "work" },
    { name: "Elsewhere", href: "#across-the-web", id: "across-the-web" },
  ]

  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 320)
  }

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] isolate">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/92 backdrop-blur-md"
            onClick={onClose}
            style={{ zIndex: 1 }}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.38, ease }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-[#080808] border-l border-[#1e1e1e] flex flex-col"
            style={{ zIndex: 2, willChange: "transform" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-px bg-[#333]" />
                <span className="font-mono text-[#999] text-xs tracking-widest uppercase">menu</span>
              </div>
              <motion.button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center border border-[#1e1e1e] text-[#555]"
                whileHover={{ borderColor: "#333", color: "#ededed" }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.15 }}
                aria-label="Close menu"
              >
                <X className="h-3.5 w-3.5" />
              </motion.button>
            </div>

            {/* Nav items — staggered */}
            <nav className="flex-1 flex flex-col px-5 pt-6 pb-4">
              {navItems.map((item, i) => {
                const active = currentSection === item.id
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.08 + i * 0.06 }}
                    className="group flex items-center justify-between py-4 border-b border-[#141414]"
                    style={{ color: active ? "#fafafa" : "#888888" }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    <span className="text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-[#d1d1d1]">
                      {item.name}
                    </span>
                    {active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#555]" />
                    )}
                  </motion.a>
                )
              })}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="border-t border-[#1a1a1a] px-5 py-4 flex items-center gap-2"
            >
              <div className="w-1 h-1 bg-[#2a2a2a] rounded-full" />
              <span className="font-mono text-[#999] text-xs">&copy; {new Date().getFullYear()} Damilare</span>
              <div className="flex-1 h-px bg-[#141414]" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
