import ReactDOM from "react-dom/client"
import { getRouter } from "./router"
import { RouterProvider } from "@tanstack/react-router"

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<RouterProvider router={getRouter()} />)
}
