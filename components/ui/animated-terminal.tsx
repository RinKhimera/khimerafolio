"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

// ── Animation variants ──

const lineVariants: Variants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

// ── AnimatedSpan: fades in as part of stagger sequence ──

type AnimatedSpanProps = {
  children?: React.ReactNode
  className?: string
}

export const AnimatedSpan = ({ children, className }: AnimatedSpanProps) => {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return (
      <div className={cn("text-sm font-normal tracking-tight", className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={lineVariants}
      className={cn("text-sm font-normal tracking-tight", className)}
    >
      {children}
    </motion.div>
  )
}

// ── TypingAnimation: types a plain string char by char ──

type TypingAnimationProps = {
  children: string
  className?: string
  duration?: number
}

export const TypingAnimation = ({
  children,
  className,
  duration = 40,
}: TypingAnimationProps) => {
  const shouldReduce = useReducedMotion()
  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (shouldReduce) return
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, duration)
    return () => clearInterval(interval)
  }, [children, duration, started, shouldReduce])

  if (shouldReduce) {
    return (
      <div className={cn("text-sm font-normal tracking-tight", className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={lineVariants}
      className={cn("text-sm font-normal tracking-tight", className)}
      onAnimationStart={() => setStarted(true)}
    >
      {displayedText}
      {started && displayedText.length < children.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-emerald-400"
        />
      )}
    </motion.div>
  )
}

// ── Terminal with file tabs ──

type TerminalTab = {
  filename: string
  content: React.ReactNode
}

type TerminalProps = {
  tabs: TerminalTab[]
  className?: string
  startDelay?: number
  stagger?: number
}

export const Terminal = ({
  tabs,
  className,
  startDelay = 0.6,
  stagger = 0.08,
}: TerminalProps) => {
  const shouldReduce = useReducedMotion()
  const [activeTab, setActiveTab] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const handleTabChange = (index: number) => {
    if (index === activeTab) return
    setActiveTab(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/8 bg-[#0d1117] shadow-2xl shadow-black/40",
        className,
      )}
    >
      {/* Title bar with file tabs */}
      <div className="border-b border-white/6">
        <div className="flex items-center gap-2 px-4 pt-3 pb-0">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
        </div>
        <div className="mt-3 flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.filename}
              onClick={() => handleTabChange(index)}
              className={cn(
                "relative cursor-pointer border-r border-white/6 px-4 py-2 font-mono text-xs transition-colors",
                index === activeTab
                  ? "bg-[#161b22] text-white/70"
                  : "text-white/30 hover:text-white/50",
              )}
            >
              {tab.filename}
              {index === activeTab && (
                <motion.div
                  layoutId="terminal-tab-indicator"
                  className="absolute inset-x-0 top-0 h-px bg-emerald-400/60"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Code area */}
      <pre className="overflow-auto p-5">
        {shouldReduce ? (
          <code className="grid gap-y-0.5">{tabs[activeTab].content}</code>
        ) : (
          <motion.code
            key={`${activeTab}-${animationKey}`}
            className="grid gap-y-0.5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: animationKey === 0 ? startDelay : 0.1,
                  staggerChildren: stagger,
                },
              },
            }}
          >
            {tabs[activeTab].content}
          </motion.code>
        )}
      </pre>

      {/* Cursor */}
      <div className="px-5 pb-4">
        {shouldReduce ? (
          <span className="inline-block h-4 w-2 bg-emerald-400/80" />
        ) : (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block h-4 w-2 bg-emerald-400/80"
          />
        )}
      </div>
    </div>
  )
}
