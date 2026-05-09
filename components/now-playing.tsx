"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface NowPlayingData {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumArt?: string
  songUrl?: string
}

const EQ_BARS = [
  { delay: 0,    seq: ["2px", "10px", "4px", "8px",  "2px"] },
  { delay: 0.14, seq: ["6px", "2px",  "11px","3px",  "7px"] },
  { delay: 0.07, seq: ["9px", "4px",  "2px", "10px", "4px"] },
]

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null)

  useEffect(() => {
    const fetch_ = async () => {
      try {
        const res = await fetch("/api/now-playing")
        setData(await res.json())
      } catch { /* silent */ }
    }
    fetch_()
    const t = setInterval(fetch_, 30_000)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      style={{
        width: "300px",
        background: "#0d0d0d",
        border: "1px solid #2a2a2a",
        borderRadius: "4px",
      }}
    >
      {/* Label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: "1px solid #1e1e1e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {data?.isPlaying ? (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "2.5px", height: "12px" }}>
              {EQ_BARS.map((bar, i) => (
                <motion.div
                  key={i}
                  style={{ width: "2.5px", borderRadius: "1px", background: "#1DB954" }}
                  animate={{ height: bar.seq }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: bar.delay, ease: "easeInOut", repeatType: "mirror" }}
                />
              ))}
            </div>
          ) : (
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#333" }} />
          )}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: data?.isPlaying ? "#1DB954" : "#444",
            }}
          >
            {data?.isPlaying ? "now playing" : "not playing"}
          </span>
        </div>

        {/* Spotify logo mark */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#333">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {data?.isPlaying ? (
          <motion.a
            key="playing"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 14px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            className="group"
          >
            {/* Left green bar */}
            <div style={{ width: "2px", height: "40px", background: "#1DB954", borderRadius: "1px", flexShrink: 0 }} />

            {/* Album art */}
            {data.albumArt && (
              <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0, border: "1px solid #2a2a2a" }}>
                <Image src={data.albumArt} alt="" fill style={{ objectFit: "cover" }} unoptimized />
              </div>
            )}

            {/* Track info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#fafafa",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.3,
                marginBottom: "3px",
              }}>
                {data.title}
              </div>
              <div style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "#737373",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                letterSpacing: "0.02em",
              }}>
                {data.artist}
              </div>
            </div>

            <ArrowUpRight
              size={14}
              style={{ color: "#525252", flexShrink: 0, transition: "color 0.2s" }}
              className="group-hover:text-[#fafafa]"
            />
          </motion.a>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div style={{ width: "2px", height: "32px", background: "#1e1e1e", borderRadius: "1px", flexShrink: 0 }} />
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#444", letterSpacing: "0.04em" }}>
              offline
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
