"use client"

import React from 'react'
import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { LogoCarousel } from './components/logo-carousel'
import { StatsSection } from './components/stats-section'
import { FeaturesSection } from './components/features-section'
import { TeamSection } from './components/team-section'
import { TestimonialsSection } from './components/testimonials-section'
import { BlogSection } from './components/blog-section'
import { PricingSection } from './components/pricing-section'
import { CTASection } from './components/cta-section'
import { ContactSection } from './components/contact-section'
import { FaqSection } from './components/faq-section'
import { LandingFooter } from './components/footer'
import { LandingThemeCustomizer, LandingThemeCustomizerTrigger } from './components/landing-theme-customizer'
import { AboutSection } from './components/about-section'
import { BenefitsSection } from './components/benefits-section'
import { SectionDivider } from './components/section-divider'

export function LandingPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)_40%,transparent)_0,color-mix(in_oklab,var(--border)_40%,transparent)_1px,transparent_0,transparent_50%)] [background-size:12px_12px] bg-fixed">
      <div className="mx-auto h-full w-full max-w-[84rem] sm:px-6 lg:px-8">
        <div className="bg-background h-full w-full sm:border-x">
          {/* Navigation */}
          <LandingNavbar />

          {/* Main Content */}
          <main>
            <HeroSection />
            <SectionDivider />
            <LogoCarousel />
            <SectionDivider />
            <StatsSection />
            <SectionDivider />
            <AboutSection />
            <SectionDivider />
            <BenefitsSection />
            <SectionDivider />
            <FeaturesSection />
            <SectionDivider />
            <TeamSection />
            <SectionDivider />
            <PricingSection />
            <SectionDivider />
            <TestimonialsSection />
            <SectionDivider />
            <BlogSection />
            <SectionDivider />
            <FaqSection />
            <SectionDivider />
            <CTASection />
            <SectionDivider />
            <ContactSection />
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
