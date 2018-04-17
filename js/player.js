const PLAYER_HEIGHT = 30;
const PLAYER_WIDTH = 10;

class Player {
  constructor(pos) {
    this.pos = pos;
    this.velocity = [0, 0];
    this.onGround = true;
  }

  getSpeed() {
    return this.velocity[0];
  }

  draw(ctx) {
    ctx.fillStyle = "#47d";
    ctx.fillRect(
      this.pos[0] - PLAYER_WIDTH,
      500 - (this.pos[1] + PLAYER_HEIGHT),
      PLAYER_WIDTH,
      PLAYER_HEIGHT
    );
  }

  nextState(input) {
    if (input.isPressed.right) {
      this.velocity[0] = Math.min(
        this.velocity[0] + Player.ACCELERATION,
        Player.MAX_SPEED
      );
    } else if (input.isPressed.left) {
      this.velocity[0] = Math.max(
        this.velocity[0] - Player.ACCELERATION,
        -Player.MAX_SPEED
      );
    }
    if (input.isPressed.space && this.onGround) {
      this.velocity[1] = Player.JUMP_VELOCITY;
      this.onGround = false;
    }
    this.velocity[1] -= 3;
    this.pos[1] += this.velocity[1];
  }

  boundBy(terrainObjects) {
    terrainObjects.forEach(terrain => {
      if (terrain.contains(this.pos)) {
        this.hitGround(terrain.height);
      }
    });
  }

  hitGround(height) {
    this.onGround = true;
    this.pos[1] = height;
    this.velocity[1] = 0;
  }
}

Player.MIN_SPEED = 5;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 3;
Player.JUMP_VELOCITY = 40;

export default Player;
