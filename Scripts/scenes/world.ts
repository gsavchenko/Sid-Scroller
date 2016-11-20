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
    George Savchenko    11/20/2016   Commented code and removed unnecessary variables

*/
module scenes {
    export class World extends objects.Scene {
        
        // Private variables
        private _imageGameOver : createjs.Bitmap; // Game over image
        private _imageBackground : createjs.Bitmap; // Background image
        private _buttonMenu : objects.Button; // Menu button
        private _player : objects.Player;
        private _scrollableObjectContainer : createjs.Container;
        private _fm : managers.Food_Manager;
        private _score : objects.Label; // Score text
        private _scoreCount : number;
        
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

            this._buttonMenu = new objects.Button("Menu_Button", config.Screen.CENTER_X + 60, config.Screen.CENTER_Y + 100);  

            this._scoreCount = 0;
            this._score = new objects.Label("HIGHSCORE: " + this._scoreCount, "30px Impact","#ffffff", 100, 25);            

            this._player = new objects.Player("player");
            this.addChild(this._player);

            this._fm = new managers.Food_Manager(10);
            this._fm.addToScene(this);

            this._scrollableObjectContainer = new createjs.Container();
            this._scrollableObjectContainer.addChild(this._imageBackground);
            this._scrollableObjectContainer.addChild(this._player);
            this._fm.addToScrollContainer(this._scrollableObjectContainer);
            this.addChild(this._scrollableObjectContainer);
            
            stage.addChild(this);
            stage.addChild(this._score);
        }

        // Update objects in scene
        public update() : void {
            this._player.update();
            this._fm.update();

            if(this._player.x + 635 <= this._scrollableObjectContainer.getBounds().width)
                this._scrollableObjectContainer.regX += 2;

            this._fm.foodList.forEach(food => {            
                if(collision.circleCircleCheck(this._player, food)){
                    this._scrollableObjectContainer.removeChild(food);
                    this.removeChild(food);
                    food.isDead = true;
                    this._scoreCount += 1;
                    this._score.text = "HIGHSCORE: " + this._scoreCount;
                }
            });

            if(this._player.x >= 1280){
                
                this._score.y = config.Screen.CENTER_Y;
                this._buttonMenu.on("click", this.menuButtonClick, this);
                stage.addChild(this._buttonMenu);

                if(this._scoreCount < 10){
                    this._score.text = "YOU LOSE TRY AGAIN \n\n        HIGHSCORE: " + this._scoreCount;
                    this._score.x = config.Screen.CENTER_X + 30;
                }
                else{
                    this._score.text = "CONGRAGULATIONS YOU WIN \n\n                  HIGHSCORE: " + this._scoreCount;
                    this._score.x = config.Screen.CENTER_X - 20;
                }
            }
        }

        // Menu button method
        private menuButtonClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}