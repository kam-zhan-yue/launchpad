import { createFileRoute } from '@tanstack/react-router'
import { Main as Phaser } from '#/phaser/main'

export const Route = createFileRoute('/phaser')({
  component: Phaser,
})

