"use client"

import { motion } from "framer-motion"

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section id="hero" className="pt-16 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-20 relative">
      <div className="px-4 sm:px-6 md:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
          <motion.div variants={itemVariants} className="mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#fafafa] text-pretty">Damilare Osofisan</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <p className="text-sm sm:text-base md:text-lg text-[#a1a1a1] max-w-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed text-balance">
              Designer and builder creating 0–1 experiences. I design products, build what makes them work, and ship
              them. Currently at{" "}
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 md:mt-12 flex items-center gap-2 md:gap-3"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#636363] rounded-full" />
          <div className="w-12 sm:w-16 md:w-20 h-px bg-[#333]" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#4a4a4a] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
