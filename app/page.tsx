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
        className="min-h-screen relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <Navbar />

        {/* Full-width container with centered content and side lines */}
        <div className="relative w-full">
          {/* Left border line - full height */}
          <div 
            className="fixed left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] hidden md:block transform -translate-x-[450px] pointer-events-none"
            aria-hidden="true"
            style={{ 
              height: '100vh',
              transform: 'translateX(calc(-50vw + 450px))'
            }}
          />
          {/* Right border line - full height */}
          <div 
            className="fixed left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] hidden md:block transform translate-x-[450px] pointer-events-none"
            aria-hidden="true"
            style={{ 
              height: '100vh',
              transform: 'translateX(calc(-50vw + 450px + 900px))'
            }}
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
