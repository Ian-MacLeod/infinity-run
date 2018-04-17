import Terrain from "./terrain";
import Player from "./player";

class Game {
  constructor(ctx, input) {
    this.ctx = ctx;
    this.input = input;
    this.player = new Player([200, 100]);
    this.terrainObjects = [];
    this.newFrame = this.newFrame.bind(this);
  }

  start() {
    const terrain = new Terrain(100, 100, 700);
    this.terrainObjects = [terrain];
    this.input.attachHandlers();
    setInterval(this.newFrame, 33);
  }

  newFrame() {
    this.nextState();
    this.drawFrame();
  }

  nextState() {
    this.updateTerrainState();
    this.updatePlayerState();
    this.destroyOldObjects();
    this.createNewObjects();
  }

  updateTerrainState() {
    this.terrainObjects.forEach(obj => obj.nextState(this.player.getSpeed()));
  }

  updatePlayerState() {
    this.player.nextState(this.input);
    this.player.boundBy(this.terrainObjects);
  }

  drawFrame() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.terrainObjects.forEach(obj => obj.draw(this.ctx));
    this.player.draw(this.ctx);
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
}

Game.WIDTH = 1000;
Game.HEIGHT = 500;

export default Game;
