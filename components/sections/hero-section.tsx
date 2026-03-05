"use client"

import { useTranslations } from "next-intl"
import { motion, useReducedMotion } from "motion/react"
import { ArrowDown } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  const t = useTranslations("Hero")
  const shouldReduce = useReducedMotion()

  const entrance = (delay: number, y = 20) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        }

  return (
    <section
      id="hero"
      className="relative flex min-h-svh scroll-mt-20 flex-col items-center justify-center px-6"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_50%)] opacity-30" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <motion.p
          {...entrance(0.1)}
          className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
        >
          {t("greeting")}
        </motion.p>

        {/* Name */}
        <motion.h1
          {...entrance(0.3, 30)}
          className="font-display mt-4 text-5xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          {t("name")}
        </motion.h1>

        {/* Role */}
        <motion.p
          {...entrance(0.5)}
          className="text-primary mt-4 font-mono text-lg sm:text-xl"
        >
          {t("role")}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...entrance(0.7)}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-base sm:text-lg"
        >
          {t("tagline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...entrance(0.9)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" asChild className="font-medium">
            <Link href="/#projects">{t("cta_projects")}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="font-medium">
            <Link href="/#contact">{t("cta_contact")}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...(shouldReduce
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.3, duration: 0.8 },
            })}
        className="absolute bottom-10"
      >
        <motion.div
          {...(shouldReduce
            ? {}
            : {
                animate: { y: [0, 8, 0] },
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              })}
        >
          <ArrowDown className="text-muted-foreground h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
