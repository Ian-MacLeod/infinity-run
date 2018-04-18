import { randRange } from "./utils";
import { spriteLocations } from "./sprites";
import GameObject from "./gameObject";

class Terrain extends GameObject {
  constructor(pos, width, height) {
    super(pos, width, height);
    this.sprites = spriteLocations.environment;
  }

  static fromLastTerrain(lastTerrain) {
    const pos = this.nextPos(lastTerrain.getRight(), lastTerrain.getTop());
    const height = pos[1];
    const width = this.nextWidth();
    return new Terrain(pos, height, width);
  }

  static nextHeight(lastHeight) {
    return randRange(1, 3) * Terrain.BLOCK_HEIGHT;
  }

  static nextPos(lastRight, lastTop) {
    return [
      lastRight + randRange(100, 250),
      500 - randRange(1, 3) * Terrain.BLOCK_HEIGHT
    ];
  }

  static nextWidth() {
    return randRange(1, 10) * Terrain.BLOCK_WIDTH;
  }

  contains(pos) {
    return (
      this.pos[0] < pos[0] &&
      this.getRight() > pos[0] &&
      this.pos[1] < pos[1] &&
      this.pos[1] + this.height > pos[1]
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
          Math.floor(this.pos[0] + col * Terrain.BLOCK_WIDTH),
          this.pos[1] + row * Terrain.BLOCK_HEIGHT,
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
    this.pos[0] -= playerSpeed * delta;
  }
}

Terrain.BLOCK_HEIGHT = 70;
Terrain.BLOCK_WIDTH = 70;

export default Terrain;
