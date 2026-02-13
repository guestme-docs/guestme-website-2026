import type { Metadata } from 'next'
import { IntegrationsPageContent } from './integrations-page-content'

export const metadata: Metadata = {
  title: 'GuestMe - Интеграции',
  description: 'Интегрировано с ведущими сервисами. Мы соединяем ведущие B2C-сервисы, технологических лидеров и рестораны.',
}

export default function IntegrationsPage() {
  return <IntegrationsPageContent />
}
