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
    var SpaceStation = /** @class */ (function (_super) {
        __extends(SpaceStation, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Spaceship
         */
        function SpaceStation() {
            var _this = _super.call(this, "spacestation") || this;
            _this.Start();
            return _this;
        }
        // private methods
        SpaceStation.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        SpaceStation.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        SpaceStation.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        SpaceStation.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return SpaceStation;
    }(objects.GameObject));
    objects.SpaceStation = SpaceStation;
})(objects || (objects = {}));
//# sourceMappingURL=spacestation.js.map