namespace managers {
  export class Game {
    public static AssetManager: createjs.LoadQueue;
    public static CurrentScene: objects.Scene;
    public static CurrentState: config.Scene;
    public static Stage: createjs.Stage;
    public static ScoreBoard: managers.ScoreBoard;
    public static Level: Number;
    public static Score: Number;
    public static FinalLevel: boolean;
  }
}
