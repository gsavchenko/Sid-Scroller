var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scenes module to group all user-defined scenes  under the same "namespace aka module"
    World scene that contains all assets and functionality associated with the world itself
    ------------------------------------------------------------------------------------
    Class:          World
    Description:    World scene that contains all assets and functionality associated with the game itself
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Commented code and removed unnecessary variables

*/
var scenes;
(function (scenes) {
    var World = (function (_super) {
        __extends(World, _super);
        function World() {
            _super.call(this);
        }
        // Initialize variables
        World.prototype.start = function () {
            console.log("Game Started");
            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;
            this._imageBackground = new createjs.Bitmap(assets.getResult("Background_Image"));
            this.addChild(this._imageBackground);
            this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 60, config.Screen.CENTER_Y + 100);
            this._scoreCount = 0;
            this._score = new objects.Label("HIGHSCORE: " + this._scoreCount, "30px Impact", "#ffffff", 100, 25);
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._fm = new managers.Food_Manager(10);
            this._fm.addToScene(this);
            this._scrollableObjectContainer = new createjs.Container();
            this._scrollableObjectContainer.addChild(this._imageBackground);
            this._scrollableObjectContainer.addChild(this._player);
            this._fm.addToScrollContainer(this._scrollableObjectContainer);
            this.addChild(this._scrollableObjectContainer);
            stage.addChild(this);
            stage.addChild(this._score);
        };
        // Update objects in scene
        World.prototype.update = function () {
            var _this = this;
            this._player.update();
            this._fm.update();
            if (this._player.x + 635 <= this._scrollableObjectContainer.getBounds().width)
                this._scrollableObjectContainer.regX += 2;
            this._fm.foodList.forEach(function (food) {
                if (collision.circleCircleCheck(_this._player, food)) {
                    _this._scrollableObjectContainer.removeChild(food);
                    _this.removeChild(food);
                    food.isDead = true;
                    _this._scoreCount += 1;
                    _this._score.text = "HIGHSCORE: " + _this._scoreCount;
                }
            });
            if (this._player.x >= 1280) {
                this._score.y = config.Screen.CENTER_Y;
                this._buttonMenu.on("click", this.menuButtonClick, this);
                stage.addChild(this._buttonMenu);
                if (this._scoreCount < 10) {
                    this._score.text = "YOU LOSE TRY AGAIN \n\n        HIGHSCORE: " + this._scoreCount;
                    this._score.x = config.Screen.CENTER_X + 30;
                }
                else {
                    this._score.text = "CONGRAGULATIONS YOU WIN \n\n                  HIGHSCORE: " + this._scoreCount;
                    this._score.x = config.Screen.CENTER_X - 20;
                }
            }
        };
        // Menu button method
        World.prototype.menuButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return World;
    }(objects.Scene));
    scenes.World = World;
})(scenes || (scenes = {}));
//# sourceMappingURL=world.js.map