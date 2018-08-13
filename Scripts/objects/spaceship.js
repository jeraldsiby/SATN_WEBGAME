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
var objects;
(function (objects) {
    var Spaceship = /** @class */ (function (_super) {
        __extends(Spaceship, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Spaceship
         */
        function Spaceship() {
            var _this = _super.call(this, "spaceship") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Spaceship.prototype._checkBounds = function () {
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
        };
        // public methods
        Spaceship.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Spaceship.prototype.Update = function () {
            if (managers.keyboard.keycode == 39) {
                this.x += 10;
            }
            else if (managers.keyboard.keycode == 37) {
                this.x -= 10;
            }
            else if (managers.keyboard.keycode == 38) {
                this.y -= 10;
            }
            else if (managers.keyboard.keycode == 40) {
                this.y += 10;
            }
            //this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Spaceship.prototype.Reset = function () { };
        return Spaceship;
    }(objects.GameObject));
    objects.Spaceship = Spaceship;
})(objects || (objects = {}));
//# sourceMappingURL=spaceship.js.map