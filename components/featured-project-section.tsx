"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function FeaturedProject() {
  const projects = [
    {
      id: "sylvan",
      title: "Sylvan",
      funding: "$2M Pre Seed",
      image: "/images/sylvan-featured.gif",
      alt: "Sylvan - Revenue intelligence platform",
      description: "Sylvan helps teams understand what actually drives revenue by making customer data simple to read. Most analytics tools bury you in reports and slow dashboards. Sylvan cuts through that.",
      sections: [
        {
          title: "The Challenge",
          content: "Revenue teams need to spot the small changes in customer behavior that matter. The problem is most platforms make this harder, not easier. We needed to build an identity that felt like the opposite of cluttered analytics tools.",
        },
        {
          title: "What We Built",
          content: "We created the signal mark—a visual system that shows how customer actions create patterns over time. It shifts and adapts, kind of like how real opportunities appear in customer journeys. The mark became the core of Sylvan's identity.",
        },
        {
          title: "The Approach",
          content: "Keep it simple but make it mean something. The identity had to communicate clarity without feeling cold or technical. Every piece of the system reinforces the idea that Sylvan turns noise into signal.",
        },
      ],
      role: "Brand Design, Logo Design, Web Design, Visual System",
      link: "https://sylvanlabs.com",
    },
    {
      id: "chessever",
      title: "ChessEver",
      funding: null,
      image: "/images/chessever-featured.png",
      alt: "ChessEver - Real-time chess tournament tracking",
      description: "ChessEver is a mobile app that lets you follow professional chess tournaments and players in real time. With FollowChess gone, there was no simple way to track live games, standings, and player stats in one place. We built ChessEver to bring that back.",
      sections: [
        {
          title: "The Problem",
          content: "Chess fans had no intuitive way to follow live tournaments. Existing platforms were clunky, outdated, or shut down entirely. Serious players and fans needed something that felt natural. Swipe between games, pin favorites, search any player or event instantly.",
        },
        {
          title: "What We Built",
          content: "We designed the entire product from zero. Clean interface. Real-time game tracking. Engine evaluation. Complete player stats and head-to-head records. Everything works exactly how you'd expect it to. No learning curve.",
        },
        {
          title: "The Approach",
          content: "Built for devotion, not casual fans. Every feature had to earn its place. We focused on the core experience first. Watching games unfold with precision, following your favorite players, curating your own feed. The app had to feel effortless.",
        },
        {
          title: "The Impact",
          content: "Launched on iOS and Android. Averaging 200+ sign-ups daily since launch. Selected as Top 10 finalist in TWIST Gamma Pitch Deck Competition. Growing Discord community. We're still actively building, refining based on user feedback, and shipping new features to make ChessEver the definitive platform for following chess.",
        },
      ],
      role: "0-1 Product Experience",
      links: [
        { text: "Website", url: "https://chessever.com" },
        { text: "iOS", url: "https://apps.apple.com/app/chessever" },
        { text: "Android", url: "https://play.google.com/store/apps/details?id=com.chessever" },
      ],
    },
  ]

  return (
    <section id="featured" className="py-12 md:py-16 relative">
      <div className="px-4 md:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${index > 0 ? "mt-16 md:mt-20" : ""}`}
          >
            {/* Section Header - Only show for first project */}
            {index === 0 && (
              <div className="relative mb-6 md:mb-10">
                <div className="h-px bg-[#2a2a2a] mb-4 md:mb-6" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 md:w-6 h-px bg-[#404040]" />
                    <span className="font-mono text-[#737373] text-xs md:text-sm font-medium">featured projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
                    <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
                  </div>
                </div>
              </div>
            )}

            {/* Project Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative"
            >
              <div className="md:pl-6">
                {/* Featured Image */}
                <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
                  <div className="relative w-full aspect-video md:aspect-[16/9]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

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
                    <h3 className="text-2xl md:text-3xl font-normal text-[#fafafa]">
                      {project.title}
                      {project.funding && <span className="text-[#737373]"> ({project.funding})</span>}
                    </h3>

                    <div className="space-y-4 text-base text-[#a1a1a1] leading-relaxed">
                      <p>{project.description}</p>

                      <div className="space-y-3 pt-2">
                        {project.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-[#fafafa] font-medium mb-2">{section.title}</h4>
                            <p>{section.content}</p>
                          </div>
                        ))}

                        <div className="pt-2">
                          <p className="text-sm text-[#737373]">
                            <span className="text-[#fafafa] font-medium">Role:</span> {project.role}
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
                    className="pt-4 flex items-center gap-4"
                  >
                    {project.links ? (
                      project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#fafafa] hover:text-white transition-colors duration-300"
                        >
                          {link.text}
                          <ExternalLink className="w-4 h-4 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                        </a>
                      ))
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#fafafa] hover:text-white transition-colors duration-300"
                      >
                        View Live Website
                        <ExternalLink className="w-4 h-4 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Footer divider */}
            {index < projects.length - 1 && (
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
            )}
          </motion.div>
        ))}

        {/* Final divider */}
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
