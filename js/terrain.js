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

  static fromLastTerrain(lastTerrain) {
    let shouldFlip = false;
    if (lastTerrain.isTop()) {
      lastTerrain = lastTerrain.flipped();
      shouldFlip = true;
    }

    let newTerrain;
    if (randRange(0, 2) === 0) {
      newTerrain = this.newEasyFlippedTerrain(
        lastTerrain.getRight(),
        lastTerrain.getTop()
      );
    } else {
      newTerrain = this.newEasyTerrain(
        lastTerrain.getRight(),
        lastTerrain.getTop()
      );
    }

    if (shouldFlip) {
      newTerrain = newTerrain.flipped();
    }
    return newTerrain;
  }

  static newEasyFlippedTerrain(lastRight, lastTop) {
    const bottom = randRange(1, 3) * Terrain.BLOCK_HEIGHT;
    const maxGap = this.maxJumpableGap(lastRight, -lastTop, -bottom, 0);
    const left = lastRight + randRange(-0.2 * maxGap, 0.2 * maxGap);
    const width = randRange(6, 14) * Terrain.BLOCK_HEIGHT;

    return new Terrain(
      [left, bottom - 4 * Terrain.BLOCK_HEIGHT],
      width,
      4 * Terrain.BLOCK_HEIGHT
    );
  }

  static newEasyTerrain(lastRight, lastTop) {
    const top = Game.HEIGHT - randRange(1, 3) * Terrain.BLOCK_HEIGHT;
    const maxGap = this.maxJumpableGap(
      lastRight,
      lastTop,
      top,
      Player.JUMP_VELOCITY
    );
    const left = lastRight + randRange(0.2 * maxGap, 0.5 * maxGap);
    const width = randRange(6, 14) * Terrain.BLOCK_HEIGHT;

    return new Terrain([left, top], width, 4 * Terrain.BLOCK_HEIGHT);
  }

  static maxJumpableGap(lastRight, lastTop, newTop, v0) {
    const g = Player.GRAVITY;
    const dy = newTop - lastTop;
    const jumpTime = (-v0 + Math.pow(Math.pow(v0, 2) + 2 * g * dy, 0.5)) / g;
    const gap = jumpTime * Player.MAX_SPEED;

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

export default Terrain;
