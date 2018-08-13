namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _spaceship: objects.Spaceship;
    private _space: objects.Space;
    private _spacestation: objects.SpaceStation;
    private _enemies: objects.Enemy[];
    private _enemyNum: number;
    private Level: Number;

    public backgroundSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildClouds(): void {
      for (let count = 0; count < this._enemyNum; count++) {
        this._enemies.push(new objects.Enemy());
        //this._enemies[count] = new objects.Cloud();
      }
    }

    // public methods
    public Start(): void {
      this.backgroundSound = createjs.Sound.play("background");
      this.backgroundSound.loop = -1;
      this.backgroundSound.volume = 0.1;

      this._spaceship = new objects.Spaceship();
      this._space = new objects.Space();
      this._spacestation = new objects.SpaceStation();

      // creates an empty array of type Cloud
      this._enemies = new Array<objects.Enemy>();
      this.Level = managers.Game.Level;
      if (this.Level == 1) {
        this._enemyNum = 1;
      } else if (this.Level == 2) {
        this._enemyNum = 3;
      } else if (this.Level == 3) {
        this._enemyNum = 5;
      }

      this._buildClouds();

      this.Main();
    }

    public Update(): void {
      this._spaceship.Update();
      this._space.Update();
      this._spacestation.Update();

      managers.Collision.check(this._spaceship, this._spacestation);

      this._enemies.forEach(enemy => {
        enemy.Update();
        managers.Collision.check(this._spaceship, enemy);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the ocean to the scene
      this.addChild(this._space);

      // adding the island to the scene
      this.addChild(this._spacestation);

      // adding the plane to the scene
      this.addChild(this._spaceship);

      // adding the cloud to the scene
      for (const enemy of this._enemies) {
        this.addChild(enemy);
      }

      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
    }
  }
}
