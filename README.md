# Infinity Run

## Overview

Infinity Run is a side-scrolling game where the player is forced to keep moving at a minimum pace that increases over time. There is no win condition - the goal is simply to cover as much distance as possible before hitting an obstacle and dying. While there will be only one level, the difficulty will ramp up as time progresses and force an eventual end to the game.

[Check out the live version here](https://ian-macleod.github.io/infinity-run/)

![Gameplay](https://i.imgur.com/f6JcP1X.gif)

## Architecture

The technologies used for the project are:

* Vanilla JavaScript for the game logic
* HTML5 Canvas is used to render the game
* Web Audio API for in game music and sound effects
* Webpack is used to bundle the scripts and manage dependencies

The logic for the game itself is divided up as follows:

`game.js` - Keeps track of the overall game state. Holds all of the objects and the context of the canvas, and uses requestAnimationFrame to render its state to the canvas periodically.

`gameObject.js` - Contains logic for positioning and collision detection that all other game entities inherit from.

`player.js` - Responsible for the behavior of the player character. Will enforce the minimum running speed and have methods to jump, and reverse gravity.

`terrain.js` - Contains the terrain class which will represent static objects that the player will run on top of.

`sprites.js` - Loads and holds information about the locations of the sprites for the game.

`audio.js` - Responsible for loading and playing the soundtrack and sound effects for the game.


## Sample Code

One of the challenges in building Infinity Run was generating terrain objects in such a way that they would provide a challenge to the player without creating impossible situations that could lead to frustrating deaths. To address this problem I implemented the following process for creating terrain objects. First, I choose a height for the terrain and whether it would be upside-down relative to the previous one. Next, I calculate the longest jump possible based on the difference between that height and the height of the last terrain. Finally I multiply that distance by a randomized number selected from a range that increases over time, but is always less than 1.

```javascript
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
```

## Future Directions

* Creating more interesting obstacles
* Adding other movement options for the player
* Implementing enemies with basic AI
