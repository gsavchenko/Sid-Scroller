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
        private _buttonMenu : objects.Button; // Menu button
        private _score : objects.Label; // Score text
        private _timer : number = 0; // Game timer
        private _isGameOver : boolean = false; // Game over variable        
        private _difficultyTimer : number = 0; // Timer for increasing the difficulty
        private _DIFFICULTY_INCREASE_INVERVAL : number = 5000; // 1000 = 1 second
        private _mm : managers.Meteor_Manager; // Meteor manager
        private _moon : objects.Moon; // Moon
        private _astronaut : objects.Player; // Player
        
        constructor() {
            super();
        }

        // Initialize variables
        public start() : void {
            console.log("Game Started");

            this._imageGameOver = new createjs.Bitmap(assets.getResult("Gameover_Image"));
            this._imageGameOver.x = config.Screen.CENTER_X - 80;
            this._imageGameOver.y = -15;

            this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y - 100);  

            this._score = new objects.Label("HIGHSCORE: " + this._timer, "30px Impact","#ffffff", 150, 25);
            this._timer = 0;

            this._mm = new managers.Meteor_Manager(1);
            this._mm.addToScene(this);

            this._moon = new objects.Moon("moon");           
            this.addChild(this._moon);

            this._astronaut = new objects.Player("player_stand");
            this.addChild(this._astronaut);
            
            stage.addChild(this);
            stage.addChild(this._score);
        }

        // Update objects in scene
        public update() : void {
            this._timer += createjs.Ticker.interval;
            this._difficultyTimer += createjs.Ticker.interval;

            this._mm.update();
            this._astronaut.update();

            // Update score until game is over
            if(!this._isGameOver)
                this._score.text = "HIGHSCORE: " + Math.round(this._timer)/1000;            

            // Loop through all meteors in the scene and check for collision with the player
            this._mm.meteorList.forEach(meteor => {            
                if(collision.circleCircleCheck(meteor, this._astronaut)){
                        this.removeChild(this._astronaut);
                        this._isGameOver = true;
                        this._score.x = config.Screen.CENTER_X + 80;
                        this._score.y = config.Screen.CENTER_Y;                    
                        this._buttonMenu.on("click", this.menuButtonClick, this);
                        stage.addChild(this._buttonMenu);
                        stage.addChild(this._imageGameOver);
                    }
            });

            // Check for collision between astronaut and moon
            if(collision.circleCircleCheck(this._astronaut, this._moon)){

                // Reset jumping
                this._astronaut._jumpTimer = 0;
                this._astronaut._falling = false;

                // Check for collision with moon
                if(this._astronaut.x < 300)
                    this._astronaut.collideRight = true;
                if(this._astronaut.x > 370)
                    this._astronaut.collideLeft = true;
            }
            else{
                // If not colliding with moon astronaut must be falling
                this._astronaut._falling = true;
                this._astronaut.collideRight = false;
                this._astronaut.collideLeft = false;
            }

            if(this._difficultyTimer >= this._DIFFICULTY_INCREASE_INVERVAL && !this._isGameOver){
                this._mm.createMeteor();
                this._mm.maxSpeed ++;
                this._difficultyTimer = 0;
            }
        }

        // Menu button method
        private menuButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}