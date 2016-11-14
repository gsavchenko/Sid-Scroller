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
module objects {
    export class Player extends objects.GameObject {

        // Public variables
        // Track walking into the moon
        public collideLeft : boolean = false;
        public collideRight : boolean = false;
        // Jumping timer
        public _jumpTimer : number = 0;

        // Private variables
        // Track animations
        private _leftAnimationStarted : boolean = false;
        private _rightAnimationStarted : boolean = false;
        // Track falling
        private _fallSpeed : number = 2;
        public _falling : boolean = true;
        // Track jumping
        private _isJumping : boolean = false;
        
        constructor(imageString:string) {
            super(gameAtlas, imageString, "");

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        // Set initial position of player
        public start() {
            this.x = 320;
            this.y = 300;
        }

        // Check for input and update player
        public update() : void {

            super.update();

            // Check for input controls
            if(controls.RIGHT) {
                this.moveRight();
            }
            if(controls.LEFT) {
                this.moveLeft();
            }
            if(controls.JUMP ) {
                this.jump();
            }

            // If no buttons are pressed set player to idle
            if(!controls.LEFT && !controls.RIGHT && !controls.JUMP){
                this._leftAnimationStarted = false;
                this._rightAnimationStarted = false;
                this.gotoAndPlay("player_stand");
            }

            // If the player is falling increase position on canvas to simulate falling
            if(this._falling)
                this.y += this._fallSpeed;
        }

        // Finite state machine pattern to check for input
        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
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
        }

        // Check which keys have been pressed
        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
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
        }

        // Move the player left
        public moveLeft() {
            if(!this._leftAnimationStarted && controls.LEFT)
            {
                this._leftAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            // Check collision with moon
            if(this.collideLeft){
                this.x -= 5;
                this.y -= 4;
            }
            else
                this.x -=5;
        }

        // Move the player right
        public moveRight() {
            if(!this._rightAnimationStarted && controls.RIGHT)
            {
                this._rightAnimationStarted = true;
                this.gotoAndPlay("player_move_left");
            }
            // Check collision with moon
            if(this.collideRight){
                this.x += 5;
                this.y -= 4;
            }
            else
                this.x += 5;
        }
        
        // Move player up
        public jump() {
            if(this._jumpTimer <= 25)
            {
                this._jumpTimer ++;
                this.gotoAndPlay("player_jump");
                this.y -= 8;
            }            
        }
    }
}