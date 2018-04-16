# Infinite Run

## Overview

Infinite Run is a sidescrolling game where the player is forced to keep moving at a minimum pace that increases over time. There is no win condition - the goal is simply to cover as much distance as possible before hitting an obstacle and dying. While there will be only one level, the difficulty will ramp up as time progresses and force an eventual end to the game.

## Functionality

Infinite run will include the following functionality:

* [ ] The ability to modulate the speed of the character (as long as it is faster than the minimum and always in a rightward direction)
* [ ] The ability to jump and duck to avoid obstacles
* [ ] A measure of how far the player has traveled in each game, as well as a highest achieved score in the current session
* [ ] Sprites
* [ ] Music and sound effects, which can be muted
* [ ] A directions modal explaining the point of the game and the control scheme

## Architecture

The technologies used for the project will be:

* Vanilla JavaScript for the game logic
* HTML5 Canvas will be used to render the game
* Web Audio API will be used for in game music and sound effects
* Webpack will be used to bundle the scripts and manage dependencies

The logic for the game itself will be divided up as follows:

`game.js` - Keeps track of the overall game state. Holds all of the objects and an instance of GameView, on which it calls render() periodically.

`gameView.js` - Determines how each snapshot of game state should be displayed to the player. Holds a reference to the context of the canvas.

`hero.js` - Responsible for the behavior of the player character. Will enforce the minimum running speed and have methods to jump, duck and run faster or slower.

`terrain.js` - Contains the terrain class which will represent static (probably rectangular) objects that the player will run on top of.

`obstacle.js` - Contains objects which are fatal to the player if they come into contact with each other

`audio.js` - Responsible for playing the soundtrack and sound effects for the game

`world.js` - Will contain information about the specific position of the terrain and obstacles that the player will navigate.

## Implementation Timeline

Day 1

* [ ] Set up the project skeleton, including webpack, an entry .js file, and an index.html file with the canvas element
* [ ] Make it possible for the player to move and jump while being affected by gravity and walking on terrain objects

Day 2

* [ ] Implement obstacles, collision detection, and end the game when a player collides with an obstacle or misses a jump over a gap
* [ ] Include sprites/art for the player, the terrain, and the environment

Day 3

* [ ] Implement music and sound effects
* [ ] Keep track of distance traveled within each game and a highest achieved distance between games
* [ ] Enforce a minimum running speed that grows over time

Day 4

* [ ] Build the rest of the page surrounding the canvas
* [ ] Create the actual world that the player will run in, looping it when maximum difficulty in terms of environment is reached.
* [ ] Polish the feel of the movement, controls, and collision detection

## Bonus Features

* Procedurally generated content
* Adding other movement options for the player
