import { Main } from "#/phaser/components/main"
import { Outlet } from "@tanstack/react-router"

const Root = () => {
	return (
    <>
      <Main />
      <Outlet />
    </>
  )
}

export { Root }
