const PLAYER_HEIGHT = 30;
const PLAYER_WIDTH = 10;

class Player {
  constructor(pos) {
    this.pos = pos;
    this.velocity = [0, 0];
    this.onGround = true;
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
    this.pos[0] += this.velocity[0];
    this.pos[1] += this.velocity[1];

    if (this.pos[1] < 100) {
      this.pos[1] = 100;
      this.velocity[1] = 0;
      this.onGround = true;
    }
  }
}

Player.MIN_SPEED = 5;
Player.MAX_SPEED = 10;
Player.ACCELERATION = 3;
Player.JUMP_VELOCITY = 30;

export default Player;
