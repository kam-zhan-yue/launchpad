import { createRootRoute } from "@tanstack/react-router"
import { Root } from "#/components/root"

import "../styles.css"

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return <Root />
}
