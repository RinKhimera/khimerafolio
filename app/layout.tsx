import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout is intentionally minimal.
// All providers and fonts are in app/[locale]/layout.tsx
export default function RootLayout({ children }: Props) {
  return children;
}
