/*
    Scenes module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Menu
    Description:    Menu scene that contains all assets and functionality associated with the menu itself
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Refactored code to increase legibility and potentional issues
*/
module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        private _buttonPlay : objects.Button; // Play button
        private _buttonRules : objects.Button; // Instruction button
        private _imageTitle : createjs.Bitmap; // Title image

        // Menu Class Contructor
        constructor() {
            super();
        }

        // Initialize variables
        public start() : void {
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
        }

        public update() : void{

        }

        // Play button handler method
        private _playButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.WORLD;
            changeScene();
        }
        // Rules button handler method
        private _rulesButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.RULES;
            changeScene();
        }
    }
}