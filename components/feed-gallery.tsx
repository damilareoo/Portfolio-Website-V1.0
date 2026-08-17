"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SiteNav } from "@/components/site-nav"

const items = [
  { title: "Sylvan", kind: "Brand / Product", year: "2025", image: "/images/sylvan-hero.gif", href: "/work/sylvan", size: "md:col-span-2 md:row-span-2" },
  { title: "ChessEver", kind: "Product / Interface", year: "2026", image: "/images/chessever-featured.png", href: "/work/chessever", size: "md:col-span-1 md:row-span-2" },
  { title: "Word Ladder", kind: "Playable experiment", year: "2024", image: "/images/word-ladder.png", href: "#", size: "md:col-span-1" },
  { title: "Fact Checker", kind: "Editorial tool", year: "2024", image: "/images/fact-checker.png", href: "#", size: "md:col-span-1" },
  { title: "Wormhole", kind: "Motion study", year: "2023", image: "/images/wormhole.png", href: "#", size: "md:col-span-1" },
  { title: "Car Climate", kind: "Interface study", year: "2023", image: "/images/car-climate.png", href: "#", size: "md:col-span-2" },
]

export function FeedGallery() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav active="Feed" />
      <div className="mx-auto max-w-[1440px] px-4 pb-20 pt-32 md:px-8 md:pt-40">
        <header className="mb-12 flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div><p className="eyebrow mb-5">Index / 02 — Feed</p><h1 className="max-w-3xl text-balance text-5xl font-medium tracking-[-0.06em] md:text-8xl">Things I&apos;ve made, noticed, and kept.</h1></div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">A living index of product work, visual systems, sketches, and small experiments. Move through it slowly.</p>
        </header>
        <div className="grid auto-rows-[minmax(220px,28vw)] grid-cols-1 gap-px bg-border md:grid-cols-4">
          {items.map((item, index) => (
            <Link key={item.title} href={item.href} className={`group relative min-h-[280px] overflow-hidden bg-card ${item.size}`}>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, duration: 0.7 }} className="absolute inset-0">
                <Image src={item.image} alt={`${item.title} project preview`} fill className="object-cover grayscale-[25%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
              </motion.div>
              <div className="relative flex h-full flex-col justify-between p-5 md:p-7"><div className="flex justify-between text-xs uppercase tracking-[0.18em] text-white/70"><span>{item.kind}</span><span>{item.year}</span></div><div className="flex items-end justify-between gap-4"><h2 className="text-2xl tracking-[-0.04em] text-white md:text-4xl">{item.title}</h2><span className="text-lg text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true">↗</span></div></div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground"><span className="inline-flex items-center gap-2"><span aria-hidden="true">+</span> hover / focus to explore</span><span>06 objects / ongoing</span></div>
      </div>
    </main>
  )
}
