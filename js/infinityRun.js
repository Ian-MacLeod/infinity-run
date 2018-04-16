import Game from "./game";
import Input from "./input";
import GameView from "./gameView";
import { GAME_WIDTH, GAME_HEIGHT } from "./constants";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game");
  canvasEl.width = Game.WIDTH;
  canvasEl.height = Game.HEIGHT;

  const ctx = canvasEl.getContext("2d");
  const input = new Input();
  const game = new Game(ctx, input);
  game.start();
});
