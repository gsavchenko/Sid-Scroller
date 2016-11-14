/*
    Scenes module to group all user-defined scenes  under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Rules
    Description:    Rules scene that contains all assets for player instructions
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Refactored code to increase legibility and potentional issues
*/

module scenes {
    export class Rules extends objects.Scene {

        // Private instance variables
        private _menuBtn : objects.Button; // Menu button
        private _rules : createjs.Bitmap; // Instructions
        private _mm : managers.Meteor_Manager; // Meteor manager
        private _moon : objects.Moon; // Moon

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Rules Scene Started");

            this._menuBtn = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 150);
            this._menuBtn.on("click", this._menuBtnClick, this);

            this._rules = new createjs.Bitmap(assets.getResult("Rules"));

            this._mm = new managers.Meteor_Manager(4);
            this._mm.addToScene(this);

            this._moon = new objects.Moon("moon");
            
            // Add to global stage container in draw order
            stage.addChild(this);
            stage.addChild(this._moon);
            stage.addChild(this._rules);
            stage.addChild(this._menuBtn);
        }

        public update() : void {
            this._mm.update();
        }

        // Menu button method
        private _menuBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}