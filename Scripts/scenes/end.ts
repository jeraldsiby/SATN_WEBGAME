namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _backButton: objects.Button;
    private _play_again: objects.Button;
    private _space: objects.Space;
    private scoreDefined: Number;
    private _gameOver: objects.Label;
    private _gameOver1: objects.Label;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._space = new objects.Space();

      this.scoreDefined = managers.Game.ScoreBoard.Score;
      if(this.scoreDefined >= 20000){
        this._gameOver1 = new objects.Label(
          "GAME OVER : YOU WIN " + "\n",
          "40px",
          "Consolas",
          "#ffffff",
          320,
          140,
          true
        );
      }
      else{
        this._gameOver1 = new objects.Label(
          "GAME OVER : YOU LOST " + "\n",
          "40px",
          "Consolas",
          "#ffffff",
          320,
          140,
          true
        );
      }

      this._endLabel = new objects.Label(
        "Score: " + this.scoreDefined.toString() + "\n",
        "40px",
        "Consolas",
        "#ffffff",
        320,
        200,
        true
      );
      this._backButton = new objects.Button("Home", 320, 300, true);
      this._play_again = new objects.Button("PlayAgain", 320, 400, true);

      this.Main();
    }

    public Update(): void {
      this._space.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - END SCENE`);
      this.addChild(this._space);
      if (this.scoreDefined == 1700) {
        this.addChild(this._gameOver);
      } else {
        this.addChild(this._gameOver1);
      }

      this.addChild(this._endLabel);

      //this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

      this.addChild(this._backButton);
      this.addChild(this._play_again);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );

      this._play_again.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );
    }
  }
}
