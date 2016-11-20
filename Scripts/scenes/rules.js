/*
    Scenes module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Rules
    Description:    Rules scene that contains all assets for player instructions
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    11/20/2016   changed image for instructions
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Rules = (function (_super) {
        __extends(Rules, _super);
        // Menu Class Contructor
        function Rules() {
            _super.call(this);
        }
        Rules.prototype.start = function () {
            console.log("Rules Scene Started");
            this._menuBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 150);
            this._menuBtn.on("click", this._menuBtnClick, this);
            this._rules = new createjs.Bitmap(assets.getResult("Rules"));
            // Add to global stage container in draw order
            stage.addChild(this);
            stage.addChild(this._rules);
            stage.addChild(this._menuBtn);
        };
        Rules.prototype.update = function () {
        };
        // Menu button method
        Rules.prototype._menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Rules;
    }(objects.Scene));
    scenes.Rules = Rules;
})(scenes || (scenes = {}));
//# sourceMappingURL=rules.js.map