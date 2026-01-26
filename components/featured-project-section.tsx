"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function FeaturedProject() {
  return (
    <section id="featured" className="py-12 md:py-16 relative">
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-4 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="font-mono text-[#737373] text-xs md:text-sm font-medium">featured project</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative"
        >
          {/* Featured Project Container */}
          <div className="md:pl-6">
            {/* Featured Image/GIF */}
            <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
              <div className="relative w-full aspect-video md:aspect-[16/9]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursorful-video-1769333397898_converted.gif-mMXzyT3E0gL9jFQ1jhtiaNmzXuOB3c.jpeg"
                  alt="Sylvan - Revenue intelligence platform"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay indicator */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-[#525252] transition-all duration-300 hidden md:block" />
            </div>

            {/* Content Section */}
            <div className="space-y-6 md:pl-4">
              {/* Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-normal text-[#fafafa]">Sylvan</h3>

                <div className="space-y-4 text-base text-[#a1a1a1] leading-relaxed">
                  <p>
                    Sylvan helps teams understand what actually drives revenue by making customer data simple to read. Most analytics tools bury you in reports and slow dashboards. Sylvan cuts through that.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <h4 className="text-[#fafafa] font-medium mb-2">The Challenge</h4>
                      <p>Revenue teams need to spot the small changes in customer behavior that matter. The problem is most platforms make this harder, not easier. We needed to build an identity that felt like the opposite of cluttered analytics tools.</p>
                    </div>

                    <div>
                      <h4 className="text-[#fafafa] font-medium mb-2">What We Built</h4>
                      <p>We created the signal mark—a visual system that shows how customer actions create patterns over time. It shifts and adapts, kind of like how real opportunities appear in customer journeys. The mark became the core of Sylvan's identity.</p>
                    </div>

                    <div>
                      <h4 className="text-[#fafafa] font-medium mb-2">The Approach</h4>
                      <p>Keep it simple but make it mean something. The identity had to communicate clarity without feeling cold or technical. Every piece of the system reinforces the idea that Sylvan turns noise into signal.</p>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-[#737373]">
                        <span className="text-[#fafafa] font-medium">Role:</span> Brand Design, Logo Design, Web Design, Visual System, Framer Development
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-4"
              >
                <a
                  href="https://sylvanlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 px-4 py-2.5 border border-[#2a2a2a] hover:border-[#404040] rounded transition-all duration-300 text-sm font-medium text-[#fafafa] hover:text-white hover:bg-[#0a0a0a]"
                >
                  View Live Website
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex items-center gap-2 md:gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
