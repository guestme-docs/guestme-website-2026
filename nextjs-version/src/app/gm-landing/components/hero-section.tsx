import Image from 'next/image'
import { ArrowRight, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GridPattern } from '@/components/grid-pattern'
import { BorderBeam } from '@/components/border-beam'

export function HeroSection() {

  return (
    <section id="hero" className="relative px-4 pt-16 pb-8 max-sm:pb-42 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-24">
      {/* Grid Pattern Background */}
      <GridPattern />

      {/* Radial gradient vignette overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-128 bg-[radial-gradient(transparent_20%,var(--background)_90%)]" />

      <div className="space-y-12 sm:space-y-16 lg:space-y-24">
        {/* Text content */}
        <div className="flex flex-col items-center">
          {/* Badge (shadcnstudio style with border beam) */}
          <div className="z-10 max-w-full px-2">
            <Badge variant="outline" className="bg-background relative text-sm font-normal whitespace-normal overflow-visible rounded-full px-3 py-1.5 gap-2">
              <span className="bg-primary text-primary-foreground shrink-0 rounded-full px-2.5 py-0.5">Новое</span>
              <span className="text-sm">Встречайте GuestMe X - большое обновление платформы</span>
              <BorderBeam />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="z-10 text-center text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.025em] [font-variation-settings:'opsz'_90] md:text-[3.75rem] lg:text-[5.625rem] mt-6 sm:mt-8">
            Полная посадка
          </h1>

          {/* Description */}
          <p className="text-muted-foreground z-10 max-w-156 text-center text-xl mt-4">
            Track every key metric in one clean dashboard - no code, no setup,
            just real-time insights that help you grow smarter.
          </p>

          {/* CTA Buttons */}
          <div className="z-10 flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
            <Button size="lg" className="cursor-pointer">
              <a href="#" className="flex items-center">
                Browse Templates
                <ArrowRight className="ms-2 size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer">
              <a href="#">
                View Components
              </a>
            </Button>
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className="relative z-10 mb-0 flex min-h-full flex-col items-center justify-start">
          <div className="bg-background w-full max-w-5xl overflow-hidden rounded-xl border p-[1.3%]">
            <div className="flex h-full w-full overflow-hidden rounded-lg border">
              {/* Light mode dashboard image */}
              <Image
                src="/dashboard-light.png"
                alt="GuestMe Dashboard"
                width={1200}
                height={800}
                className="w-full object-cover block dark:hidden"
                priority
              />
              {/* Dark mode dashboard image */}
              <Image
                src="/dashboard-dark.png"
                alt="GuestMe Dashboard"
                width={1200}
                height={800}
                className="w-full object-cover hidden dark:block"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sticky bottom bar */}
        <div className="sticky bottom-10 z-[15] flex justify-center">
          <div className="bg-primary text-primary-foreground mt-2 flex items-center gap-10 rounded-xl px-3.5 py-2 shadow-lg">
            <div className="flex items-center gap-2 font-medium">
              <span>Welcome to dashboard</span>
            </div>
            <Loader className="size-4.5 animate-spin" />
          </div>
        </div>
      </div>
    </section>
  )
}
