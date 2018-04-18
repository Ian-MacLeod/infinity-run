import { spriteLocations } from "./sprites";
import GameObject from "./gameObject";

class Player extends GameObject {
  constructor(pos, game, minSpeed = 5) {
    super(pos, Player.WIDTH, Player.HEIGHT);
    this.game = game;
    this.sprites = spriteLocations.player;
    this.minSpeed = 1;
    this.velocity = [0, 0];
    this.onGround = false;
    this.gravityMultiplier = 1;
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
      this.pos[0],
      this.pos[1],
      Player.WIDTH,
      Player.HEIGHT
    );
  }

  nextState(input, delta) {
    if (this.onGround && input.isPressed.g) {
      this.gravityMultiplier *= -1;
    }
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
    if (Math.abs(collision[0]) > Math.abs(collision[1])) {
      this.pos[1] += collision[1];
      if (collision[1] < 0 !== this.gravityMultiplier < 0) {
        this.onGround = true;
        this.velocity[1] = 0;
      }
    } else {
      this.velocity[0] = 0;
    }
  }
}

Player.WIDTH = 36;
Player.HEIGHT = 48;
Player.MIN_SPEED = 5;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 2;
Player.DIRECTIONAL_INFLUENCE = 0.5;
Player.JUMP_VELOCITY = -15;
Player.GRAVITY = 0.6;

export default Player;
