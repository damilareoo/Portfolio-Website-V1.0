"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    // Never show on touch/stylus devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return
    setActive(true)

    let mx = -200, my = -200
    let rx = -200, ry = -200
    let raf = 0

    // Dot: update directly in mousemove (true zero-lag)
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      const d = dotRef.current
      if (d) d.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }

    // Outline: smooth lerp in RAF
    const loop = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      const r = ringRef.current
      if (r) r.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }

    const hide = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0"
      if (ringRef.current) ringRef.current.style.opacity = "0"
    }
    const show = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1"
      if (ringRef.current) ringRef.current.style.opacity = "1"
    }

    // Attach interactive element listeners
    const seen = new WeakSet<Element>()
    const attachAll = () => {
      document.querySelectorAll<Element>("a, button, [role='button'], input, textarea, select").forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        el.addEventListener("mouseenter", () => {
          const d = dotRef.current
          const r = ringRef.current
          if (d) { d.style.width = "14px"; d.style.height = "14px" }
          if (r) { r.style.transform += " scale(1.4)" }
        }, { passive: true })
        el.addEventListener("mouseleave", () => {
          const d = dotRef.current
          if (d) { d.style.width = "8px"; d.style.height = "8px" }
        }, { passive: true })
      })
      document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        el.addEventListener("mouseenter", hide, { passive: true })
        el.addEventListener("mouseleave", show, { passive: true })
      })
    }

    attachAll()
    const observer = new MutationObserver(attachAll)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", hide)
    document.addEventListener("mouseenter", show)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", hide)
      document.removeEventListener("mouseenter", show)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  if (!active) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "#e8e8e8",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-200px,-200px) translate(-50%,-50%)",
          transition: "width 0.15s, height 0.15s, opacity 0.2s",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-200px,-200px) translate(-50%,-50%)",
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
    </>
  )
}
