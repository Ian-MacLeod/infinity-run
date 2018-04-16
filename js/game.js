import Terrain from "./terrain";
import Player from "./player";

class Game {
  constructor(ctx, input) {
    this.ctx = ctx;
    this.input = input;
    this.gameObjects = [];
    this.newFrame = this.newFrame.bind(this);
  }

  start() {
    const terrain = new Terrain(100, 100, 700);
    const player = new Player([200, 100]);
    this.gameObjects = [terrain, player];
    this.input.attachHandlers();
    setInterval(this.newFrame, 33);
  }

  newFrame() {
    this.nextState();
    this.drawFrame();
  }

  nextState() {
    this.gameObjects.forEach(obj => obj.nextState(this.input));
  }

  drawFrame() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.gameObjects.forEach(obj => obj.draw(this.ctx));
  }
}

Game.WIDTH = 1000;
Game.HEIGHT = 500;

export default Game;
