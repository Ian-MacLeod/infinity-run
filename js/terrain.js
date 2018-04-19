import { randRange, drawFlipped } from "./utils";
import { spriteLocations } from "./sprites";
import GameObject from "./gameObject";
import Game from "./game";
import Player from "./player";

class Terrain extends GameObject {
  constructor(pos, width, height) {
    super(pos, width, height);
    this.sprites = spriteLocations.environment;
  }

  flipped() {
    return new Terrain(
      [this.pos[0], Game.HEIGHT - (this.pos[1] + this.height)],
      this.width,
      this.height
    );
  }

  isTop() {
    return this.pos[1] <= 0;
  }

  static fromLastTerrain(lastTerrain, speed, difficulty) {
    let shouldFlip = false;
    if (lastTerrain.isTop()) {
      lastTerrain = lastTerrain.flipped();
      shouldFlip = true;
    }

    let newTerrain;
    if (randRange(0, 2) === 0) {
      newTerrain = this.newFlippedTerrain(lastTerrain, speed, difficulty);
    } else {
      newTerrain = this.newTerrain(lastTerrain, speed, difficulty);
    }

    if (shouldFlip) {
      newTerrain = newTerrain.flipped();
    }
    return newTerrain;
  }

  static newFlippedTerrain(lastTerrain, speed, difficulty) {
    const bottom = randRange(1, 3) * Terrain.BLOCK_HEIGHT;
    const maxGap = this.maxJumpableGap(speed, lastTerrain.getTop() - bottom, 0);
    const left =
      lastTerrain.getRight() +
      randRange(
        (-0.2 + difficulty * 1.7) * maxGap,
        (0.2 + difficulty * 1.7) * maxGap
      );
    const width = randRange(4, 15) * Terrain.BLOCK_HEIGHT;

    return new Terrain([left, bottom - Terrain.HEIGHT], width, Terrain.HEIGHT);
  }

  static newTerrain(lastTerrain, speed, difficulty) {
    const top = Game.HEIGHT - randRange(1, 3) * Terrain.BLOCK_HEIGHT;
    const maxGap = this.maxJumpableGap(
      speed,
      top - lastTerrain.getTop(),
      Player.JUMP_VELOCITY
    );
    const left =
      lastTerrain.getRight() +
      randRange((0.2 + difficulty) * maxGap, (0.5 + difficulty) * maxGap);
    const width = randRange(6, 14) * Terrain.BLOCK_HEIGHT;

    return new Terrain([left, top], width, Terrain.HEIGHT);
  }

  static maxJumpableGap(speed, dy, v0) {
    const g = Player.GRAVITY;
    const jumpTime = (-v0 + Math.pow(Math.pow(v0, 2) + 2 * g * dy, 0.5)) / g;
    const gap = jumpTime * speed;

    return gap;
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
Terrain.HEIGHT = 4 * Terrain.BLOCK_HEIGHT;

export default Terrain;
