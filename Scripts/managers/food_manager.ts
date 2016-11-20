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
    export class Food_Manager{
       
        public foodList : objects.Food[] = new Array<objects.Food>(); // List of food on level
        public foodGap : number = 10; // Gap between pieces of food

        private foodAmount : number;
        // Spawn Area
        private _topLeftX : number = 300;
        private _topLeftY : number = 0;
        private _height : number = 580;
        private _width : number = 1320 - this._topLeftX;        

        constructor(spawnAmount:number) {
            this.foodAmount =  spawnAmount;
            this.start();
        }

        // initialize variables
        public start() : void {
            for(var x = 0; x < this.foodAmount; x++){
                this.createFood();
            }
        }

        // updated method handles updating meteors and explosions on screen
        public update() : void{
            var updatedFoodList : objects.Food[] = new Array<objects.Food>();

            this.foodList.forEach(meteor => {
                if(!meteor.isDead)
                    updatedFoodList.push(meteor);
            });

            this.foodList = updatedFoodList;
        }

        // createMeteor creates a meteor and adds it to the meteor_list
        public createFood() : void{
            this.foodList.push(new objects.Food("food", 
            this._getRandNum(this._topLeftX + this.foodGap, this._width), 
            this._getRandNum(this._topLeftY, this._height)));
        }

        // addtoScene adds meteors and explosions in the list to the scene
        public addToScene(scene : objects.Scene) : void{
            this.foodList.forEach(food => {
                scene.addChild(food);
            });
        }

        public addToScrollContainer (container : createjs.Container) : void{
            this.foodList.forEach(food => {
                container.addChild(food);
            });
        }

        // updateList creates temporary lists to which live meteors/explosions are added
        // which is then set to the global lists
        private updateList() : void{

        }

        // _getRandNum helper method that returns random number between range
        private _getRandNum(min : number, max : number) : number{
            return Math.floor(Math.random() * max) + min;
        }
    }
}