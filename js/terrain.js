import { randRange } from "./utils";
import { spriteLocations } from "./sprites";

class Terrain {
  constructor(start, height, width) {
    this.start = start;
    this.height = height;
    this.width = width;
    this.sprites = spriteLocations.environment;
  }

  getEnd() {
    return this.start + this.width;
  }

  static fromLastTerrain(lastTerrain) {
    const start = this.nextStart(lastTerrain.getEnd());
    const height = this.nextHeight(lastTerrain.height);
    const width = this.nextWidth();
    return new Terrain(start, height, width);
  }

  static nextHeight(lastHeight) {
    return randRange(50, 250);
  }

  static nextStart(lastEnd) {
    return lastEnd + randRange(100, 300);
  }

  static nextWidth() {
    return randRange(1, 10) * Terrain.BLOCK_WIDTH;
  }

  contains(pos) {
    return (
      this.start < pos[0] && this.getEnd() > pos[0] && this.height > pos[1]
    );
  }

  draw(ctx) {
    ctx.fillStyle = "#756";
    for (let col = 0; col < this.getBlockWidth(); col++) {
      for (let row = 0; row < this.getBlockHeight(); row++) {
        let tile = "stoneCenter";
        if (row === 0) {
          tile = "stoneMid";
        }
        ctx.drawImage(
          this.sprites.imageEl,
          ...this.sprites.locations[tile],
          Math.floor(this.start + col * Terrain.BLOCK_WIDTH),
          500 - this.height + row * Terrain.BLOCK_HEIGHT,
          Terrain.BLOCK_WIDTH,
          Terrain.BLOCK_HEIGHT
        );
      }
    }
  }

  getBlockHeight() {
    return this.height / Terrain.BLOCK_HEIGHT;
  }

  getBlockWidth() {
    return this.width / Terrain.BLOCK_WIDTH;
  }

  nextState(playerSpeed, delta) {
    this.start -= playerSpeed * delta;
  }
}

Terrain.BLOCK_HEIGHT = 70;
Terrain.BLOCK_WIDTH = 70;

export default Terrain;
