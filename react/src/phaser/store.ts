import { create } from "zustand"
import type { Game } from "./scenes/game"

interface GameStore {
  game?: Game
  setGame: (game: Game) => void
}

const useGameStore = create<GameStore>()((set) => ({
  setGame: (game: Game) => set({ game }),
}))

export { useGameStore }
