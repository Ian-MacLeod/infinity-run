import Terrain from "./terrain";
import Player from "./player";
import { spriteLocations, loadSprites } from "./sprites";

class Game {
  constructor(ctx, input) {
    loadSprites(() => this.start());
    this.ctx = ctx;
    this.input = input;
    this.terrainObjects = [];
    this.backgroundObjects = [];
    this.distance = 0;

    this.playing = true;
    this.newFrame = this.newFrame.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  start() {
    this.player = new Player([200, 200], Game.INITIAL_SPEED);
    const terrain = new Terrain([100, 400], 700, 100);
    this.terrainObjects = [terrain];
    this.input.attachHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.newFrame);
  }

  newFrame(time) {
    this.player.speed = Game.INITIAL_SPEED + time / 60000;
    const scaledDelta = (time - this.lastTime) / 16;
    this.lastTime = time;
    this.distance += scaledDelta * this.player.getSpeed();
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
    this.terrainObjects.forEach(obj =>
      obj.nextState(this.player.getSpeed(), delta)
    );
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
    start = -((this.distance / 50) % Game.WIDTH);
    this.ctx.drawImage(
      spriteLocations.backgroundFarPlanets.imageEl,
      start,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    this.ctx.drawImage(
      spriteLocations.backgroundFarPlanets.imageEl,
      start + Game.WIDTH,
      0,
      Game.WIDTH,
      Game.HEIGHT
    );
    start = -((this.distance / 30) % Game.WIDTH);
    this.ctx.drawImage(
      spriteLocations.backgroundRingPlanet.imageEl,
      start,
      240,
      102,
      230
    );
    this.ctx.drawImage(
      spriteLocations.backgroundRingPlanet.imageEl,
      start + Game.WIDTH,
      240,
      102,
      230
    );
  }

  destroyOldObjects() {
    if (this.terrainObjects[0].getRight() < 0) {
      this.terrainObjects.slice(0, 1);
    }
  }

  createNewObjects() {
    const lastTerrain = this.terrainObjects[this.terrainObjects.length - 1];
    if (lastTerrain.getRight() < Game.WIDTH) {
      this.terrainObjects.push(Terrain.fromLastTerrain(lastTerrain));
    }
  }

  gameOver() {
    console.log(this.player.pos);
    alert(`You ran for ${Math.floor(this.distance / 40)} meters.`);
    this.playing = false;
  }
}

Game.WIDTH = 1000;
Game.HEIGHT = 600;

export default Game;
