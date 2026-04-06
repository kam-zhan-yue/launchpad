import { useCallback, useState } from "react"
import { useGameStore } from "../store"

const UI = () => {
  const store = useGameStore()
  const [started, setStarted] = useState(false)

  const handleStartClicked = useCallback(() => {
    // unfortunate decoupling as zustand doesn't play well with classes
    store.game?.start()
    setStarted(true)
  }, [store.game])

  return (
    <div className="fixed flex w-full h-full justify-center items-center">
      {!started && <div onClick={handleStartClicked}>Start</div>}
    </div>
  )
}

export { UI }
