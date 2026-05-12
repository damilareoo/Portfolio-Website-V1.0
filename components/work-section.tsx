"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const ease = [0.16, 1, 0.3, 1]

const projects = [
  {
    id: 8,
    title: "Hitman's Library",
    description: "A collection of cool experiences across the web",
    link: "https://mars-hitman-library.vercel.app/",
    tag: "collection",
  },
  {
    id: 11,
    title: "Damilare's Skills",
    description: "Skills for Claude Code, etc",
    link: "https://damilares-skills.vercel.app/",
    tag: "skills",
  },
  {
    id: 10,
    title: "WorkBench",
    description: "Design tool and workspace",
    link: "https://nacre-quake-50137672.figma.site",
    tag: "tool",
  },
  {
    id: 6,
    title: "Pixel Soccer",
    description: "Interactive pixel art game",
    link: "https://pixel-soccer.vercel.app",
    tag: "game",
  },
]

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.06 }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between py-4 md:py-5 border-b border-[#141414] md:pl-5 block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ textDecoration: "none" }}
      >
        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: "#1DB954", opacity: 0.7 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 0.7 : 0 }}
          transition={{ duration: 0.22, ease }}
          style={{ transformOrigin: "top", background: "#333" }}
        />

        {/* Left: index + title + tag */}
        <div className="flex items-baseline gap-3 md:gap-4 min-w-0">
          <span
            className="font-mono text-[10px] md:text-[11px] flex-shrink-0 tabular-nums transition-colors duration-200"
            style={{ color: hovered ? "#888" : "#555", letterSpacing: "0.06em" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <motion.span
            className="text-base md:text-lg lg:text-xl font-normal truncate"
            animate={{ color: hovered ? "#fafafa" : "#a1a1a1", x: hovered ? 2 : 0 }}
            transition={{ duration: 0.2, ease }}
          >
            {project.title}
          </motion.span>
          {project.tag && (
            <span
              className="font-mono text-[10px] hidden sm:block flex-shrink-0 transition-colors duration-200"
              style={{ color: hovered ? "#888" : "#555", letterSpacing: "0.08em" }}
            >
              [{project.tag}]
            </span>
          )}
        </div>

        {/* Right: description + arrow */}
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          <span
            className="text-sm hidden md:block transition-colors duration-200"
            style={{ color: hovered ? "#a1a1a1" : "#555" }}
          >
            {project.description}
          </span>
          <motion.div
            animate={{
              x: hovered ? 2 : 0,
              y: hovered ? -2 : 0,
              color: hovered ? "#a1a1a1" : "#555",
            }}
            transition={{ duration: 0.2, ease }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#1e1e1e] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#333]" />
              <span className="font-mono text-[#999] text-xs md:text-sm">experiments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2a2a2a] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#1e1e1e]" />
            </div>
          </div>
        </motion.div>

        {/* Project list */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-transparent hidden md:block" />
          <div className="md:pl-0">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Trailing ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease, delay: 0.3 }}
          className="mt-8 md:mt-10 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-[#2a2a2a] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#1e1e1e]" />
          <div className="w-1 h-1 bg-[#1e1e1e] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
