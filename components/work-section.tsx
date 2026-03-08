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
    image: "https://small-chess.vercel.app/api/og",
    category: "Interactive",
  },
  {
    id: 1,
    title: "Trieuth Capital",
    description: "Brand, web design and dev",
    link: "https://trieuthcapital.com",
    image: "https://trieuthcapital.com/api/og",
    category: "Web Design",
  },
  {
    id: 3,
    title: "Reveriee",
    description: "Interactive quotes",
    link: "https://chord-gig-63118351.figma.site",
    image: "https://chord-gig-63118351.figma.site/api/og",
    category: "Experience",
  },
  {
    id: 4,
    title: "Dithering Background",
    description: "Generative shader design",
    link: "https://v0-shader-component-generation.vercel.app/",
    image: "https://v0-shader-component-generation.vercel.app/api/og",
    category: "Creative Code",
  },
  {
    id: 5,
    title: "Image to ASCII",
    description: "Fork of",
    link: "https://v0-test-mu-eight-72.vercel.app/",
    image: "https://v0-test-mu-eight-72.vercel.app/api/og",
    category: "Tool",
    credit: { name: "Rauch", url: "https://x.com/rauchg" },
  },
  {
    id: 6,
    title: "Pixel Soccer",
    description: "Interactive pixel art game",
    link: "https://pixel-soccer.vercel.app",
    image: "https://pixel-soccer.vercel.app/api/og",
    category: "Game",
  },
  {
    id: 7,
    title: "Caged Bird",
    description: "Puzzle game experience",
    link: "https://cagedbird.vercel.app",
    image: "https://cagedbird.vercel.app/api/og",
    category: "Game",
  },
]

function ProjectCard({ project, variants }: { project: typeof projects[0]; variants: any }) {
  return (
    <motion.div variants={variants}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="relative h-full flex flex-col">
          {/* Image Container - Matches featured project sizing and styling */}
          <div className="relative mb-4 md:mb-6 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
            <div className="relative w-full aspect-video md:aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
            {/* Minimal overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/40" />
          </div>

          {/* Content - Minimal, linear layout */}
          <div className="flex flex-col gap-2">
            {/* Title with arrow */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base md:text-lg font-normal text-[#fafafa] group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#525252] group-hover:text-[#fafafa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5" />
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-[#737373] group-hover:text-[#a1a1a1] transition-colors duration-300">
              {project.description}
            </p>

            {/* Divider line */}
            <div className="w-8 h-px bg-[#2a2a2a] my-1" />

            {/* Category and Credit - Linear footer */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#525252] group-hover:text-[#737373] transition-colors duration-300">
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
  )
}

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

        {/* Projects Grid - Minimal spacing, linear feel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
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
