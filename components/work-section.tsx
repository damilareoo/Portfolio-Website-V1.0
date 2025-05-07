"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "cAI",
    category: "AI/ML",
    year: "2025",
    description:
      "A smart contract analysis platform that helps developers audit and secure blockchain code with automated vulnerability detection and optimization recommendations.",
    link: "https://smartcai.framer.website",
  },
  {
    id: 2,
    title: "Caged Bird",
    category: "Web App",
    year: "2025",
    description:
      "An engaging puzzle game that challenges players to solve brain teasers and riddles to free a trapped bird, featuring progressive difficulty and charming visual storytelling.",
    link: "https://cagedbird.vercel.app",
  },
  {
    id: 3,
    title: "Interactive Quotes App",
    category: "Web App",
    year: "2025",
    description:
      "A thoughtfully designed application that presents inspirational quotes with interactive elements, allowing users to explore, save, and share their favorites.",
    link: "https://v0-interactive-quote-app.vercel.app/",
  },
  {
    id: 4,
    title: "WordLadderWar",
    category: "Game Development",
    year: "2025",
    description:
      "A competitive word game that challenges players to transform words one letter at a time, featuring engaging gameplay mechanics and striking visual design.",
    link: "https://word-ladder-war.vercel.app/",
  },
  {
    id: 5,
    title: "Enhanced Mobile Experience for Volvo",
    category: "UX/UI Design",
    year: "2024",
    description:
      "A comprehensive redesign of Volvo's mobile interface, focusing on intuitive navigation, personalized features, and seamless integration with vehicle systems.",
    link: "https://dribbble.com/shots/24589230-Enhanced-Mobile-Experience-for-Volvo",
  },
  {
    id: 6,
    title: "Weather App",
    category: "Web App",
    year: "2024",
    description:
      "A beautifully designed weather application that provides real-time forecasts, location-based weather data, and intuitive visualizations of atmospheric conditions.",
    link: "https://weather-app-opal-nine-24.vercel.app",
  },
]

export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="work" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {project.title}
                  </h3>
                  <div className="text-foreground-secondary text-base md:text-lg">{project.year}</div>
                </div>

                {/* Project description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  <p className="text-sm md:text-base text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="border-t border-foreground/10 mt-0"></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
