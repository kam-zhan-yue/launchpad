import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Outlet } from "@tanstack/react-router"

const queryClient = new QueryClient()

const Root = () => {
	return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
}

export { Root }
