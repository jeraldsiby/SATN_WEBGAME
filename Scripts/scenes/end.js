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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._space = new objects.Space();
            this.scoreDefined = managers.Game.ScoreBoard.Score;
            if (this.scoreDefined >= 20000) {
                this._gameOver1 = new objects.Label("GAME OVER : YOU WIN " + "\n", "40px", "Consolas", "#ffffff", 320, 140, true);
            }
            else {
                this._gameOver1 = new objects.Label("GAME OVER : YOU LOST " + "\n", "40px", "Consolas", "#ffffff", 320, 140, true);
            }
            this._endLabel = new objects.Label("Score: " + this.scoreDefined.toString() + "\n", "40px", "Consolas", "#ffffff", 320, 200, true);
            this._backButton = new objects.Button("Home", 320, 300, true);
            this._play_again = new objects.Button("PlayAgain", 320, 400, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._space.Update();
        };
        End.prototype.Reset = function () { };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._space);
            if (this.scoreDefined == 1700) {
                this.addChild(this._gameOver);
            }
            else {
                this.addChild(this._gameOver1);
            }
            this.addChild(this._endLabel);
            //this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._backButton);
            this.addChild(this._play_again);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            this._play_again.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map