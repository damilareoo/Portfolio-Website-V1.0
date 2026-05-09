"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NowPlayingData {
  isPlaying: boolean
  title?: string
  artist?: string
  songUrl?: string
}

function getTrackId(songUrl: string): string {
  const match = songUrl.match(/track\/([a-zA-Z0-9]+)/)
  return match ? match[1] : ""
}

function embedUrl(trackId: string) {
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`
}

const EQ = [
  { delay: 0,    h: ["2px","11px","4px","9px","2px"] },
  { delay: 0.13, h: ["7px","2px","13px","3px","8px"] },
  { delay: 0.07, h: ["10px","5px","2px","12px","4px"] },
]

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return (
    <div
      style={{
        position: "absolute",
        top: pos.startsWith("t") ? -1 : "auto",
        bottom: pos.startsWith("b") ? -1 : "auto",
        left: pos.endsWith("l") ? -1 : "auto",
        right: pos.endsWith("r") ? -1 : "auto",
        width: 8,
        height: 8,
        borderTop: pos.startsWith("t") ? "1px solid #2a2a2a" : undefined,
        borderBottom: pos.startsWith("b") ? "1px solid #2a2a2a" : undefined,
        borderLeft: pos.endsWith("l") ? "1px solid #2a2a2a" : undefined,
        borderRight: pos.endsWith("r") ? "1px solid #2a2a2a" : undefined,
      }}
    />
  )
}

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: "no-store" })
        const json: NowPlayingData = await res.json()
        setData(json)
      } catch { /* silent */ } finally {
        setLoading(false)
      }
    }
    poll()
    const t = setInterval(poll, 5_000)
    return () => clearInterval(t)
  }, [])

  const isPlaying = !loading && !!data?.isPlaying
  const trackId = isPlaying && data?.songUrl ? getTrackId(data.songUrl) : null

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid #1e1e1e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {(["tl","tr","bl","br"] as const).map(p => <Corner key={p} pos={p} />)}

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 12px",
            borderBottom: isPlaying && trackId ? "1px solid #141414" : undefined,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="eq"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", alignItems: "flex-end", gap: "2.5px", height: "12px" }}
                >
                  {EQ.map((bar, i) => (
                    <motion.div
                      key={i}
                      style={{ width: "2.5px", borderRadius: "1px", background: "#1DB954" }}
                      animate={{ height: bar.h }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: bar.delay, ease: "easeInOut", repeatType: "mirror" }}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="dot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: 5, height: 5, borderRadius: "50%", background: "#555" }}
                />
              )}
            </AnimatePresence>

            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isPlaying ? "#999" : "#666",
                transition: "color 0.3s",
              }}
            >
              {loading ? "loading" : isPlaying ? "now playing" : "not playing"}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AnimatePresence>
              {isPlaying && data?.artist && (
                <motion.span
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "9px",
                    color: "#767676",
                    letterSpacing: "0.04em",
                    maxWidth: "110px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {data.artist}
                </motion.span>
              )}
            </AnimatePresence>

            <svg width="12" height="12" viewBox="0 0 24 24" fill={isPlaying ? "#1DB954" : "#2a2a2a"} style={{ flexShrink: 0, transition: "fill 0.3s" }}>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        </div>

        {/* Iframe — only when actively playing */}
        <AnimatePresence mode="wait">
          {isPlaying && trackId && (
            <motion.div
              key={trackId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={embedUrl(trackId)}
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ display: "block" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Diamond pointer */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
          width: 7,
          height: 7,
          background: "#0a0a0a",
          borderRight: "1px solid #1e1e1e",
          borderBottom: "1px solid #1e1e1e",
        }}
      />
    </div>
  )
}
