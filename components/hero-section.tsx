"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
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

  return (
    <section className="min-h-[50vh] flex items-center pt-20 pb-8 md:pt-24 md:pb-12 relative">
      <div className="absolute top-3 left-3 md:top-4 md:left-4 w-3 h-3 md:w-4 md:h-4 border-l border-t border-[#333]" />
      <div className="absolute top-3 right-3 md:top-4 md:right-4 w-3 h-3 md:w-4 md:h-4 border-r border-t border-[#333]" />

      <div className="w-full px-4 md:px-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h1 variants={itemVariants} className="text-large font-normal text-[#fafafa] mb-4 md:mb-6">
            Damilare Osofisan
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base text-[#a1a1a1] max-w-sm md:max-w-md leading-relaxed">
            Designer and builder. Sharing cool stuff made with{" "}
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] hover:text-white border-b border-[#404040] hover:border-[#737373] transition-colors duration-300 pb-px"
            >
              v0
            </a>
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 md:gap-3 mt-8 md:mt-10">
            <div className="w-8 md:w-12 h-px bg-[#2a2a2a]" />
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full" />
            <div className="w-4 md:w-6 h-px bg-[#2a2a2a]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
