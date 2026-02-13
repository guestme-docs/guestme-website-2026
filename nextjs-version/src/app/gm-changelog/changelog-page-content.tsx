"use client"

import React from 'react'
import { LandingNavbar } from '../gm-landing/components/navbar'
import { LandingFooter } from '../gm-landing/components/footer'
import { LandingThemeCustomizer, LandingThemeCustomizerTrigger } from '../gm-landing/components/landing-theme-customizer'
import { ChangelogHeroSection } from './components/hero-section'
import { TimelineSection } from './components/timeline-section'
import { ChangelogFaqSection } from './components/faq-section'
import { ChangelogCtaSection } from './components/cta-section'

export function ChangelogPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)_40%,transparent)_0,color-mix(in_oklab,var(--border)_40%,transparent)_1px,transparent_0,transparent_50%)] [background-size:12px_12px] bg-fixed">
      <div className="mx-auto h-full w-full max-w-[84rem] sm:px-6 lg:px-8">
        <div className="bg-background h-full w-full sm:border-x">
          {/* Navigation */}
          <LandingNavbar />

          {/* Main Content */}
          <main>
            <ChangelogHeroSection />
            <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent' />
            <TimelineSection />
            <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent' />
            <ChangelogFaqSection />
            <ChangelogCtaSection />
          </main>

          {/* Footer */}
          <LandingFooter />
        </div>
      </div>

      {/* Theme Customizer */}
      <LandingThemeCustomizerTrigger onClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
    </div>
  )
}
