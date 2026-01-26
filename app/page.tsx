"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProject } from "@/components/featured-project-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { WorkbenchEmbed } from "@/components/workbench-embed"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SmoothScrollProvider, SectionTransition } from "@/components/smooth-scroll-provider"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <motion.main
        className="min-h-screen relative w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <Navbar />

        {/* Full-width container with centered content and side lines */}
        <div className="relative w-full">
          {/* Left border line */}
          <div 
            className="fixed left-[calc(50%-450px)] top-0 w-px bg-[#2a2a2a] hidden md:block pointer-events-none"
            aria-hidden="true"
            style={{ height: '100%' }}
          />
          {/* Right border line */}
          <div 
            className="fixed left-[calc(50%+450px)] top-0 w-px bg-[#2a2a2a] hidden md:block pointer-events-none"
            aria-hidden="true"
            style={{ height: '100%' }}
          />

          {/* Centered content container */}
          <div className="grid-container">
            <section id="hero" aria-label="Hero section">
              <SectionTransition id="hero">
                <HeroSection />
              </SectionTransition>
            </section>

            <section id="featured" aria-label="Featured project">
              <SectionTransition id="featured">
                <FeaturedProject />
              </SectionTransition>
            </section>

            <section id="work" aria-label="Work and experiments">
              <SectionTransition id="work">
                <WorkSection />
              </SectionTransition>
            </section>

            <section id="across-the-web" aria-label="Elsewhere and contact">
              <SectionTransition id="across-the-web">
                <ContactSection />
              </SectionTransition>
            </section>

            <section id="workbench" aria-label="WorkBench design tool">
              <SectionTransition id="workbench">
                <WorkbenchEmbed />
              </SectionTransition>
            </section>

            <Footer />
          </div>
        </div>
      </motion.main>
    </SmoothScrollProvider>
  )
}
