var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // properties
            /**
             * Returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             *
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * Returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            get: function () {
                return this._highscoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score == 2000 &&
                    managers.Game.CurrentState == config.Scene.PLAY1) {
                    this.HighScore = this._score;
                    managers.Game.CurrentState = config.Scene.PLAY2;
                }
                if (this._score == 4000 &&
                    managers.Game.CurrentState == config.Scene.PLAY2) {
                    this.HighScore = this._score;
                    managers.Game.CurrentState = config.Scene.PLAY3;
                }
                if (this._score == 20000 &&
                    managers.Game.CurrentState == config.Scene.PLAY3) {
                    this.HighScore = this._score;
                    managers.Game.CurrentState = config.Scene.END;
                }
                managers.Game.Score = this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highscore;
            },
            set: function (newValue) {
                this._highscore = newValue;
                //this.HighScoreLabel.text = "High Score: " + this._highscore;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 370, 20, false);
            this.Reset();
            this._highscoreLabel = new objects.Label("Game Over", "60px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.HighScore = 0;
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 3;
            this.Score = 0;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map