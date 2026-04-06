import { UI } from '#/phaser/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: UI,
})
