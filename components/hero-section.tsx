"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1]

export const HeroSection = () => {
  const bioWords = "Designer and builder creating 0–1 experiences. I design products, build what makes them work, and ship them.".split(" ")

  return (
    <section id="hero" className="pt-24 pb-14 md:pt-36 md:pb-24 relative">
      <div className="px-6 md:px-8">

        {/* Name */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-[2.6rem] font-medium text-[#fafafa] tracking-tight mb-7 md:mb-10 leading-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Damilare Osofisan
        </motion.h1>

        {/* Bio — word-by-word stagger */}
        <p className="text-base md:text-lg text-[#a1a1a1] max-w-xl leading-relaxed">
          {bioWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease,
                delay: 0.18 + i * 0.022,
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Decorative rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          style={{ transformOrigin: "left" }}
          className="mt-10 md:mt-14 flex items-center gap-3"
        >
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#636363] rounded-full" />
          <div className="w-16 md:w-24 h-px bg-[#2a2a2a]" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#3a3a3a] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
