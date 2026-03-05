---
paths:
  - "components/animations/**"
  - "components/ui/animated-*"
  - "components/sections/**"
---

# Motion Animation Patterns

## Use `staggerChildren`, not custom context sequencing

Custom `useEffect` + `useContext` sequencing breaks under React 19 batching — all children fire simultaneously. Use motion's native `staggerChildren`/`delayChildren` on the parent `motion.*` element instead.

```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
  }}
>
  {/* children use variants={{ hidden: {...}, visible: {...} }} */}
</motion.div>
```

## Avoid `grid` class on motion containers with inline children

`motion.div` with Tailwind `grid` turns child `<span>` elements into grid items, stacking them vertically. Use plain `motion.div` (block) and keep inline spans flowing naturally.

## `useInView` fails on elements hidden by ScrollReveal

An element with `opacity: 0` (from a parent `ScrollReveal` animation) won't trigger `useInView`. Use a fixed `delayChildren` timeout instead to account for the reveal animation.

## Use `onAnimationStart` for side effects in stagger sequences

To trigger typing effects or other imperative actions when a stagger variant activates, use `onAnimationStart` on the `motion.*` element rather than `useEffect` watching context state.

## `prefers-reduced-motion` with `useReducedMotion()`

All animation components must respect `prefers-reduced-motion`. Import `useReducedMotion` from `"motion/react"` and render a plain `<div>` fallback when true. The CSS fallback in `globals.css` handles non-JS contexts.

```tsx
const shouldReduce = useReducedMotion()
if (shouldReduce) return <div className={className}>{children}</div>
```

For inline `motion.*` usage (e.g., hero), conditionally spread animation props:

```tsx
const entrance = (delay: number) => shouldReduce ? {} : { initial: {...}, animate: {...}, transition: {...} }
<motion.h1 {...entrance(0.3)} className="...">
```

## Tailwind: avoid bare `transition` class

Tailwind's `transition` utility maps to `transition-property: all` — use specific utilities like `transition-colors`, `transition-transform`, or `transition-opacity` instead.

## Tailwind v4 canonical opacity classes

Write `border-white/8` not `border-white/[0.08]`. Tailwind v4 linter enforces canonical shorthand for opacity values.
