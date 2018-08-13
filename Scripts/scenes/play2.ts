namespace scenes {
  export class Play2 extends objects.Scene {
    // member variables
    private _spaceship: objects.Spaceship;
    private _space: objects.Space;
    private _spacestation: objects.SpaceStation;
    private _enemies: objects.Enemy[];
    private _enemyNum: number;
    private Level: Number;
    private levelLablel: objects.Label;
    private _bullet: objects.Bullet;
    private _bullet2: objects.Bullet;

    public engineSound: createjs.AbstractSoundInstance;

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
      this.levelLablel = new objects.Label(
        "LEVEL - 2",
        "40px",
        "Consolas",
        "#ffffff",
        280,
        70,
        true
      );

      this.engineSound = createjs.Sound.play("engine");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._spaceship = new objects.Spaceship();
      this._space = new objects.Space();
      this._spacestation = new objects.SpaceStation();

      // creates an empty array of type Cloud
      this._enemies = new Array<objects.Enemy>();
      this.Level = managers.Game.Level;
      this._enemyNum = 3;

      this._buildClouds();

      this._bullet = new objects.Bullet(this._spaceship.x, this._spaceship.y);
      
      this._bullet2 = new objects.Bullet(this._spaceship.x, this._spaceship.y+200);

      this.Main();
    }

    public Update(): void {
      this._spaceship.Update();
      this._space.Update();
      this._spacestation.Update();

      managers.Collision.check(this._spaceship, this._spacestation);

      this._enemies.forEach(cloud => {
        cloud.Update();
        managers.Collision.check(this._spaceship, cloud);
      });

      this._bullet.UpdateBullet(this._spaceship.x-5, this._spaceship.y);

      this._enemies.forEach(enemy => {
        managers.Collision.checkBulletEnemy(this._bullet, enemy);
      });

      this._bullet2.UpdateBullet(this._spaceship.x+5, this._spaceship.y);

      this._enemies.forEach(enemy => {
        managers.Collision.checkBulletEnemy(this._bullet2, enemy);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY2 SCENE`);

      // adding the ocean to the scene
      this.addChild(this._space);

      // adding the island to the scene
      this.addChild(this._spacestation);

      // adding the plane to the scene
      this.addChild(this._spaceship);

      // adding the cloud to the scene
      for (const cloud of this._enemies) {
        this.addChild(cloud);
      }
      this.addChild(this.levelLablel);
      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
      this.addChild(this._bullet);
      this.addChild(this._bullet2);
    }
  }
}
