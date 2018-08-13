namespace objects {
  export class Spaceship extends objects.GameObject {
    /**
     * Creates an instance of Plane.
     * @memberof Spaceship
     */
    constructor() {
      super("spaceship");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check right boundary
      if (this.x > config.Screen.WIDTH - this.halfWidth) {
        this.x = config.Screen.WIDTH - this.halfWidth;
      }

      // check left boundary
      if (this.x < this.halfWidth) {
        this.x = this.halfWidth;
      }

      // check upper boundary
      if (this.y > config.Screen.HEIGHT - this.halfHeight) {
        this.y = config.Screen.HEIGHT - this.halfHeight;
      }

      // check lower boundary
      if (this.y < this.halfHeight) {
        this.y = this.halfHeight;
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.y = 430;
    }

    public Update(): void {
      if (managers.keyboard.keycode == 39) {
        this.x += 10;
      } else if (managers.keyboard.keycode == 37) {
        this.x -= 10;
      } else if (managers.keyboard.keycode == 38) {
        this.y -= 10;
      } else if (managers.keyboard.keycode == 40) {
        this.y += 10;
      }
      //this.x = managers.Game.Stage.mouseX;
      this._checkBounds();
    }

    public Reset(): void {}
  }
}
