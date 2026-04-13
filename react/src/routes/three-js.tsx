import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/three-js')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/three-js"!</div>
}
