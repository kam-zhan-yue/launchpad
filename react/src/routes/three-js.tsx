import { createFileRoute } from '@tanstack/react-router'
import { Main as Three } from '@/three-js/main'

export const Route = createFileRoute('/three-js')({
  component: Three,
})
