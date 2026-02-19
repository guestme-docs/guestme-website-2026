"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 35,
  duration = 6,
  colorFrom = "var(--primary)",
  colorTo = "var(--primary)",
  borderWidth = 1,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        "[mask-composite:intersect]",
        "[mask-clip:padding-box,border-box]",
        className
      )}
      style={{
        borderWidth,
        borderStyle: "solid",
        borderColor: "transparent",
      }}
    >
      <div
        className="absolute aspect-square rounded-full"
        style={{
          width: size,
          offsetPath: `rect(0px auto auto 0px round ${size}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          animation: `border-beam ${duration}s linear infinite`,
        }}
      />
    </div>
  )
}
