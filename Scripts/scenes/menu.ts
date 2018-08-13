namespace scenes {
  export class Menu extends objects.Scene {
    // member variables
    private _level1: objects.Button;
    private _level2: objects.Button;
    private _level3: objects.Button;
    private _backButton: objects.Button;
    private _space: objects.Space;
    private _playButton: objects.Button;

    // constructors
    constructor() {
      super();
      managers.Game.FinalLevel = false;
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._space = new objects.Space();

      this._level1 = new objects.Button("level1", 170, 270, true);
      this._level2 = new objects.Button("level2", 300, 270, true);
      this._level3 = new objects.Button("level3", 430, 270, true);
      this._backButton = new objects.Button("BackButton", 300, 380, true);
      this._playButton = new objects.Button("play", 310, 140, true);

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
      console.log(`Starting - START SCENE`);
      this.addChild(this._space);

      this.addChild(this._level1);
      this.addChild(this._level2);
      this.addChild(this._level3);
      this.addChild(this._backButton);

      this.addChild(this._playButton);

      this._level1.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 1;
        },
        this
      );

      this._level2.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 2;
        },
        this
      );
      this._level3.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          managers.Game.Level = 3;
        },
        this
      );
      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
      this._playButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.PLAY1;
        },
        this
      );
    }
  }
}
