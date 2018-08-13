namespace managers {
  export class ScoreBoard {
    // member variables
    private _lives: number;
    private _score: number;
    private _highscore: number;
    private _livesLabel: objects.Label;
    private _scoreLabel: objects.Label;
    private _highscoreLabel: objects.Label;

    // properties

    /**
     * Returns a reference to the LivesLabel object
     *
     * @readonly
     * @type {objects.Label}
     *
     */
    get LivesLabel(): objects.Label {
      return this._livesLabel;
    }

    /**
     * Returns a reference to the ScoreLabel object
     *
     * @readonly
     * @type {objects.Label}
     */
    get ScoreLabel(): objects.Label {
      return this._scoreLabel;
    }

    get HighScoreLabel(): objects.Label {
      return this._highscoreLabel;
    }

    get Lives(): number {
      return this._lives;
    }

    set Lives(newValue: number) {
      this._lives = newValue;
      if (this._lives <= 0) {
        managers.Game.CurrentState = config.Scene.END;
      } else {
        this.LivesLabel.text = "Lives: " + this._lives;
      }
    }

    get Score(): number {
      return this._score;
    }

    set Score(newValue: number) {
      this._score = newValue;
      this.ScoreLabel.text = "Score: " + this._score;
      if (
        this._score == 2000 &&
        managers.Game.CurrentState == config.Scene.PLAY1
      ) {
        this.HighScore = this._score;
        managers.Game.CurrentState = config.Scene.PLAY2;
      }
      if (
        this._score == 4000 &&
        managers.Game.CurrentState == config.Scene.PLAY2
      ) {
        this.HighScore = this._score;
        managers.Game.CurrentState = config.Scene.PLAY3;
      }
      if (
        this._score == 20000 &&
        managers.Game.CurrentState == config.Scene.PLAY3
      ) {
        this.HighScore = this._score;
        managers.Game.CurrentState = config.Scene.END;
      }
      managers.Game.Score = this._score;
    }

    get HighScore(): number {
      return this._highscore;
    }

    set HighScore(newValue: number) {
      this._highscore = newValue;
      //this.HighScoreLabel.text = "High Score: " + this._highscore;
    }

    // constructor
    constructor() {
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._livesLabel = new objects.Label(
        "Lives: 99",
        "30px",
        "Consolas",
        "#FFFF00",
        20,
        20,
        false
      );
      this._scoreLabel = new objects.Label(
        "Score: 99999",
        "30px",
        "Consolas",
        "#FFFF00",
        370,
        20,
        false
      );
      this.Reset();
      this._highscoreLabel = new objects.Label(
        "Game Over",
        "60px",
        "Dock51",
        "#FFFF00",
        config.Screen.HALF_WIDTH,
        config.Screen.HALF_HEIGHT,
        true
      );

      this.HighScore = 0;
      this.Reset();
    }

    public Reset(): void {
      this.Lives = 3;
      this.Score = 0;
      this.HighScore = 0;
    }
  }
}
