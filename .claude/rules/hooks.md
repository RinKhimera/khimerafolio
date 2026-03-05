---
paths:
  - "hooks/**"
  - "components/layout/header.tsx"
---

# Hooks Patterns

## Stabilize array dependencies in useEffect

Passing a new array to a custom hook causes `useEffect` to re-run every render (new reference fails `Object.is` check). Two-layer fix:

1. **Inside the hook**: derive a primitive key from the array (`ids.join(",")`) and use that as the effect dependency.
2. **At the call site**: wrap the array in `useMemo` to avoid unnecessary key recomputation.

```tsx
// hook
const key = sectionIds.join(",")
useEffect(() => {
  const ids = key.split(",")
  // ...
}, [key])

// caller
const sectionIds = useMemo(() => navLinks.map((l) => l.key), [])
const activeId = useScrollSpy(sectionIds)
```
