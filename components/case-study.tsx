"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { Halftone } from "@/components/halftone"

export type CaseStudyData = { title: string; kicker: string; summary: string; hero: string; role: string; year: string; sections: { title: string; body: string }[]; links: { label: string; href: string }[] }

export function CaseStudy({ data }: { data: CaseStudyData }) {
  return <main className="min-h-screen bg-background text-foreground"><SiteNav /><div className="mx-auto max-w-[1440px] px-4 pb-24 pt-32 md:px-8 md:pt-40"><Link href="/feed" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3" aria-hidden="true" /> Back to feed</Link><header className="mt-14 grid gap-10 border-b border-border pb-12 md:grid-cols-[1.4fr_0.6fr]"><div><p className="eyebrow mb-6">{data.kicker}</p><h1 className="text-7xl font-medium tracking-[-0.08em] md:text-[10rem]">{data.title}</h1><p className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground">{data.summary}</p></div><dl className="grid self-end grid-cols-2 gap-5 text-sm text-muted-foreground"><div><dt className="eyebrow mb-2">Year</dt><dd>{data.year}</dd></div><div><dt className="eyebrow mb-2">Role</dt><dd>{data.role}</dd></div></dl></header><div className="relative mt-8 aspect-[16/8] overflow-hidden bg-card"><Image src={data.hero} alt={`${data.title} case study hero`} fill className="object-cover" priority sizes="100vw" /><Halftone /></div><div className="mt-20 grid gap-12 md:grid-cols-[0.7fr_1.3fr]"><p className="eyebrow">Selected notes</p><div className="flex flex-col gap-16">{data.sections.map((section) => <section key={section.title} className="grid gap-5 border-t border-border pt-5 md:grid-cols-[0.35fr_1fr]"><h2 className="text-xl">{section.title}</h2><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{section.body}</p></section>)}<div className="flex flex-wrap gap-6 border-t border-border pt-6">{data.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-foreground pb-1">{link.label}<ArrowUpRight className="size-4" aria-hidden="true" /></a>)}</div></div></div></div></main>
}
