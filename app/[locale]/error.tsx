"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, useReducedMotion } from "motion/react"
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const t = useTranslations("Error")
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    console.error(error)
  }, [error])

  const entrance = (delay: number, y = 20) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        }

  return (
    <section className="relative flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_50%)] opacity-30" />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Giant alert icon — architectural background element */}
        <motion.div
          {...(shouldReduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
              })}
          aria-hidden="true"
          className="pointer-events-none flex items-center justify-center select-none"
        >
          <AlertTriangle
            className="text-primary size-40 opacity-[0.08] sm:size-56 lg:size-72"
            strokeWidth={1}
          />
        </motion.div>

        {/* Content — overlaps the icon via negative margin */}
        <div className="-mt-16 sm:-mt-20 lg:-mt-24">
          {/* Decorative dash */}
          <motion.div
            {...entrance(0.2)}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="bg-primary/40 h-px w-8" />
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
              error
            </span>
            <span className="bg-primary/40 h-px w-8" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...entrance(0.35, 30)}
            className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            {t("title")}
            <span className="text-primary">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...entrance(0.5)}
            className="text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed sm:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...entrance(0.65)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={reset}
              className="font-medium"
            >
              <RefreshCw aria-hidden="true" className="size-4" />
              {t("tryAgain")}
            </Button>
            <Button size="lg" asChild className="font-medium">
              <Link href="/">
                <ArrowLeft aria-hidden="true" className="size-4" />
                {t("backToHome")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
