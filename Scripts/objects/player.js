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
    George Savchenko    10/28/2016   Updated Comments and deleted uncesseary information
*/
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, gameAtlas, imageString, "");
            // Public variables
            // Track walking into the moon
            this.collideLeft = false;
            this.collideRight = false;
            // Jumping timer
            this._jumpTimer = 0;
            // Private variables
            // Track animations
            this._leftAnimationStarted = false;
            this._rightAnimationStarted = false;
            // Track falling
            this._fallSpeed = 2;
            this._falling = true;
            // Track jumping
            this._isJumping = false;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        // Set initial position of player
        Player.prototype.start = function () {
            this.x = 320;
            this.y = 300;
        };
        // Check for input and update player
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
            // Check for input controls
            if (controls.RIGHT) {
                this.moveRight();
            }
            if (controls.LEFT) {
                this.moveLeft();
            }
            if (controls.JUMP) {
                this.jump();
            }
            // If no buttons are pressed set player to idle
            if (!controls.LEFT && !controls.RIGHT && !controls.JUMP) {
                this._leftAnimationStarted = false;
                this._rightAnimationStarted = false;
                this.gotoAndPlay("player_stand");
            }
            // If the player is falling increase position on canvas to simulate falling
            if (this._falling)
                this.y += this._fallSpeed;
        };
        // Finite state machine pattern to check for input
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.A:
                    controls.LEFT = true;
                    break;
                case keys.D:
                    controls.RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.JUMP = true;
                    break;
            }
        };
        // Check which keys have been pressed
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.JUMP = false;
                    break;
            }
        };
        // Move the player left
        Player.prototype.moveLeft = function () {
            if (!this._leftAnimationStarted && controls.LEFT) {
                this._leftAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            // Check collision with moon
            if (this.collideLeft) {
                this.x -= 5;
                this.y -= 4;
            }
            else
                this.x -= 5;
        };
        // Move the player right
        Player.prototype.moveRight = function () {
            if (!this._rightAnimationStarted && controls.RIGHT) {
                this._rightAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            // Check collision with moon
            if (this.collideRight) {
                this.x += 5;
                this.y -= 4;
            }
            else
                this.x += 5;
        };
        // Move player up
        Player.prototype.jump = function () {
            if (this._jumpTimer <= 25) {
                this._jumpTimer++;
                this.gotoAndPlay("player_jump");
                this.y -= 8;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map