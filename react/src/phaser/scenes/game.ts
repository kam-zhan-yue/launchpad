import { Scene } from "phaser"
import { GameImage } from "../classes/game-image"
import { constants } from "../constants"

class Game extends Scene {
  started: boolean

  constructor() {
    super({ key: "Game" })
    this.started = false
  }

  setupGame() {
    new GameImage(this, new Phaser.Math.Vector2(0, 0), "level", -10000)
    this.cameras.main.setZoom(4)
    const width = constants.islandWidth;
    const height = constants.islandHeight;
    this.cameras.main.setBounds(-width / 2, -height / 2, width, height, true);
  }

  create() {
    this.setupGame()
    console.log("what")
    this.sound.play("menu", { loop: true })
  }
  
  start() {
    if (this.started) return
    this.started = true
    this.sound.stopByKey("menu")
    this.sound.play("main", { loop: true })
  }
}

export { Game }
