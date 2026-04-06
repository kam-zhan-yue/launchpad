import { Scene } from "phaser"

class Boot extends Scene {
  constructor() {
    super({ key: "Boot" })
  }

  preload() {
    this.load.image("level", "src/phaser/assets/level.png")
    this.load.audio("menu", "src/phaser/assets/bgm-menu.ogg", { loop: true })
    this.load.audio("main", "src/phaser/assets/bgm-main.ogg")
  }

  create() {
    this.scene.start("Game")
  }
}

export { Boot }
