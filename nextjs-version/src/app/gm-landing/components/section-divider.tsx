import { Separator } from '@/components/ui/separator'

export function SectionDivider() {
  return (
    <div className="relative w-full">
      <Separator />
      {/* Right cross marker */}
      <svg
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 -right-0.5 -translate-y-1/2"
      >
        <path d="M13.1589 20V0M0 10.0215H14" stroke="var(--primary)" strokeWidth="2" />
      </svg>
      {/* Left cross marker */}
      <svg
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 -left-0.5 -translate-y-1/2 -scale-x-100"
      >
        <path d="M13.1589 20V0M0 10.0215H14" stroke="var(--primary)" strokeWidth="2" />
      </svg>
    </div>
  )
}
