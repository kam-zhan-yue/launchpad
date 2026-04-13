import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/query')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/query"!</div>
}
