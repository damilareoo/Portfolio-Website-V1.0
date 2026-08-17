"use client"

import { useState } from "react"

export function Halftone() {
  const [active, setActive] = useState(false)
  return <button type="button" aria-label="Interact with the halftone pattern" onClick={() => setActive((value) => !value)} onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--x", `${((event.clientX - rect.left) / rect.width) * 30}px`); event.currentTarget.style.setProperty("--y", `${((event.clientY - rect.top) / rect.height) * 30}px`) }} className={`halftone ${active ? "halftone-active" : ""}`}><span className="sr-only">{active ? "Halftone activated" : "Activate halftone"}</span></button>
}
