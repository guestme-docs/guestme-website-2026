import type { Metadata } from 'next'
import { ChangelogPageContent } from './changelog-page-content'

export const metadata: Metadata = {
  title: 'GuestMe - Changelog',
  description: 'See what\'s new added, changed, fixed, improved or updated.',
}

export default function ChangelogPage() {
  return <ChangelogPageContent />
}
