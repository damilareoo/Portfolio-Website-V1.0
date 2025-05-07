"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="across-the-web" className="section-spacing pb-40">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Across the Web
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Email</span>
                <span className="body-text">damilareosofisan@gmail.com</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">LinkedIn</span>
                <div className="flex items-center">
                  <Circle className="h-2 w-2 text-foreground-tertiary mr-2" />
                  <span className="body-text">damilare-osofisan</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">GitHub</span>
                <span className="body-text">damilareoo</span>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Layers</span>
                <div className="flex items-center">
                  <Circle className="h-2 w-2 text-foreground-tertiary mr-2" />
                  <span className="body-text">layers.to</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Dribbble</span>
                <span className="body-text">dribbble.com</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Pinterest</span>
                <div className="flex items-center">
                  <Circle className="h-2 w-2 text-foreground-tertiary mr-2" />
                  <span className="body-text">pinterest.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Cosmos</span>
                <span className="body-text">cosmos.so</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
