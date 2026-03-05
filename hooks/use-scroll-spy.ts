"use client"

import { useEffect, useState } from "react"

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>("")

  // Stabilize dependency: only re-subscribe when the actual IDs change
  const key = sectionIds.join(",")

  useEffect(() => {
    const ids = key.split(",")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [key])

  return activeId
}
