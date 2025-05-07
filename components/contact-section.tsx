"use client"

import { motion } from "framer-motion"
import { Circle, ExternalLink, Mail } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("dosofisan7@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

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
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:dosofisan7@gmail.com"
                    className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                    onClick={(e) => {
                      // Fallback for mailto links
                      if (window.innerWidth < 768) {
                        e.preventDefault()
                        copyEmail()
                      }
                    }}
                  >
                    dosofisan7@gmail.com
                    <Mail className="h-3.5 w-3.5 opacity-70" />
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-xs text-foreground-tertiary hover:text-foreground transition-colors duration-300 ml-2"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  <Circle className="h-2 w-2 text-foreground-tertiary" />
                  <span>linkedin.com/in/damilareoo</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">GitHub</span>
                <a
                  href="https://github.com/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  github.com/damilareoo
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Contra</span>
                <a
                  href="https://contra.com/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  contra.com/damilareoo
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Layers</span>
                <a
                  href="https://layers.to/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  <Circle className="h-2 w-2 text-foreground-tertiary" />
                  <span>layers.to/damilareoo</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Pinterest</span>
                <a
                  href="https://pinterest.com/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  pinterest.com/damilareoo
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-value">
                <span className="body-text">Cosmos</span>
                <a
                  href="https://cosmos.so/damilareoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-text hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  cosmos.so/damilareoo
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
