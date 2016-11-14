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
            //Public variables
            this.meteorList = new Array(); // List of meteors on screen
            this.minSpeed = 3; // The minimum speed of a meteor
            this.maxSpeed = 5; // The maximum speed of a meteor  
            this._explosionList = new Array(); // list of explosions on screen
            // Spawn Area
            this._topLeftX = 10;
            this._topLeftY = -80;
            this._height = 100;
            this._width = 600;
            this._amountOnScreen = spawnAmount;
            this.start();
        }
        // initialize variables
        Meteor_Manager.prototype.start = function () {
            this._moon = new objects.Moon("moon");
            for (var x = 0; x < this._amountOnScreen; x++) {
                this.createMeteor();
            }
        };
        // updated method handles updating meteors and explosions on screen
        Meteor_Manager.prototype.update = function () {
            var _this = this;
            // Traverse meteor_list
            this.meteorList.forEach(function (meteor) {
                meteor.update();
                if (collision.circleCircleCheck(meteor, _this._moon))
                    _this._replaceMeteor(meteor);
                if (meteor.y >= canvas.clientHeight) {
                    _this._replaceMeteor(meteor);
                }
            });
            // Traverse explosion_list
            this._explosionList.forEach(function (explosion) {
                _this._destroyExplosion(explosion);
            });
            // Updated marked (dead) meteors/explosions
            this.updateList();
            this.addToScene(currentScene);
        };
        // addtoScene adds meteors and explosions in the list to the scene
        Meteor_Manager.prototype.addToScene = function (scene) {
            this.meteorList.forEach(function (meteor) {
                scene.addChild(meteor);
            });
            this._explosionList.forEach(function (explosion) {
                scene.addChild(explosion);
            });
        };
        // createMeteor creates a meteor and adds it to the meteor_list
        Meteor_Manager.prototype.createMeteor = function () {
            this.meteorList.push(new objects.Meteor("meteor", this._getRandNum(this._topLeftX, this._width), this._getRandNum(this._topLeftY, this._height), this._getRandNum(this.minSpeed, this.maxSpeed)));
        };
        // updateList creates temporary lists to which live meteors/explosions are added
        // which is then set to the global lists
        Meteor_Manager.prototype.updateList = function () {
            var updatedMeteorList = new Array();
            var updatedExplosionList = new Array();
            this.meteorList.forEach(function (meteor) {
                if (!meteor.isDead)
                    updatedMeteorList.push(meteor);
            });
            this._explosionList.forEach(function (explosion) {
                if (explosion.currentAnimationFrame != gameAtlas.getNumFrames("explosion") - 1)
                    updatedExplosionList.push(explosion);
            });
            this.meteorList = updatedMeteorList;
            this._explosionList = updatedExplosionList;
        };
        // Creates an explosion in the spot of the previous meteor and
        // marks the meteor as dead
        Meteor_Manager.prototype._replaceMeteor = function (meteor) {
            this._createExplosion(meteor.x, meteor.y);
            meteor.isDead = true;
            currentScene.removeChild(meteor);
            this.createMeteor();
        };
        // _destroyExplosion removes the passed explosion from the current scene
        Meteor_Manager.prototype._destroyExplosion = function (explosion) {
            currentScene.removeChild(explosion);
        };
        // _createExplosion creates a new explosion at the given coordinates
        Meteor_Manager.prototype._createExplosion = function (posX, posY) {
            this._explosionList.push(new objects.Explosion("explosion", posX, posY));
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