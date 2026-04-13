import { createFileRoute } from '@tanstack/react-router'
import { Main as Query } from '@/query/main'

export const Route = createFileRoute('/query')({
  component: Query,
})
