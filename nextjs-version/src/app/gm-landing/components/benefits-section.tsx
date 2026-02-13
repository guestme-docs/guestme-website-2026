"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChartPie, BotMessageSquare, Layers, ChartSpline, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const benefits = [
  {
    icon: ChartPie,
    title: 'Unified Sales Overview',
    description:
      'Monitor leads, purchases, and orders in real-time to stay updated on every key business metric. This ensures you have the latest insights to make informed decisions.',
    lightImage: `${basePath}/images/benefits/image-01.webp`,
    darkImage: `${basePath}/images/benefits/image-01-dark.webp`,
  },
  {
    icon: BotMessageSquare,
    title: 'Automated Follow-Ups',
    description:
      'Let smart reminders handle repetitive tasks, allowing you to concentrate on closing more deals rather than managing them. This way, you can maximise your productivity and achieve better results.',
    lightImage: `${basePath}/images/benefits/image-02.webp`,
    darkImage: `${basePath}/images/benefits/image-02-dark.webp`,
  },
  {
    icon: Layers,
    title: 'Clean & Simple Workflow',
    description:
      'Move deals effortlessly through stages with our intuitive pipeline system designed for clarity and control. This system ensures that you always have a clear view of your progress.',
    lightImage: `${basePath}/images/benefits/image-03.webp`,
    darkImage: `${basePath}/images/benefits/image-03-dark.webp`,
  },
  {
    icon: ChartSpline,
    title: 'Instant Performance Insights',
    description:
      'Get accurate reports and analytics that help you understand growth patterns and make confident decisions. These insights empower you to strategies effectively for future success.',
    lightImage: `${basePath}/images/benefits/image-04.webp`,
    darkImage: `${basePath}/images/benefits/image-04-dark.webp`,
  },
]

function DiamondSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      className={className}
    >
      <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="var(--primary)" />
    </svg>
  )
}

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemStyles, setItemStyles] = useState<{ opacity: number; translateY: number }[]>(
    benefits.map((_, i) => ({ opacity: i === 0 ? 1 : 0.3, translateY: i === 0 ? 0 : -30 }))
  )

  useEffect(() => {
    const handleScroll = () => {
      const items = textItemsRef.current
      if (!items.length) return

      let closestIndex = 0
      let closestDistance = Infinity

      const newStyles = items.map((item, i) => {
        if (!item) return { opacity: 0.3, translateY: -30 }

        const rect = item.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const itemCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - itemCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }

        // Calculate opacity and translateY based on distance from viewport center
        const maxDistance = window.innerHeight * 0.6
        const normalizedDistance = Math.min(distance / maxDistance, 1)
        const opacity = 1 - normalizedDistance * 0.7
        const translateY = normalizedDistance * -30

        return { opacity: Math.max(0.3, opacity), translateY }
      })

      setActiveIndex(closestIndex)
      setItemStyles(newStyles)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="benefits" className="py-8 sm:py-16 lg:py-24">
      {/* Section Header */}
      <div className="mb-12 space-y-4 text-center max-md:px-4 sm:mb-16 lg:mb-24">
        <p className="text-primary text-sm font-medium uppercase">Benefits</p>
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          How Flow Helps You
        </h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          It&apos;s built to simplify your sales process and keep everything easy to manage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="relative isolate w-fit overflow-hidden rounded-lg ring-2 ring-primary/60">
            <Button asChild size="lg" className="animated-border-btn relative rounded-lg border border-transparent bg-clip-padding text-base cursor-pointer">
              <a href="#">
                Start building now
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="relative isolate w-fit overflow-hidden rounded-lg ring-2 ring-secondary/60">
            <Button asChild variant="secondary" size="lg" className="animated-border-btn relative rounded-lg border border-transparent bg-clip-padding text-base cursor-pointer">
              <a href="#">Learn more</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block" ref={sectionRef}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: Text items */}
          <div className="relative w-full space-y-20 px-6 py-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => { textItemsRef.current[index] = el }}
                className="flex h-125 items-center justify-center"
                style={{
                  opacity: itemStyles[index]?.opacity ?? 0.3,
                  transform: `translateY(${itemStyles[index]?.translateY ?? -30}px)`,
                  transition: 'opacity 0.3s, transform 0.3s',
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 [&>svg]:size-7">
                    <benefit.icon aria-hidden="true" />
                    <div className="font-medium md:text-2xl xl:text-3xl">
                      {benefit.title}
                    </div>
                  </div>
                  <div className="text-muted-foreground">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky image panel */}
          <div className="bg-muted relative w-full items-center justify-center space-y-20 px-6 py-20">
            <div className="bg-card sticky top-[calc(50vh-250px)] flex h-125 items-center justify-center overflow-hidden rounded-xl border">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center px-3"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s',
                  }}
                >
                  <img
                    src={benefit.lightImage}
                    alt={benefit.title}
                    className="h-full w-full max-w-110 object-contain md:max-h-95 dark:hidden"
                  />
                  <img
                    src={benefit.darkImage}
                    alt={benefit.title}
                    className="hidden h-full w-full max-w-110 object-contain md:max-h-95 dark:inline-block"
                  />
                </div>
              ))}
              {/* Diamond decorations */}
              <DiamondSvg className="absolute top-4.5 left-4.5" />
              <DiamondSvg className="absolute top-4.5 right-4.5" />
              <DiamondSvg className="absolute bottom-4.5 left-4.5" />
              <DiamondSvg className="absolute bottom-4.5 right-4.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-16 md:hidden">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-16">
            <div className="bg-muted relative px-6 py-20">
              <div className="bg-card sticky top-20 flex h-87.5 items-center justify-center overflow-hidden rounded-xl border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={benefit.lightImage}
                    alt={benefit.title}
                    className="size-full max-h-70 max-w-96 object-contain max-sm:max-w-70 dark:hidden"
                  />
                  <img
                    src={benefit.darkImage}
                    alt={benefit.title}
                    className="hidden size-full max-h-70 max-w-96 object-contain max-sm:max-w-70 dark:inline-block"
                  />
                </div>
                <DiamondSvg className="absolute top-4.5 left-4.5" />
                <DiamondSvg className="absolute top-4.5 right-4.5" />
                <DiamondSvg className="absolute bottom-4.5 left-4.5" />
                <DiamondSvg className="absolute bottom-4.5 right-4.5" />
              </div>
            </div>
            <div className="space-y-4 max-md:px-4">
              <div className="flex items-center gap-4 [&>svg]:size-5">
                <benefit.icon aria-hidden="true" />
                <div className="text-xl font-medium">{benefit.title}</div>
              </div>
              <div className="text-muted-foreground">{benefit.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
