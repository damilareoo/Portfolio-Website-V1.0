"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">background</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                Designer and builder creating 0–1 experiences. I design products, build what makes them work, and ship them. Most recently, I've been focused on designing brands, systems, and products that feel intuitive and delightful.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                Currently at{" "}
                <a
                  href="https://chessever.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fafafa] underline decoration-[#525252] hover:decoration-[#fafafa] transition-colors duration-300"
                >
                  ChessEver
                </a>{" "}
                as Product Designer and{" "}
                <a
                  href="https://hex.inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fafafa] underline decoration-[#525252] hover:decoration-[#fafafa] transition-colors duration-300"
                >
                  Hex
                </a>{" "}
                as Experimental Designer.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                I believe in creating work that not only looks exceptional but actually solves real problems and delivers meaningful experiences. Every detail matters—from the initial spark to the final polish.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                When I'm not designing or coding, you'll find me playing basketball, exploring new music, and experimenting with playful side projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
