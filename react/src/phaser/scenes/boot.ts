import { Scene } from "phaser"

class Boot extends Scene {
  constructor() {
    super({ key: "Boot" })
  }

  preload() {
    this.load.image("island", "images/island.png")
  }

  create() {
    this.scene.start("Game")
  }
}

export { Boot }
