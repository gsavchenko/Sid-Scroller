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
        // updated method handles updating meteors and explosions on screen
        Food_Manager.prototype.update = function () {
            var updatedFoodList = new Array();
            this.foodList.forEach(function (meteor) {
                if (!meteor.isDead)
                    updatedFoodList.push(meteor);
            });
            this.foodList = updatedFoodList;
        };
        // createMeteor creates a meteor and adds it to the meteor_list
        Food_Manager.prototype.createFood = function () {
            this.foodList.push(new objects.Food("food", this._getRandNum(this._topLeftX + this.foodGap, this._width), this._getRandNum(this._topLeftY, this._height)));
        };
        // addtoScene adds meteors and explosions in the list to the scene
        Food_Manager.prototype.addToScene = function (scene) {
            this.foodList.forEach(function (food) {
                scene.addChild(food);
            });
        };
        Food_Manager.prototype.addToScrollContainer = function (container) {
            this.foodList.forEach(function (food) {
                container.addChild(food);
            });
        };
        // updateList creates temporary lists to which live meteors/explosions are added
        // which is then set to the global lists
        Food_Manager.prototype.updateList = function () {
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