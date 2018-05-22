import Game from "./game";
import Input from "./input";
import sounds, { mute, unmute } from "./audio";

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
  const highScoreEl = document.querySelector(".high-score");
  const scoreEl = document.querySelector(".score");

  Promise.all(Object.values(sounds).map(sound => sound.promise)).then(() => {
    startEls.forEach(el => el.classList.remove("hide"));
  });

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
    resultEl.textContent = `You ran for ${result} meters.`;
    const oldScore = parseInt(scoreEl.textContent);
    scoreEl.textContent = Math.max(oldScore, result).toString();
    highScoreEl.classList.remove("hide");
  };

  const ctx = canvasEl.getContext("2d");
  const input = new Input();
  const game = new Game(ctx, input, onGameEnd, sounds);

  startEls.forEach(el => el.addEventListener("click", onStartGame));
  startEls[0].addEventListener("click", onStartGame);
});
