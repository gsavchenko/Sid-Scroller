/*
    Managers module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Meteor_Manager
    Description:    Meteor_Manager class extends GameObject and manages creation/destruction of meteors
    Author:         George Savchenko
    Revision History:
    Name:               Date:       Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016  Moved Meteor_Manager to managers and made it not
                                    a GameObject. Lists no longer are added to infinitely;
                                    maintain the size of the amount of objects on screen.

*/
module managers {
    export class Meteor_Manager{
       
        public foodList : objects.Food[] = new Array<objects.Food>(); // List of food on level
        public foodGap : number = 10; // Gap between pieces of food

        // Spawn Area
        private _topLeftX : number = 300;
        private _topLeftY : number = 0;
        private _height : number = 580;
        private _width : number = 1320 - this._topLeftX;

        constructor(spawnAmount:number) {
            this.start();
        }

        // initialize variables
        public start() : void {
           //this._food = new objects.Food("food");
           //this.addChild(this._food);
        }

        // updated method handles updating meteors and explosions on screen
        public update() : void{

        }

        // createMeteor creates a meteor and adds it to the meteor_list
        public createFood() : void{
            this.foodList.push(new objects.Food("food", 
            this._getRandNum(this._topLeftX + this.foodGap, this._width), 
            this._getRandNum(this._topLeftY, this._height)));
        }

        // _getRandNum helper method that returns random number between range
        private _getRandNum(min : number, max : number) : number{
            return Math.floor(Math.random() * max) + min;
        }
    }
}