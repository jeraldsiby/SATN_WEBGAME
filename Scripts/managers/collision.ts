namespace managers {
  export class Collision {

    public static checkBulletEnemy(bullet: objects.Bullet, enemy: objects.Enemy): void {
      let P1 = new math.Vec2(bullet.x, bullet.y);
      let P2 = new math.Vec2(enemy.x, enemy.y);

      if (
        math.Vec2.Distance(P1, P2) <
        bullet.halfHeight + enemy.halfHeight
      ) {
        bullet.y = -10;
        enemy.y = -10;
        managers.Game.ScoreBoard.Score += 100;
      }

    }

    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (
        math.Vec2.Distance(P1, P2) <
        object1.halfHeight + object2.halfHeight
      ) {
        if (!object2.isColliding) {
          object2.isColliding = true;
          switch (object2.name) {
            case "spacestation":
              let yaySound = createjs.Sound.play("yay");
              yaySound.volume = 0.2;
              managers.Game.ScoreBoard.Score += 100;
              managers.Game.ScoreBoard.Lives += Math.random() * 10 < 2 ? 1 : 0;
              break;

            case "enemy":
              let thunderSound = createjs.Sound.play("thunder");
              thunderSound.volume = 0.2;
              managers.Game.ScoreBoard.Lives--;
              break;

            case "boss":
              let thunderSound1 = createjs.Sound.play("thunder");
              thunderSound1.volume = 0.2;
              managers.Game.ScoreBoard.Lives--;
              break;
          }
        }
      } else {
        object2.isColliding = false;
      }
    }
  }
}
