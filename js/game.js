import Terrain from "./terrain";
import Player from "./player";
import { spriteLocations, loadSprites } from "./sprites";

class Game {
  constructor(ctx, input) {
    this.ctx = ctx;
    this.input = input;
    this.terrainObjects = [];
    this.distance = 0;
    this.playing = true;
    this.newFrame = this.newFrame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.loadedSprites = false;
    this.sprites = spriteLocations;
    loadSprites(() => this.start());
    this.player = new Player([200, 105], this.sprites.player);
  }

  start() {
    const terrain = new Terrain(100, 100, 700);
    this.terrainObjects = [terrain];
    this.input.attachHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.newFrame);
  }

  newFrame(time) {
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
    const prevPos = Array.from(this.player.pos);
    this.player.nextState(this.input, delta);
    this.player.boundBy(this.terrainObjects, this.gameOver, prevPos);
  }

  drawFrame() {
    this.ctx.fillStyle = "#333";
    this.ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.terrainObjects.forEach(obj => obj.draw(this.ctx));
    this.player.draw(this.ctx, this.distance);
  }

  destroyOldObjects() {
    if (this.terrainObjects[0].getEnd() < 0) {
      this.terrainObjects.slice(0, 1);
    }
  }

  createNewObjects() {
    const lastTerrain = this.terrainObjects[this.terrainObjects.length - 1];
    if (lastTerrain.getEnd() < Game.WIDTH) {
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
Game.HEIGHT = 500;

export default Game;
