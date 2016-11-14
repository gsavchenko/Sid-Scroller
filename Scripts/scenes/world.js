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
            this._timer = 0; // Game timer
            this._isGameOver = false; // Game over variable        
            this._difficultyTimer = 0; // Timer for increasing the difficulty
            this._DIFFICULTY_INCREASE_INVERVAL = 5000; // 1000 = 1 second
        }
        // Initialize variables
        World.prototype.start = function () {
            console.log("Game Started");
            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;
            this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);
            this._score = new objects.Label("HIGHSCORE: " + this._timer, "30px Impact", "#ffffff", 150, 25);
            this._timer = 0;
            this._mm = new managers.Meteor_Manager(1);
            this._mm.addToScene(this);
            this._moon = new objects.Moon("moon");
            this.addChild(this._moon);
            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);
            stage.addChild(this);
            stage.addChild(this._score);
        };
        // Update objects in scene
        World.prototype.update = function () {
            var _this = this;
            this._timer += createjs.Ticker.interval;
            this._difficultyTimer += createjs.Ticker.interval;
            this._mm.update();
            this._astronaut.update();
            // Update score until game is over
            if (!this._isGameOver)
                this._score.text = "HIGHSCORE: " + Math.round(this._timer) / 1000;
            // Loop through all meteors in the scene and check for collision with the player
            this._mm.meteorList.forEach(function (meteor) {
                if (collision.circleCircleCheck(meteor, _this._astronaut)) {
                    _this.removeChild(_this._astronaut);
                    _this._isGameOver = true;
                    _this._score.x = config.Screen.CENTER_X + 80;
                    _this._score.y = config.Screen.CENTER_Y;
                    _this._buttonMenu.on("click", _this.menuButtonClick, _this);
                    stage.addChild(_this._buttonMenu);
                    stage.addChild(_this._imageGameOver);
                }
            });
            // Check for collision between astronaut and moon
            if (collision.circleCircleCheck(this._astronaut, this._moon)) {
                // Reset jumping
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;
                // Check for collision with moon
                if (this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if (this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else {
                // If not colliding with moon astronaut must be falling
                this._astronaut._falling = true;
                this._astronaut.collideRight = false;
                this._astronaut.collideLeft = false;
            }
            if (this._difficultyTimer >= this._DIFFICULTY_INCREASE_INVERVAL && !this._isGameOver) {
                this._mm.createMeteor();
                this._mm.maxSpeed++;
                this._difficultyTimer = 0;
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