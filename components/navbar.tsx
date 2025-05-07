"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Across the Web", href: "#across-the-web" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 py-8 md:py-12"
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
                className="meta-text text-foreground-secondary hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-foreground-secondary hover:text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-border"
              style={{ backgroundColor: "var(--background)" }}
            >
              <nav className="flex flex-col space-y-10 mt-20">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="body-text text-foreground-secondary hover:text-foreground transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
