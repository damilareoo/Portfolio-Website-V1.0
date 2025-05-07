"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "cAI",
    category: "AI/ML",
    year: "2023",
    description:
      "A conversational AI platform that helps businesses automate customer support with natural language understanding and contextual responses.",
  },
  {
    id: 2,
    title: "Caged Bird",
    category: "Web App",
    year: "2022",
    description:
      "A digital publishing platform that empowers writers to share their stories and connect with readers through an elegant, distraction-free interface.",
  },
  {
    id: 3,
    title: "Interactive Quotes App",
    category: "Web App",
    year: "2022",
    description:
      "A dynamic application that presents inspirational quotes with interactive elements, allowing users to explore, save, and share their favorites.",
  },
  {
    id: 4,
    title: "WordLadderWar",
    category: "Game Development",
    year: "2023",
    description:
      "A competitive word game that challenges players to transform words one letter at a time, featuring engaging gameplay mechanics and striking visual design.",
  },
  {
    id: 5,
    title: "Enhanced Mobile Experience for Volvo",
    category: "UX/UI Design",
    year: "2021",
    description:
      "A comprehensive redesign of Volvo's mobile interface, focusing on intuitive navigation, personalized features, and seamless integration with vehicle systems.",
  },
  {
    id: 6,
    title: "Weather App",
    category: "Web App",
    year: "2022",
    description:
      "A beautifully designed weather application that provides real-time forecasts, location-based weather data, and intuitive visualizations of atmospheric conditions.",
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
                href="#"
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
