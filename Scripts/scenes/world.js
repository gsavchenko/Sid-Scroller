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
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._food = new objects.Food("food");
            this._food.x = 400;
            this._food.y = 350;
            this.addChild(this._food);
            this._scrollableObjectContainer = new createjs.Container();
            this._scrollableObjectContainer.addChild(this._imageBackground);
            this._scrollableObjectContainer.addChild(this._player);
            this._scrollableObjectContainer.addChild(this._food);
            this.addChild(this._scrollableObjectContainer);
            stage.addChild(this);
        };
        // Update objects in scene
        World.prototype.update = function () {
            this._player.update();
            if (this._player.x + 635 <= this._scrollableObjectContainer.getBounds().width)
                this._scrollableObjectContainer.regX += 2;
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