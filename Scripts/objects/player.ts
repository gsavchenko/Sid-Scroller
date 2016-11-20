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
module objects {
    export class Player extends objects.GameObject {

        constructor(imageString:string) {
            super(gameAtlas, imageString, "");

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        // Set initial position of player
        public start() {
            this.x =  35;
            this.y = 290;
        }

        // Check for input and update player
        public update() : void {
            super.update();

            // Check for input controls
            if(controls.UP) {
                this.moveUp();
            }
            if(controls.DOWN) {
                this.moveDown();
            }

            if(this.x < 1280)
                this.x += 2;
        }

        // Finite state machine pattern to check for input
        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.W:
                    controls.UP = true;
                    break;
                case keys.S:
                    controls.DOWN = true;
                    break;
            }
        }

        // Check which keys have been pressed
        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
            }
        }

        // Move the player up
        public moveUp() {
            this.y -= 5;
        }

        // Move the player down
        public moveDown() {
            this.y += 5;
        }
    }
}