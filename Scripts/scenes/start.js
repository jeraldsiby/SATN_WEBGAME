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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            managers.Game.FinalLevel = false;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._space = new objects.Space();
            this._welcomeLabel = new objects.Label("Space Odyssey", "60px", "Limelight", "#ffffff", 320, 200, true);
            this._menuButton = new objects.Button("MainMenu", 240, 340, true);
            this._startButton = new objects.Button("StartButton", 320, 340, true);
            this._helpButton = new objects.Button("HelpButton", 400, 340, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._space.Update();
        };
        Start.prototype.Reset = function () { };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._space);
            this.addChild(this._welcomeLabel);
            //this.addChild(this._startButton);
            this.addChild(this._helpButton);
            this.addChild(this._menuButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._menuButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
            this._helpButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.HELP;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map