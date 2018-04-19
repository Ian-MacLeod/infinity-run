import Terrain from "./terrain";
import Player from "./player";
import { spriteLocations, loadSprites } from "./sprites";

class Game {
  constructor(ctx, input) {
    loadSprites(() => {});
    this.ctx = ctx;
    this.input = input;
    this.distance = 0;
    this.newFrame = this.newFrame.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  start() {
    this.playing = true;
    this.player = new Player([200, 200], this);
    const terrain = new Terrain([100, 400], 700, 100);
    this.terrainObjects = [terrain];
    this.speed = Game.INITIAL_SPEED;
    this.lastTime = 0;
    this.difficulty = 0;
    this.gravity = Game.INITIAL_GRAVITY;
    this.input.attachHandlers();
    requestAnimationFrame(this.newFrame);
  }

  newFrame(time) {
    this.speed = Game.INITIAL_SPEED + time * Game.ACCELERATION;
    let scaledDelta = 0;
    if (this.lastTime !== 0) {
      scaledDelta = (time - this.lastTime) / 16;
    }
    if (this.difficulty < 0.4) {
      this.difficulty += scaledDelta * Game.DIFFICULTY_RATING_GROWTH;
    }
    this.gravity += scaledDelta * Game.GRAVITY_GROWTH_RATE;
    this.distance += scaledDelta * this.speed;
    this.lastTime = time;
    this.nextState(scaledDelta);
    this.drawFrame();
    if (this.playing) {
      requestAnimationFrame(this.newFrame);
    }
  }

  nextState(delta) {
    this.updateTerrainState(delta);
    this.updatePlayerState(delta);
    this.destroyOldObjects();
    this.createNewObjects();
  }

  updateTerrainState(delta) {
    this.terrainObjects.forEach(obj => obj.nextState(this.speed, delta));
  }

  updatePlayerState(delta) {
    this.player.nextState(this.input, delta);
    this.player.boundBy(this.terrainObjects);
    if (this.player.pos[1] > Game.HEIGHT || this.player.pos[1] < 0) {
      this.gameOver();
    }
  }

  drawFrame() {
    this.drawBackground();
    this.terrainObjects.forEach(obj => obj.draw(this.ctx));
    this.player.draw(this.ctx, this.distance);
  }

  drawBackground() {
    this.ctx.drawImage(
      spriteLocations.background.imageEl,
      0,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    let start = -((this.distance / 80) % Game.WIDTH);
    this.ctx.drawImage(
      spriteLocations.backgroundStars.imageEl,
      start,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    this.ctx.drawImage(
      spriteLocations.backgroundStars.imageEl,
      start + Game.WIDTH,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    start = -((this.distance / 40) % (Game.WIDTH + 700));
    this.ctx.drawImage(
      spriteLocations.backgroundFarPlanets.imageEl,
      start,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    this.ctx.drawImage(
      spriteLocations.backgroundFarPlanets.imageEl,
      start + Game.WIDTH + 700,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    start = -((this.distance / 25) % (Game.WIDTH + 300));
    this.ctx.drawImage(
      spriteLocations.backgroundRingPlanet.imageEl,
      start,
      200,
      153,
      345
    );
    this.ctx.drawImage(
      spriteLocations.backgroundRingPlanet.imageEl,
      start + Game.WIDTH + 300,
      200,
      153,
      345
    );
  }

  destroyOldObjects() {
    if (this.terrainObjects[0].getRight() < 0) {
      this.terrainObjects.splice(0, 1);
    }
  }

  createNewObjects() {
    const lastTerrain = this.terrainObjects[this.terrainObjects.length - 1];
    if (lastTerrain.getRight() < Game.WIDTH) {
      this.terrainObjects.push(
        Terrain.fromLastTerrain(lastTerrain, this.speed, this.difficulty)
      );
    }
  }

  gameOver() {
    alert(`You ran for ${Math.floor(this.distance / 40)} meters.`);
    this.playing = false;
  }
}

Game.INITIAL_GRAVITY = 0.6;
Game.GRAVITY_GROWTH_RATE = 0;
Game.INITIAL_SPEED = 5;
Game.ACCELERATION = 1 / 6000;
Game.DIFFICULTY_RATING_GROWTH = 1 / 5000;
Game.WIDTH = 1000;
Game.HEIGHT = 600;

export default Game;
