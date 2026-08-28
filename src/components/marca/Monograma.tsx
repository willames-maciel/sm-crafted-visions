import { cn } from "@/lib/utils";

/** Monograma geométrico "SM" da Marcenaria São Mateus. */
export function Monograma({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Monograma SM da Marcenaria São Mateus"
      className={cn("h-10 w-10", className)}
      fill="none"
    >
      <rect x="1.5" y="1.5" width="61" height="61" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 40.5c1.8 2.4 4.4 3.6 7.8 3.6 3.9 0 6.4-1.9 6.4-4.8 0-2.6-1.7-4-5.7-5.2l-2.6-.8c-4.4-1.3-6.6-3.6-6.6-7.2 0-4.6 3.7-7.6 9.2-7.6 3.4 0 6.1 1 8.1 3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M35 44V20l7.5 13.5L50 20v24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
