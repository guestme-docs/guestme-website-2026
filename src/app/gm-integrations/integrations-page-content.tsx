"use client"

import React from 'react'
import { LandingNavbar } from '../gm-landing/components/navbar'
import { LandingFooter } from '../gm-landing/components/footer'
import { LandingThemeCustomizer, LandingThemeCustomizerTrigger } from '../gm-landing/components/landing-theme-customizer'
import { IntegrationsHeroSection } from './components/hero-section'

export function IntegrationsPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)_40%,transparent)_0,color-mix(in_oklab,var(--border)_40%,transparent)_1px,transparent_0,transparent_50%)] [background-size:12px_12px] bg-fixed">
      <div className="mx-auto h-full w-full max-w-[84rem] sm:px-6 lg:px-8">
        <div className="bg-background h-full w-full sm:border-x">
          <LandingNavbar />
          <main>
            <IntegrationsHeroSection />
          </main>
          <LandingFooter />
        </div>
      </div>

      <LandingThemeCustomizerTrigger onClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
    </div>
  )
}
