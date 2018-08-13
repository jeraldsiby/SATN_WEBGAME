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
    var Space = /** @class */ (function (_super) {
        __extends(Space, _super);
        /**
         * Creates an instance of sky.
         * @memberof Space
         */
        function Space() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("space")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Space.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Space.prototype.Start = function () {
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        Space.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Space.prototype.Reset = function () {
            this.y = -180;
        };
        return Space;
    }(createjs.Bitmap));
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map