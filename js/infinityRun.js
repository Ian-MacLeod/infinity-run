import Game from "./game";
import Input from "./input";
import { mute, unmute } from "./audio";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game");
  canvasEl.width = Game.WIDTH;
  canvasEl.height = Game.HEIGHT;

  const muteEl = document.querySelector(".sound-toggle");

  mute();
  muteEl.addEventListener("click", () => {
    if (muteEl.classList.contains("muted")) {
      unmute();
    } else {
      mute();
    }
    muteEl.classList.toggle("muted");
  });

  const startEls = document.querySelectorAll(".start-game-button");
  const homeStartEl = document.querySelector(".start-game-button.home");
  const gameOverEl = document.getElementById("game-over");
  const resultEl = document.querySelector("p.result");
  const instructionsEl = document.querySelector(".instructions");
  const howToPlayEl = document.querySelector(".how-to-play");

  setTimeout(() => {
    startEls.forEach(el => el.classList.remove("hide"));
  }, 1000);

  howToPlayEl.addEventListener("click", () =>
    instructionsEl.classList.toggle("hide")
  );

  const onStartGame = () => {
    instructionsEl.classList.add("hide");
    gameOverEl.classList.add("hide");
    homeStartEl.classList.add("hide");
    game.start();
  };

  const onGameEnd = result => {
    gameOverEl.classList.remove("hide");
    resultEl.textContent = result;
  };

  const ctx = canvasEl.getContext("2d");
  const input = new Input();
  const game = new Game(ctx, input, onGameEnd);

  startEls.forEach(el => el.addEventListener("click", onStartGame));
  startEls[0].addEventListener("click", onStartGame);
});
