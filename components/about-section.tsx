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
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32"
        >
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <p className="body-text text-foreground-secondary">
                I'm a multidisciplinary designer and developer with over 5 years of experience creating digital products
                that are both beautiful and functional.
              </p>
              <p className="body-text text-foreground-secondary">
                My approach combines aesthetic sensibility with technical expertise, allowing me to bridge the gap
                between design and implementation.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <p className="body-text text-foreground-secondary">
                I believe in creating work that not only looks good but also solves real problems and delivers
                exceptional user experiences.
              </p>
              <p className="body-text text-foreground-secondary">
                When I'm not designing or coding, I enjoy exploring new technologies, listening to music, and
                contributing to open-source projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
