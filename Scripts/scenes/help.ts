namespace scenes {
  export class Help extends objects.Scene {
    // member variables
    private _headerLabel: objects.Label;
    private _bodyLabel: objects.Label;
    private _backButton: objects.Button;
    private _controls: objects.Button;
    private _space: objects.Space;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._space = new objects.Space();

      this._headerLabel = new objects.Label(
        "Instructions",
        "60px",
        "Consolas",
        "#ffffff",
        320,
        40,
        true
      );
      this._bodyLabel = new objects.Label(
        "1. Movement of space ship is done using keyboard." +
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
          "\n",
        "20px",
        "Consolas",
        "#ffffff",
        320,
        180,
        true
      );
      this._backButton = new objects.Button("BackButton", 320, 400, true);
      this._controls = new objects.Button("controls", 320, 300, true);
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
      console.log(`Starting - HELP SCENE`);
      this.addChild(this._space);
      this.addChild(this._headerLabel);

      this.addChild(this._bodyLabel);
      this.addChild(this._backButton);
      this.addChild(this._controls);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
    }
  }
}
