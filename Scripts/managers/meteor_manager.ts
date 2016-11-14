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
       
        //Public variables
        public meteorList : objects.Meteor[] = new Array<objects.Meteor>(); // List of meteors on screen
        public minSpeed : number = 3; // The minimum speed of a meteor
        public maxSpeed : number = 5; // The maximum speed of a meteor  

        // Private variables
        private _amountOnScreen : number; // amount of meteors on the screen at the sametime
        private _explosionList : objects.Explosion[] = new Array<objects.Explosion>(); // list of explosions on screen
        private _moon : objects.Moon; // knowledge of moon for collision detection
        // Spawn Area
        private _topLeftX : number = 10;
        private _topLeftY : number = -80;
        private _height = 100;
        private _width = 600;

        constructor(spawnAmount:number) {
            this._amountOnScreen = spawnAmount;
            this.start();
        }

        // initialize variables
        public start() : void {
            this._moon = new objects.Moon("moon");

            for(var x = 0; x < this._amountOnScreen; x++){
                this.createMeteor();
            }
        }

        // updated method handles updating meteors and explosions on screen
        public update() : void{
            // Traverse meteor_list
            this.meteorList.forEach(meteor => {
                meteor.update();
                
                if(collision.circleCircleCheck(meteor, this._moon))
                    this._replaceMeteor(meteor);

                if(meteor.y >= canvas.clientHeight){
                    this._replaceMeteor(meteor);
                }
            });

            // Traverse explosion_list
            this._explosionList.forEach(explosion => {
                this._destroyExplosion(explosion);
            });

            // Updated marked (dead) meteors/explosions
            this.updateList();
            this.addToScene(currentScene);
        }

        // addtoScene adds meteors and explosions in the list to the scene
        public addToScene(scene : objects.Scene) : void{
            this.meteorList.forEach(meteor => {
                scene.addChild(meteor);
            });
            this._explosionList.forEach(explosion => {
                scene.addChild(explosion);
            });
        }

        // createMeteor creates a meteor and adds it to the meteor_list
        public createMeteor() : void{
            this.meteorList.push(new objects.Meteor("meteor", 
            this._getRandNum(this._topLeftX, this._width), 
            this._getRandNum(this._topLeftY, this._height) , 
            this._getRandNum(this.minSpeed, this.maxSpeed)));
        }

        // updateList creates temporary lists to which live meteors/explosions are added
        // which is then set to the global lists
        private updateList() : void{
            var updatedMeteorList : objects.Meteor[] = new Array<objects.Meteor>();
            var updatedExplosionList : objects.Explosion[] = new Array<objects.Explosion>();

            this.meteorList.forEach(meteor => {
                if(!meteor.isDead)
                    updatedMeteorList.push(meteor);
            });

            this._explosionList.forEach(explosion => {
                if(explosion.currentAnimationFrame != gameAtlas.getNumFrames("explosion") - 1)
                    updatedExplosionList.push(explosion);
            });

            this.meteorList = updatedMeteorList;
            this._explosionList = updatedExplosionList;
        }

        // Creates an explosion in the spot of the previous meteor and
        // marks the meteor as dead
        private _replaceMeteor(meteor : objects.Meteor) : void{
            this._createExplosion(meteor.x, meteor.y);

            meteor.isDead = true;
            currentScene.removeChild(meteor);
            this.createMeteor();
        }

        // _destroyExplosion removes the passed explosion from the current scene
        private _destroyExplosion(explosion : objects.Explosion) : void{
            currentScene.removeChild(explosion);
        }

        // _createExplosion creates a new explosion at the given coordinates
        private _createExplosion(posX : number, posY : number) : void{
            this._explosionList.push(new objects.Explosion("explosion", posX, posY));
        }

        // _getRandNum helper method that returns random number between range
        private _getRandNum(min : number, max : number) : number{
            return Math.floor(Math.random() * max) + min;
        }
    }
}