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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Bullet
         */
        //constructor
        function Bullet(x, y) {
            var _this = _super.call(this, "bullet") || this;
            _this._horizontalSpeed = 0;
            _this._initX = x;
            _this._initY = y;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function (x, y) {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight || this.y < 0) {
                this._initX = x;
                this._initY = y;
                this.Reset();
            }
        };
        // public methods
        Bullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 8; // between 5 and 15 ppf
            this.Reset();
        };
        Bullet.prototype.UpdateBullet = function (x, y) {
            this.y -= this._verticalSpeed;
            this.x += this._horizontalSpeed;
            console.log("x, y: " + this.x + ", " + this.y);
            this._checkBounds(x, y);
        };
        Bullet.prototype.Reset = function () {
            this.y = this._initY;
            this.x = this._initX;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map