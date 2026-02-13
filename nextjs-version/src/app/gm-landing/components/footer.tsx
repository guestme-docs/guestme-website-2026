"use client"

import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  product: [
    { name: 'Стоимость', href: '/#prices' },
    { name: 'Интеграции', href: '/gm-integrations' },
  ],
  resources: [
    { name: 'Документация', href: 'https://docs.guestme.ru/', external: true },
    { name: 'Для дилеров iiko', href: 'https://docs.guestme.ru/quickstart/step1-install-plugin', external: true },
    { name: 'Для разработчиков', href: 'https://docs.guestme.ru/integration/about', external: true },
  ],
  company: [
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/about#contacts' },
  ],
  support: [
    { name: 'Написать в тех.поддержку', href: '#' },
    { name: '+7 495 476 5242', href: 'tel:+74954765242', isPhone: true },
  ],
}

export function LandingFooter() {
  return (
    <footer className="border-t bg-background text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-6 lg:items-start lg:gap-6 lg:text-left">
          {/* Brand Column - footer-7 style */}
          <div className="flex w-full flex-col items-center gap-6 pr-0 lg:col-span-2 lg:items-start lg:pr-12">
            {/* Logo */}
            <a href="/" aria-label="На главную">
              <Image
                src="/gm-logo-black.svg"
                alt="GuestMe"
                width={139}
                height={20}
                className="dark:hidden"
              />
              <Image
                src="/gm-logo-white.svg"
                alt="GuestMe"
                width={139}
                height={20}
                className="hidden dark:block"
              />
            </a>

            {/* Address */}
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h2 className="text-foreground text-base font-medium">Адрес</h2>
              <span className="text-muted-foreground">117208, Москва, Чертановская ул, д. 7а</span>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h2 className="text-foreground text-base font-medium">Email</h2>
              <a className="text-muted-foreground hover:text-foreground transition-colors" href="mailto:info@guestme.ru">
                info@guestme.ru
              </a>
            </div>

          </div>

          {/* Links Columns */}
          <div className='max-md:col-span-1 lg:col-span-1'>
            <h4 className="text-foreground text-base font-medium mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-1 lg:col-span-1'>
            <h4 className="text-foreground text-base font-medium mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-1 lg:col-span-1'>
            <h4 className="text-foreground text-base font-medium mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-1 lg:col-span-1'>
            <h4 className="text-foreground text-base font-medium mb-4">Тех. поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.isPhone && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    )}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-muted-foreground">
            © 2017–{new Date().getFullYear()} ООО &laquo;ГЕСТМИ&raquo;. Все права защищены.
          </p>
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            <a href="/privacy_policy" className="text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
