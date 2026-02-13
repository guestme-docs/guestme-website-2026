import { ArrowRightIcon, LayoutGridIcon, PlusIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const partnerLogos = [
  // Row 1
  { name: 'iiko', src: `${basePath}/images/integrations/iiko_main.svg` },
  { name: 'ВТБ Family', src: `${basePath}/images/integrations/vtbfamily_main.svg` },
  { name: 'Афиша Рестораны', src: `${basePath}/images/integrations/afisha_main.svg` },
  { name: null }, // placeholder
  { name: 'Restoclub', src: `${basePath}/images/integrations/restoclub_main.svg` },
  { name: 'Premium Bonus', src: `${basePath}/images/integrations/premiumbonus_main.svg` },
  { name: 'Prime Hill', src: `${basePath}/images/integrations/primehill_main.svg` },
  { name: null },
  { name: null },
  { name: null },
  // Row 2
  { name: 'DocsInBox', src: `${basePath}/images/integrations/docsinbox_main.svg` },
  { name: 'АМД', src: `${basePath}/images/integrations/ama_main.svg` },
  { name: null },
  { name: 'SMS Aero', src: `${basePath}/images/integrations/smsaero_main.svg` },
  { name: 'СМС Центр', src: `${basePath}/images/integrations/smsc_main.svg` },
  { name: 'Prostor SMS', src: `${basePath}/images/integrations/prostorsms_main.svg` },
  { name: null },
  { name: 'ChatPush', src: `${basePath}/images/integrations/chatpush_main.svg` },
  { name: null },
  { name: null },
] as const

export function IntegrationsHeroSection() {
  return (
    <section className='pt-4 pb-0'>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center text-center'>
          {/* Badge */}
          <Badge variant='outline' className='mb-6 gap-2 rounded-full px-4 py-2 text-sm font-normal'>
            <LayoutGridIcon className='size-4' />
            Интеграции и партнерские решения
          </Badge>

          {/* Title */}
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
            Интегрировано с ведущими{' '}
            <br className='hidden sm:block' />
            сервисами
          </h1>

          {/* Description */}
          <p className='text-muted-foreground mt-6 max-w-2xl text-lg sm:text-xl'>
            Мы соединяем ведущие B2C-сервисы, технологических лидеров и рестораны, чтобы создать единый и бесшовный опыт для миллионов гостей
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button size='lg' className='cursor-pointer'>
              <a href='#' className='flex items-center'>
                Стать партнером
                <ArrowRightIcon className='ms-2 size-4' />
              </a>
            </Button>
            <Button size='lg' variant='outline' className='cursor-pointer'>
              <a href='#'>
                Предложить интеграцию
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Partner Logos Grid */}
      <div className='mt-16 sm:mt-20'>
        <div className='grid grid-cols-5 border-t sm:grid-cols-10'>
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className='flex h-20 items-center justify-center border-r border-b bg-muted/30 p-3 sm:h-24'
            >
              {logo.name && logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className='max-h-8 max-w-full object-contain sm:max-h-10'
                />
              ) : (
                <PlusIcon className='text-muted-foreground/30 size-5' />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
