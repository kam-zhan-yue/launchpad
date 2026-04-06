import { useEffect } from "react"
import { Boot } from "../scenes/boot"
import { Game } from "../scenes/game"
import Phaser from "phaser"
import { useGameStore } from "../store"
import "../styles.css"
import { constants } from "../constants"

const Main = () => {
  const store = useGameStore()

  useEffect(() => {
    const boot = new Boot()
    const game = new Game()
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 300,
      height: 300,
      parent: "game-container",
      backgroundColor: "#65a4f8",
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 10,
      },
      physics: {
        default: "arcade",
        arcade: {
          debug: constants.debug,
          gravity: { x: 0, y: 0 },
        },
      },
      scene: [boot, game],
    };
    const phaserGame = new Phaser.Game(config)
    store.setGame(game)
    return () => {
      phaserGame.destroy(true)
    }
  }, [store.setGame])

  return (
    <>
      <div id="game-container" />
    </>
  )
}

export { Main }
