"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 0,
    title: "SmallChess",
    description: "Chess ecosystem",
    link: "https://small-chess.vercel.app/",
    image: "/images/smallchess-preview.jpg",
    category: "Interactive",
  },
  {
    id: 1,
    title: "Trieuth Capital",
    description: "Brand, web design and dev",
    link: "https://trieuthcapital.com",
    image: "/images/trieuth-preview.jpg",
    category: "Web Design",
  },
  {
    id: 3,
    title: "Reveriee",
    description: "Interactive quotes",
    link: "https://chord-gig-63118351.figma.site",
    image: "/images/reveriee-preview.jpg",
    category: "Experience",
  },
  {
    id: 4,
    title: "Dithering Background",
    description: "Generative shader design",
    link: "https://v0-shader-component-generation.vercel.app/",
    image: "/images/dithering-preview.jpg",
    category: "Creative Code",
  },
  {
    id: 5,
    title: "Image to ASCII",
    description: "Fork of",
    link: "https://v0-test-mu-eight-72.vercel.app/",
    image: "/images/ascii-preview.jpg",
    category: "Tool",
    credit: { name: "Rauch", url: "https://x.com/rauchg" },
  },
  {
    id: 6,
    title: "Pixel Soccer",
    description: "Interactive pixel art game",
    link: "https://pixel-soccer.vercel.app",
    image: "/images/pixelsoccer-preview.jpg",
    category: "Game",
  },
  {
    id: 7,
    title: "Caged Bird",
    description: "Puzzle game experience",
    link: "https://cagedbird.vercel.app",
    image: "/images/cagedbird-preview.jpg",
    category: "Game",
  },
]

export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.2, 0, 0.38, 0.9],
      },
    },
  }

  return (
    <section id="work" className="py-12 md:py-16 relative">
      <div className="px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative mb-10 md:mb-12"
        >
          <div className="h-px bg-[#2a2a2a] mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm font-medium">experiments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-full flex flex-col bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#404040] transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
                    {/* Title and Category */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-medium text-[#fafafa] group-hover:text-white transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-[#525252] group-hover:text-[#fafafa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-sm text-[#737373] group-hover:text-[#a1a1a1] transition-colors duration-300 mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer with Category and Credit */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                      <span className="text-xs md:text-sm text-mono text-[#525252] group-hover:text-[#737373] transition-colors duration-300">
                        {project.category}
                      </span>
                      {project.credit && (
                        <span className="text-xs text-[#525252]">
                          <span
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(project.credit.url, "_blank")
                            }}
                            className="text-[#737373] hover:text-[#fafafa] underline underline-offset-2 cursor-pointer transition-colors"
                          >
                            {project.credit.name}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
