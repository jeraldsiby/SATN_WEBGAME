var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play3 = /** @class */ (function (_super) {
        __extends(Play3, _super);
        // constructors
        function Play3() {
            var _this = _super.call(this) || this;
            managers.Game.FinalLevel = true;
            _this.Start();
            return _this;
        }
        // private methods
        Play3.prototype._buildClouds = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy());
                //this._enemies[count] = new objects.Cloud();
            }
        };
        // public methods
        Play3.prototype.Start = function () {
            this.levelLablel = new objects.Label("LEVEL - 3", "40px", "Consolas", "#ffffff", 280, 70, true);
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._spaceship = new objects.Spaceship();
            this._space = new objects.Space();
            this._spacestation = new objects.SpaceStation();
            // creates an empty array of type Cloud
            this._enemies = new Array();
            this.Level = managers.Game.Level;
            this._enemyNum = 5;
            this._buildClouds();
            this._bullet = new objects.Bullet(this._spaceship.x, this._spaceship.y);
            this._bullet._horizontalSpeed = 0;
            this._bullet2 = new objects.Bullet(this._spaceship.x, this._spaceship.y);
            this._bullet2._horizontalSpeed = 7.5;
            this._bullet3 = new objects.Bullet(this._spaceship.x, this._spaceship.y);
            this._bullet3._horizontalSpeed = -7.5;
            this.Main();
        };
        Play3.prototype.Update = function () {
            var _this = this;
            this._spaceship.Update();
            this._space.Update();
            this._spacestation.Update();
            managers.Collision.check(this._spaceship, this._spacestation);
            this._enemies.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._spaceship, cloud);
            });
            this._bullet.UpdateBullet(this._spaceship.x, this._spaceship.y);
            this._enemies.forEach(function (enemy) {
                managers.Collision.checkBulletEnemy(_this._bullet, enemy);
            });
            this._bullet2.UpdateBullet(this._spaceship.x, this._spaceship.y);
            this._enemies.forEach(function (enemy) {
                managers.Collision.checkBulletEnemy(_this._bullet2, enemy);
            });
            this._bullet3.UpdateBullet(this._spaceship.x, this._spaceship.y);
            this._enemies.forEach(function (enemy) {
                managers.Collision.checkBulletEnemy(_this._bullet3, enemy);
            });
        };
        Play3.prototype.Reset = function () { };
        Play3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play3.prototype.Main = function () {
            console.log("Starting - PLAY3 SCENE");
            // adding the ocean to the scene
            this.addChild(this._space);
            // adding the island to the scene
            this.addChild(this._spacestation);
            // adding the plane to the scene
            this.addChild(this._spaceship);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._enemies; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(this.levelLablel);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._bullet);
            this.addChild(this._bullet2);
            this.addChild(this._bullet3);
        };
        return Play3;
    }(objects.Scene));
    scenes.Play3 = Play3;
})(scenes || (scenes = {}));
//# sourceMappingURL=play3.js.map