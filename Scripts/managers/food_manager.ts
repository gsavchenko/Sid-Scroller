/*
    Managers module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Food Manager
    Description:    Food Manager class extends GameObject and manages creation of food
    Author:         George Savchenko
    Revision History:
    Name:               Date:       Description:
    -----------------------------------------------------------------------------------
    George Savchenko    11/20/2016  This is basically a food factory but don't tell anyone

*/
module managers {
    export class Food_Manager{

        public foodList : objects.Food[] = new Array<objects.Food>(); // List of food on level
        
        private foodGap : number = 10; // Gap between pieces of food
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

        // updated method handles updating food
        public update() : void{
            var updatedFoodList : objects.Food[] = new Array<objects.Food>();

            this.foodList.forEach(meteor => {
                if(!meteor.isDead)
                    updatedFoodList.push(meteor);
            });

            this.foodList = updatedFoodList;
        }

        // createFood creates a meteor and adds it to the foodList
        public createFood() : void{
            this.foodList.push(new objects.Food("food", 
            this._getRandNum(this._topLeftX + this.foodGap, this._width), 
            this._getRandNum(this._topLeftY, this._height)));
        }

        // addtoScene adds food in the list to the scene
        public addToScene(scene : objects.Scene) : void{
            this.foodList.forEach(food => {
                scene.addChild(food);
            });
        }

         // addtoContainer adds food in the list to the scene
        public addToScrollContainer (container : createjs.Container) : void{
            this.foodList.forEach(food => {
                container.addChild(food);
            });
        }

        // _getRandNum helper method that returns random number between range
        private _getRandNum(min : number, max : number) : number{
            return Math.floor(Math.random() * max) + min;
        }
    }
}