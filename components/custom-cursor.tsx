"use client"

import { useEffect } from "react"
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion"

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const dotScale = useMotionValue(1)
  const outlineScaleX = useMotionValue(1)
  const outlineScaleY = useMotionValue(1)
  const cursorOpacity = useMotionValue(1)

  // Dot tracks instantly, offset by half its size (4px)
  const dotX = useTransform(mouseX, (v) => v - 4)
  const dotY = useTransform(mouseY, (v) => v - 4)

  // Outline springs behind the mouse, offset by half its size (16px)
  const springX = useSpring(mouseX, { stiffness: 220, damping: 30, mass: 0.4 })
  const springY = useSpring(mouseY, { stiffness: 220, damping: 30, mass: 0.4 })
  const outlineX = useTransform(springX, (v) => v - 16)
  const outlineY = useTransform(springY, (v) => v - 16)

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const onLeave = () => cursorOpacity.set(0)
    const onEnter = () => cursorOpacity.set(1)
    const onDown = () => { dotScale.set(0.5); outlineScaleX.set(0.7); outlineScaleY.set(0.7) }
    const onUp = () => { dotScale.set(1); outlineScaleX.set(1); outlineScaleY.set(1) }

    const onLinkEnter = () => { dotScale.set(2.5); outlineScaleX.set(1.4); outlineScaleY.set(1.4) }
    const onLinkLeave = () => { dotScale.set(1); outlineScaleX.set(1); outlineScaleY.set(1) }
    const onIframeEnter = () => cursorOpacity.set(0)
    const onIframeLeave = () => cursorOpacity.set(1)

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)

    const attach = () => {
      document.querySelectorAll<Element>("a, button, [role='button']").forEach((el) => {
        if (el.getAttribute("data-c")) return
        el.setAttribute("data-c", "1")
        el.addEventListener("mouseenter", onLinkEnter, { passive: true })
        el.addEventListener("mouseleave", onLinkLeave, { passive: true })
      })
      document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((el) => {
        if (el.getAttribute("data-c")) return
        el.setAttribute("data-c", "1")
        el.addEventListener("mouseenter", onIframeEnter, { passive: true })
        el.addEventListener("mouseleave", onIframeLeave, { passive: true })
      })
    }

    attach()
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      observer.disconnect()
    }
  }, [mouseX, mouseY, dotScale, outlineScaleX, outlineScaleY, cursorOpacity])

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, scale: dotScale, opacity: cursorOpacity }}
      />
      <motion.div
        className="cursor-outline"
        style={{ x: outlineX, y: outlineY, scaleX: outlineScaleX, scaleY: outlineScaleY, opacity: cursorOpacity }}
      />
    </>
  )
}
