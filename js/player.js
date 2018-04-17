import { spriteLocations } from "./sprites";

class Player {
  constructor(pos, minSpeed = 5) {
    this.pos = pos;
    this.sprites = spriteLocations.player;
    this.minSpeed = minSpeed;
    this.velocity = [0, 0];
    this.onGround = false;
  }

  getSpeed() {
    return this.velocity[0];
  }

  draw(ctx, distance) {
    ctx.fillStyle = "#47d";
    ctx.drawImage(
      this.sprites.imageEl,
      ...this.sprites.locations.run[
        Math.floor(distance / 10) % this.sprites.locations.run.length
      ],
      this.pos[0] - Player.WIDTH,
      500 - (this.pos[1] + Player.HEIGHT),
      Player.WIDTH,
      Player.HEIGHT
    );
  }

  nextState(input, delta) {
    if (input.isPressed.right) {
      this.velocity[0] = Math.min(
        this.velocity[0] + this.currentAcceleration() * delta,
        Player.MAX_SPEED
      );
    } else if (input.isPressed.left) {
      this.velocity[0] = Math.max(
        this.velocity[0] - this.currentAcceleration() * delta,
        this.minSpeed
      );
    }
    if (input.isPressed.space && this.onGround) {
      this.velocity[1] = Player.JUMP_VELOCITY;
      this.onGround = false;
    }
    this.velocity[1] += Player.GRAVITY;
    this.pos[1] += this.velocity[1];
  }

  currentAcceleration() {
    return this.onGround ? Player.ACCELERATION : Player.DIRECTIONAL_INFLUENCE;
  }

  boundBy(terrainObjects, gameOver, prevPos) {
    terrainObjects.forEach(terrain => {
      if (terrain.contains(this.pos)) {
        if (prevPos[1] >= terrain.height) {
          this.hitGround(terrain.height);
        } else {
          gameOver();
        }
      }
    });
  }

  hitGround(height) {
    this.onGround = true;
    this.pos[1] = height;
    this.velocity[1] = 0;
  }
}

Player.WIDTH = 36;
Player.HEIGHT = 48;
Player.MIN_SPEED = 5;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 2;
Player.DIRECTIONAL_INFLUENCE = 0.5;
Player.JUMP_VELOCITY = 15;
Player.GRAVITY = -1;

export default Player;
