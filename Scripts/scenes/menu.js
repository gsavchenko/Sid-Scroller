var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scenes module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Menu
    Description:    Menu scene that contains all assets and functionality associated with the menu itself
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
*/
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        // Initialize variables
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._buttonPlay = new objects.Button("Play_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
            this._buttonPlay.on("click", this._playButtonClick, this);
            this._buttonRules = new objects.Button("Rules_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 16);
            this._buttonRules.on("click", this._rulesButtonClick, this);
            this._imageTitle = new createjs.Bitmap(assets.getResult("Title_Image"));
            this._imageTitle.x = config.Screen.CENTER_X - 100;
            this._imageTitle.y = -15;
            // Add to global stage container in draw order
            stage.addChild(this);
            stage.addChild(this._buttonPlay);
            stage.addChild(this._buttonRules);
            stage.addChild(this._imageTitle);
        };
        Menu.prototype.update = function () {
        };
        // Play button handler method
        Menu.prototype._playButtonClick = function (event) {
            scene = config.Scene.WORLD;
            changeScene();
        };
        // Rules button handler method
        Menu.prototype._rulesButtonClick = function (event) {
            scene = config.Scene.RULES;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map