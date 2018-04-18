import { randRange, drawFlipped } from "./utils";
import { spriteLocations } from "./sprites";
import GameObject from "./gameObject";
import Game from "./game";

class Terrain extends GameObject {
  constructor(pos, width, height) {
    super(pos, width, height);
    this.sprites = spriteLocations.environment;
  }

  static fromLastTerrain(lastTerrain) {
    const pos = this.nextPos(lastTerrain.getRight(), lastTerrain.getTop());
    const height = Math.max(Game.HEIGHT - pos[1], 2 * Terrain.BLOCK_HEIGHT);
    const width = this.nextWidth();
    if (randRange(0, 2) === 0) {
      return new Terrain(pos, width, height);
    } else {
      return new Terrain([pos[0], 0], width, height);
    }
  }

  static nextPos(lastRight, lastTop) {
    return [
      lastRight + randRange(100, 250),
      Game.HEIGHT - randRange(1, 3) * Terrain.BLOCK_HEIGHT
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
        if (row >= this.getBlockHeight() - 1) {
          tile = "stoneMid";
          drawFlipped(
            ctx,
            this.sprites.imageEl,
            ...this.sprites.locations[tile],
            Math.floor(this.pos[0] + col * Terrain.BLOCK_WIDTH),
            this.pos[1] + row * Terrain.BLOCK_HEIGHT,
            Terrain.BLOCK_WIDTH,
            Terrain.BLOCK_HEIGHT
          );
        } else {
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
