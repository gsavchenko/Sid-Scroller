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
module scenes {
    export class World extends objects.Scene {
        
        // Private variables
        private _imageGameOver : createjs.Bitmap; // Game over image
        private _imageBackground : createjs.Bitmap; // Background image
        
        constructor() {
            super();
        }

        // Initialize variables
        public start() : void {
            console.log("Game Started");

            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;

            this._imageBackground = new createjs.Bitmap(assets.getResult("Background_Image"));
            this.addChild(this._imageBackground);
            
            stage.addChild(this);
        }

        // Update objects in scene
        public update() : void {

        }

        // Menu button method
        private menuButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}