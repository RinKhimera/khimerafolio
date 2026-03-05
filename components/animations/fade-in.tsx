"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) => {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
