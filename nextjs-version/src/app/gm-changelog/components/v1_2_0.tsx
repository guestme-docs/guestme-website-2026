import { TimelineItem } from './timeline-item'
import { BadgeAccordion } from './badge-accordion'
import { CopyCodeBlock } from './copy-code-block'
import { accordionDataV1_2_0 } from '../data/changelog-data'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function V1_2_0() {
  return (
    <div>
      <TimelineItem date='March 22, 2025' version='v 1.2.0'>
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold'>Studio Dashboard Live Preview & Deployment</h3>
          <p className='text-muted-foreground text-sm'>
            The new Studio Dashboard brings together everything you need to preview, test, and deploy your component
            library right from your browser.
          </p>
          <div className='space-y-3'>
            <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
              <li>Preview components in any framework (Next.js, Remix, Vite)</li>
              <li>One-click deploy to Vercel</li>
              <li>Real-time preview links for teams</li>
            </ul>
            <div className='flex flex-wrap items-center gap-4'>
              {/* Vite */}
              <div className='flex items-center gap-1.5 rounded-md bg-amber-600/10 px-3 py-1 dark:bg-amber-400/10'>
                <img src={`${basePath}/images/changelog/vite-logo.webp`} alt='Vite' className='h-4.5' />
                <span className='text-xs font-medium'>Vite</span>
              </div>
              {/* React */}
              <div className='flex items-center gap-1.5 rounded-md bg-sky-600/10 px-3 py-1 dark:bg-sky-400/10'>
                <img src={`${basePath}/images/changelog/react-logo.webp`} alt='React' className='h-4.5' />
                <span className='text-xs font-medium'>React</span>
              </div>
              {/* Angular */}
              <div className='bg-destructive/10 flex items-center gap-1.5 rounded-md px-3 py-1'>
                <img src={`${basePath}/images/changelog/angular-logo.webp`} alt='Angular' className='h-4.5' />
                <span className='text-xs font-medium'>Angular</span>
              </div>
            </div>
          </div>
          <CopyCodeBlock />
          <p className='text-muted-foreground text-sm'>
            The Studio Dashboard is a powerful tool within shadcnstudio that streamlines the process of designing,
            previewing, and deploying your component library. It allows you to instantly preview components in different
            frameworks (like Next.js, Remix, and Vite) directly from the dashboard.
          </p>
          <BadgeAccordion data={accordionDataV1_2_0} />
        </div>
      </TimelineItem>
    </div>
  )
}
