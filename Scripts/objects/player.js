var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Player
    Description:    PLayer class extends GameObject and manages player object
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    11/20/2016   Updated player controls
*/
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, gameAtlas, imageString, "");
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        // Set initial position of player
        Player.prototype.start = function () {
            this.x = 35;
            this.y = 290;
        };
        // Check for input and update player
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
            // Check for input controls
            if (controls.UP) {
                this.moveUp();
            }
            if (controls.DOWN) {
                this.moveDown();
            }
            if (this.x < 1280)
                this.x += 2;
        };
        // Finite state machine pattern to check for input
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    controls.UP = true;
                    break;
                case keys.S:
                    controls.DOWN = true;
                    break;
            }
        };
        // Check which keys have been pressed
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
            }
        };
        // Move the player up
        Player.prototype.moveUp = function () {
            this.y -= 5;
        };
        // Move the player down
        Player.prototype.moveDown = function () {
            this.y += 5;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map