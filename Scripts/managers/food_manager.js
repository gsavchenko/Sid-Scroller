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
var managers;
(function (managers) {
    var Food_Manager = (function () {
        function Food_Manager(spawnAmount) {
            this.foodList = new Array(); // List of food on level
            this.foodGap = 10; // Gap between pieces of food
            // Spawn Area
            this._topLeftX = 300;
            this._topLeftY = 0;
            this._height = 580;
            this._width = 1320 - this._topLeftX;
            this.foodAmount = spawnAmount;
            this.start();
        }
        // initialize variables
        Food_Manager.prototype.start = function () {
            for (var x = 0; x < this.foodAmount; x++) {
                this.createFood();
            }
        };
        // updated method handles updating food
        Food_Manager.prototype.update = function () {
            var updatedFoodList = new Array();
            this.foodList.forEach(function (meteor) {
                if (!meteor.isDead)
                    updatedFoodList.push(meteor);
            });
            this.foodList = updatedFoodList;
        };
        // createFood creates a meteor and adds it to the foodList
        Food_Manager.prototype.createFood = function () {
            this.foodList.push(new objects.Food("food", this._getRandNum(this._topLeftX + this.foodGap, this._width), this._getRandNum(this._topLeftY, this._height)));
        };
        // addtoScene adds food in the list to the scene
        Food_Manager.prototype.addToScene = function (scene) {
            this.foodList.forEach(function (food) {
                scene.addChild(food);
            });
        };
        // addtoContainer adds food in the list to the scene
        Food_Manager.prototype.addToScrollContainer = function (container) {
            this.foodList.forEach(function (food) {
                container.addChild(food);
            });
        };
        // _getRandNum helper method that returns random number between range
        Food_Manager.prototype._getRandNum = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        return Food_Manager;
    }());
    managers.Food_Manager = Food_Manager;
})(managers || (managers = {}));
//# sourceMappingURL=food_manager.js.map