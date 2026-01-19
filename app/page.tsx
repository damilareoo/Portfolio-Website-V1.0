"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
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
        className="min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <Navbar />

        <div className="grid-container relative">
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a2a] hidden md:block" aria-hidden="true" />
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-[#2a2a2a] hidden md:block" aria-hidden="true" />

          <section id="hero" aria-label="Hero section">
            <SectionTransition id="hero">
              <HeroSection />
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
      </motion.main>
    </SmoothScrollProvider>
  )
}
