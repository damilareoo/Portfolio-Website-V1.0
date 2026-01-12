"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowUpRight, Copy, Check } from "lucide-react"

const links = [
  { label: "Email", value: "dosofisan7@gmail.com", href: "mailto:dosofisan7@gmail.com", copyable: true },
  { label: "X", value: "@damilareoo", href: "https://x.com/damilareoo" },
  { label: "GitHub", value: "damilareoo", href: "https://github.com/damilareoo" },
  { label: "LinkedIn", value: "damilareoo", href: "https://linkedin.com/in/damilareoo" },
  { label: "v0", value: "@damilareoo", href: "https://v0.app/@damilareoo" },
  { label: "Layers", value: "damilareoo", href: "https://layers.to/damilareoo" },
  { label: "Substack", value: "@damilareoo", href: "https://substack.com/@damilareoo" },
  { label: "Contra", value: "damilareoo", href: "https://contra.com/damilareoo" },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("dosofisan7@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section id="across-the-web" className="py-8 pb-12 md:py-12 md:pb-16 relative">
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-4 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">elsewhere</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#404040] via-[#2a2a2a] to-transparent hidden md:block" />

          <div className="md:pl-6 space-y-2.5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12">
            {links.map((link) => (
              <motion.div
                key={link.label}
                className="group flex items-center justify-between py-2.5 md:py-3 border-b border-[#1a1a1a] hover:border-[#404040] transition-colors duration-300 md:pl-4"
              >
                {link.copyable ? (
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-mono text-[#737373] text-xs md:text-sm flex-shrink-0">{link.label}</span>
                    <span className="text-base text-[#a1a1a1] truncate max-w-[120px] md:max-w-none text-xs md:text-sm">
                      {link.value}
                    </span>
                    <button
                      onClick={copyEmail}
                      className="text-[#525252] hover:text-[#fafafa] transition-colors duration-300 flex-shrink-0"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 w-full"
                  >
                    <span className="text-mono text-[#737373] group-hover:text-[#a1a1a1] transition-colors text-xs md:text-sm flex-shrink-0">
                      {link.label}
                    </span>
                    <span className="text-base text-[#a1a1a1] group-hover:text-[#fafafa] transition-colors duration-300 truncate text-xs md:text-sm">
                      {link.value}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#525252] group-hover:text-[#fafafa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
