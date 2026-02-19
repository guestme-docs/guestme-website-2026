"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  className?: string
  cellSize?: number
  columns?: number
  rows?: number
}

export function GridPattern({
  className,
  cellSize = 57,
  columns = 27,
  rows = 8,
}: GridPatternProps) {
  const totalCells = columns * rows

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:color-mix(in_oklab,var(--accent),black_10%)]",
        "[--cell-fill-color:var(--accent)]",
        "[--cell-shadow-color:color-mix(in_oklab,var(--accent),black_43%)]",
        "dark:[--cell-border-color:color-mix(in_oklab,var(--accent),white_14%)]",
        "dark:[--cell-fill-color:color-mix(in_oklab,var(--accent),black_22%)]",
        "dark:[--cell-shadow-color:var(--accent)]",
        className
      )}
    >
      <div className="relative flex h-auto w-auto justify-center overflow-hidden">
        <div
          className="relative [mask-image:radial-gradient(at_50%_0%,#000_20%,transparent)]"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
            width: columns * cellSize,
            height: rows * cellSize,
            marginInline: "auto",
          }}
        >
          {Array.from({ length: totalCells }).map((_, i) => (
            <div
              key={i}
              className="relative border-[0.5px] opacity-40 transition-all duration-150 will-change-transform hover:opacity-60 hover:brightness-95 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset] dark:hover:opacity-90"
              style={{
                backgroundColor: "var(--cell-fill-color)",
                borderColor: "var(--cell-border-color)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
