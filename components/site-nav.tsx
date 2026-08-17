"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function SiteNav({ active }: { active?: string }) {
  const { theme, setTheme } = useTheme()
  const links = [["Home", "/"], ["Feed", "/feed"], ["About", "/about"], ["Colophon", "/colophon"]]
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8"><Link href="/" className="font-mono text-xs uppercase tracking-[0.22em]">DO<span className="text-muted-foreground">/26</span></Link><nav className="flex items-center gap-1 rounded-full border border-border p-1" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={label} href={href} className={`rounded-full px-3 py-1.5 text-xs transition ${active === label ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>{label}</Link>)}</nav><button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground" aria-label="Toggle theme">{theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}</button></div></header>
}
