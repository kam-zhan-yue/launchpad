import { Link } from "@tanstack/react-router"
import { Button } from "./button"

const Selection = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-2">
      <Link to="/phaser">
        <Button>Phaser</Button>
      </Link>
      <Link to="/three-js">
        <Button>Three JS</Button>
      </Link>
      <Link to="/query">
        <Button>Query</Button>
      </Link>
    </div>
  )
}

export { Selection }
