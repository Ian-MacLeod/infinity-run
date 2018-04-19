import { spriteLocations } from "./sprites";
import GameObject from "./gameObject";
import { drawFlipped } from "./utils";

class Player extends GameObject {
  constructor(pos, game) {
    super(pos, Player.WIDTH, Player.HEIGHT);
    this.game = game;
    this.sprites = spriteLocations.player;
    this.velocity = [0, 0];
    this.onGround = false;
    this.gravityMultiplier = 1;
  }

  getSpeed() {
    return this.velocity[0];
  }

  draw(ctx, distance) {
    const drawArgs = [
      this.sprites.imageEl,
      ...this.sprites.locations.run[
        Math.floor(distance / 10) % this.sprites.locations.run.length
      ],
      this.pos[0],
      this.pos[1],
      Player.WIDTH,
      Player.HEIGHT
    ];
    if (this.gravityMultiplier < 0) {
      drawFlipped(ctx, ...drawArgs, true);
    } else {
      ctx.drawImage(...drawArgs);
    }
  }

  nextState(input, delta) {
    if (this.onGround && input.isPressed.g) {
      this.gravityMultiplier *= -1;
    }
    if (input.isPressed.space && this.onGround) {
      this.velocity[1] = Player.JUMP_VELOCITY * this.gravityMultiplier;
    }
    this.velocity[1] += Player.GRAVITY * this.gravityMultiplier;
    this.pos[1] += this.velocity[1];
  }

  currentAcceleration() {
    return this.onGround ? Player.ACCELERATION : Player.DIRECTIONAL_INFLUENCE;
  }

  boundBy(terrainObjects) {
    this.onGround = false;
    terrainObjects.forEach(terrain => {
      const collision = this.collision(terrain);
      if (collision[0] !== 0 && collision[1] !== 0) {
        this.hitTerrain(collision);
      }
    });
  }

  hitTerrain(collision) {
    if (
      Math.abs(collision[0]) > Math.abs(collision[1]) - 10 ||
      collision[0] > 0
    ) {
      this.pos[1] += collision[1];
      if (collision[1] < 0 !== this.gravityMultiplier < 0) {
        this.onGround = true;
        this.velocity[1] = 0;
      }
    } else {
      this.game.gameOver();
    }
  }
}

Player.WIDTH = 36;
Player.HEIGHT = 48;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 2;
Player.DIRECTIONAL_INFLUENCE = 0.5;
Player.JUMP_VELOCITY = -15;
Player.GRAVITY = 0.6;

export default Player;
