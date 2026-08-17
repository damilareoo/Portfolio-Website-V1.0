"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface NowPlayingData { isPlaying: boolean; title?: string; artist?: string; songUrl?: string }
function getTrackId(songUrl: string) { return songUrl.match(/track\/([a-zA-Z0-9]+)/)?.[1] ?? "" }

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => { let mounted = true; const poll = async () => { try { const response = await fetch("/api/now-playing", { cache: "no-store" }); if (!response.ok) throw new Error("Spotify unavailable"); const json = await response.json(); if (mounted) setData(json) } catch { if (mounted) setData({ isPlaying: false }) } finally { if (mounted) setLoading(false) } }; poll(); const timer = window.setInterval(poll, 15000); return () => { mounted = false; window.clearInterval(timer) } }, [])
  const isPlaying = !loading && data?.isPlaying && Boolean(data.songUrl)
  const trackId = isPlaying ? getTrackId(data.songUrl ?? "") : ""
  return <section aria-label="Soundtrack" className="relative w-full max-w-sm border border-border bg-card p-4"><div className="flex items-center justify-between gap-4"><div><p className="eyebrow mb-2">Soundtrack</p><p className="text-sm">{loading ? "Checking the signal…" : isPlaying ? data?.title : "Quiet for now"}</p>{isPlaying && <p className="mt-1 text-xs text-muted-foreground">{data?.artist}</p>}</div><motion.span animate={isPlaying ? { scale: [1, 1.25, 1] } : { scale: 1 }} transition={{ repeat: Infinity, duration: 1.2 }} className="size-2 rounded-full bg-muted-foreground" aria-hidden="true" /></div>{trackId && <iframe className="mt-4 block w-full" title={`Spotify player for ${data?.title ?? "current track"}`} src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />}</section>
}
