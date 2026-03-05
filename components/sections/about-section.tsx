"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/animated-terminal"
import { FileDown } from "lucide-react"

// ── Syntax color classes ──

const kw = "text-violet-400"
const fn = "text-blue-300"
const key = "text-emerald-300"
const str = "text-amber-200"
const num = "text-orange-300"
const punc = "text-slate-500"
const tp = "text-cyan-300"
const brace = "text-yellow-300"

// ── Tab 1: Arrow function export ──

const ConfigTab = () => (
  <>
    <TypingAnimation className={punc}>{"// samuel.config.ts"}</TypingAnimation>

    <AnimatedSpan>
      <span className={kw}>const</span>{" "}
      <span className={fn}>createDeveloper</span>{" "}
      <span className={punc}>=</span> <span className={punc}>()</span>{" "}
      <span className={kw}>{"=>"}</span> <span className={brace}>{"({"}</span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>location</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"Quebec, CA"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>experience</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"7 years"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>focus</span>
        <span className={punc}>:</span> <span className={brace}>{"["}</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={str}>{'"Product architecture"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={str}>{'"Web performance"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={str}>{'"Clean abstractions"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={brace}>{"]"}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>stack</span>
        <span className={punc}>:</span> <span className={brace}>{"["}</span>
        <span className={str}>{'"Next.js"'}</span>
        <span className={punc}>,</span> <span className={str}>{'"React"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"TypeScript"'}</span>
        <span className={brace}>{"]"}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>status</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"available"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>coffee</span>
        <span className={punc}>:</span> <span className={num}>Infinity</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className={brace}>{"})"}</span>
      <span className={punc}>;</span>
    </AnimatedSpan>

    <AnimatedSpan className="h-4" />

    <TypingAnimation className={punc}>
      {"export default createDeveloper();"}
    </TypingAnimation>
  </>
)

// ── Tab 2: Type + satisfies ──

const TypeTab = () => (
  <>
    <TypingAnimation className={punc}>{"// developer.d.ts"}</TypingAnimation>

    <AnimatedSpan>
      <span className={kw}>type</span> <span className={tp}>Developer</span>{" "}
      <span className={punc}>=</span> <span className={brace}>{"{"}</span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>location</span>
        <span className={punc}>:</span> <span className={tp}>string</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>experience</span>
        <span className={punc}>:</span>{" "}
        <span className={tp}>{"`${number} years`"}</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>focus</span>
        <span className={punc}>:</span> <span className={kw}>readonly</span>{" "}
        <span className={tp}>string[]</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>stack</span>
        <span className={punc}>:</span> <span className={kw}>readonly</span>{" "}
        <span className={tp}>string[]</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>status</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"available"'}</span>{" "}
        <span className={punc}>|</span> <span className={str}>{'"busy"'}</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className={brace}>{"}"}</span>
      <span className={punc}>;</span>
    </AnimatedSpan>

    <AnimatedSpan className="h-4" />

    <AnimatedSpan>
      <span className={kw}>export default</span>{" "}
      <span className={brace}>{"{"}</span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>location</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"Quebec, CA"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>experience</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"7 years"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>stack</span>
        <span className={punc}>:</span> <span className={brace}>{"["}</span>
        <span className={str}>{'"Next.js"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"Convex"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"Stripe"'}</span>
        <span className={brace}>{"]"}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={key}>status</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"available"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <TypingAnimation className={punc}>
      {"} satisfies Developer;"}
    </TypingAnimation>
  </>
)

// ── Tab 3: Async init pattern ──

const InitTab = () => (
  <>
    <TypingAnimation className={punc}>{"// samuel.init.ts"}</TypingAnimation>

    <AnimatedSpan>
      <span className={kw}>const</span> <span className={fn}>init</span>{" "}
      <span className={punc}>=</span> <span className={kw}>async</span>{" "}
      <span className={punc}>()</span> <span className={kw}>{"=>"}</span>{" "}
      <span className={brace}>{"{"}</span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={kw}>const</span> <span className={fn}>dev</span>{" "}
        <span className={punc}>=</span> <span className={kw}>await</span>{" "}
        <span className={fn}>loadProfile</span>
        <span className={punc}>(</span>
        <span className={brace}>{"{"}</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={key}>location</span>
        <span className={punc}>:</span>{" "}
        <span className={str}>{'"Quebec, CA"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={key}>experience</span>
        <span className={punc}>:</span> <span className={num}>7</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={key}>focus</span>
        <span className={punc}>:</span> <span className={brace}>{"["}</span>
        <span className={str}>{'"Architecture"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"Performance"'}</span>
        <span className={brace}>{"]"}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={brace}>{"}"}</span>
        <span className={punc}>);</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan className="h-4" />

    <AnimatedSpan>
      <span className="pl-4">
        <span className={fn}>dev</span>
        <span className={punc}>.</span>
        <span className={fn}>equip</span>
        <span className={punc}>(</span>
        <span className={brace}>{"["}</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={str}>{'"Next.js"'}</span>
        <span className={punc}>,</span> <span className={str}>{'"React"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"TypeScript"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-8">
        <span className={str}>{'"Convex"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"Tailwind"'}</span>
        <span className={punc}>,</span>{" "}
        <span className={str}>{'"Stripe"'}</span>
        <span className={punc}>,</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={brace}>{"]"}</span>
        <span className={punc}>);</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan className="h-4" />

    <AnimatedSpan>
      <span className="pl-4">
        <span className={fn}>dev</span>
        <span className={punc}>.</span>
        <span className={key}>status</span> <span className={punc}>=</span>{" "}
        <span className={str}>{'"available"'}</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className="pl-4">
        <span className={fn}>dev</span>
        <span className={punc}>.</span>
        <span className={key}>coffee</span> <span className={punc}>=</span>{" "}
        <span className={num}>Infinity</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan className="h-4" />

    <AnimatedSpan>
      <span className="pl-4">
        <span className={kw}>return</span> <span className={fn}>dev</span>
        <span className={punc}>;</span>
      </span>
    </AnimatedSpan>

    <AnimatedSpan>
      <span className={brace}>{"}"}</span>
      <span className={punc}>;</span>
    </AnimatedSpan>

    <TypingAnimation className={punc}>
      {"export default init();"}
    </TypingAnimation>
  </>
)

// ── Terminal tabs config ──

const terminalTabs = [
  { filename: "samuel.config.ts", content: <ConfigTab /> },
  { filename: "developer.d.ts", content: <TypeTab /> },
  { filename: "samuel.init.ts", content: <InitTab /> },
]

// ── About Section ──

export const AboutSection = () => {
  const t = useTranslations("About")

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Text content */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              <p className="text-foreground text-base leading-relaxed sm:text-lg">
                {t("p1")}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                {t("p2")}
              </p>
              <p className="text-muted-foreground text-sm font-medium tracking-wide sm:text-base">
                {t("p3")}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                {t("p4")}
              </p>
              <div className="pt-2">
                <Button variant="outline" className="gap-2" asChild>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileDown aria-hidden="true" className="h-4 w-4" />
                    {t("resume")}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Animated terminal */}
          <ScrollReveal delay={0.2}>
            <Terminal tabs={terminalTabs} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
