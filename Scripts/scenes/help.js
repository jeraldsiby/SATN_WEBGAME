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
    var Help = /** @class */ (function (_super) {
        __extends(Help, _super);
        // constructors
        function Help() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Help.prototype.Start = function () {
            this._space = new objects.Space();
            this._headerLabel = new objects.Label("Instructions", "60px", "Consolas", "#ffffff", 320, 40, true);
            this._bodyLabel = new objects.Label("1. Movement of space ship is done using keyboard." +
                "\n" +
                "\n" +
                "2. Go over the alien objects to gain points and lives" +
                "\n" +
                "\n" +
                "3. Avoid enemy collissions to keep up the lives." +
                "\n" +
                "\n" +
                "4. Difficulty increases as level changes." +
                "\n" +
                "\n" +
                "5. Fight boss in Level 3" +
                "\n" +
                "\n" +
                "6. Use keyboard controls as shown below" +
                "\n" +
                "\n" +
                "\n", "20px", "Consolas", "#ffffff", 320, 180, true);
            this._backButton = new objects.Button("BackButton", 320, 400, true);
            this._controls = new objects.Button("controls", 320, 300, true);
            this.Main();
        };
        Help.prototype.Update = function () {
            this._space.Update();
        };
        Help.prototype.Reset = function () { };
        Help.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Help.prototype.Main = function () {
            console.log("Starting - HELP SCENE");
            this.addChild(this._space);
            this.addChild(this._headerLabel);
            this.addChild(this._bodyLabel);
            this.addChild(this._backButton);
            this.addChild(this._controls);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Help;
    }(objects.Scene));
    scenes.Help = Help;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map