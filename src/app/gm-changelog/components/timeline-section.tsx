import { V1_3_0 } from './v1_3_0'
import { V1_2_0 } from './v1_2_0'
import { V1_1_0 } from './v1_1_0'

export function TimelineSection() {
  return (
    <section>
      <div className='mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16'>
        <div className='flex flex-col items-start'>
          <V1_3_0 />
          <V1_2_0 />
          <V1_1_0 />
        </div>
      </div>
    </section>
  )
}
