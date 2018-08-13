var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.checkBulletEnemy = function (bullet, enemy) {
            var P1 = new math.Vec2(bullet.x, bullet.y);
            var P2 = new math.Vec2(enemy.x, enemy.y);
            if (math.Vec2.Distance(P1, P2) <
                bullet.halfHeight + enemy.halfHeight) {
                bullet.y = -10;
                enemy.y = -10;
                managers.Game.ScoreBoard.Score += 100;
            }
        };
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "spacestation":
                            var yaySound = createjs.Sound.play("yay");
                            yaySound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += 100;
                            managers.Game.ScoreBoard.Lives += Math.random() * 10 < 2 ? 1 : 0;
                            break;
                        case "enemy":
                            var thunderSound = createjs.Sound.play("thunder");
                            thunderSound.volume = 0.2;
                            managers.Game.ScoreBoard.Lives--;
                            break;
                        case "boss":
                            var thunderSound1 = createjs.Sound.play("thunder");
                            thunderSound1.volume = 0.2;
                            managers.Game.ScoreBoard.Lives--;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map