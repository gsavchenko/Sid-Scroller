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
    var Meteor_Manager = (function () {
        function Meteor_Manager(spawnAmount) {
            this.foodList = new Array(); // List of food on level
            this.foodGap = 10; // Gap between pieces of food
            // Spawn Area
            this._topLeftX = 300;
            this._topLeftY = 0;
            this._height = 580;
            this._width = 1320 - this._topLeftX;
            this.start();
        }
        // initialize variables
        Meteor_Manager.prototype.start = function () {
            //this._food = new objects.Food("food");
            //this.addChild(this._food);
        };
        // updated method handles updating meteors and explosions on screen
        Meteor_Manager.prototype.update = function () {
        };
        // createMeteor creates a meteor and adds it to the meteor_list
        Meteor_Manager.prototype.createFood = function () {
            this.foodList.push(new objects.Food("food", this._getRandNum(this._topLeftX + this.foodGap, this._width), this._getRandNum(this._topLeftY, this._height)));
        };
        // _getRandNum helper method that returns random number between range
        Meteor_Manager.prototype._getRandNum = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        return Meteor_Manager;
    }());
    managers.Meteor_Manager = Meteor_Manager;
})(managers || (managers = {}));
//# sourceMappingURL=meteor_manager.js.map