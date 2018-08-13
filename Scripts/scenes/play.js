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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy());
                //this._enemies[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.backgroundSound = createjs.Sound.play("background");
            this.backgroundSound.loop = -1;
            this.backgroundSound.volume = 0.1;
            this._spaceship = new objects.Spaceship();
            this._space = new objects.Space();
            this._spacestation = new objects.SpaceStation();
            // creates an empty array of type Cloud
            this._enemies = new Array();
            this.Level = managers.Game.Level;
            if (this.Level == 1) {
                this._enemyNum = 1;
            }
            else if (this.Level == 2) {
                this._enemyNum = 3;
            }
            else if (this.Level == 3) {
                this._enemyNum = 5;
            }
            this._buildClouds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._spaceship.Update();
            this._space.Update();
            this._spacestation.Update();
            managers.Collision.check(this._spaceship, this._spacestation);
            this._enemies.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.check(_this._spaceship, enemy);
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._space);
            // adding the island to the scene
            this.addChild(this._spacestation);
            // adding the plane to the scene
            this.addChild(this._spaceship);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._enemies; _i < _a.length; _i++) {
                var enemy = _a[_i];
                this.addChild(enemy);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map