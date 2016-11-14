/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Meteor
    Description:    Meteor class extends GameObject and creates/updates meteor objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Removed _id that wasn't being used
*/
module objects {
    export class Meteor extends objects.GameObject {
        
        // Public variables
        public isDead : boolean = false; // should the meteor be destroyed?

        // Private variables
        private _speed : number = 4;
        private _explosion : objects.Explosion;
        
        // Create meteor from gameAtlas which stores animation frames
        constructor(imageString:string, posX : number, posY: number, speed : number) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
            this._speed = speed;
        }

        // Update the meteor's position
        public update() : void {
            this.y = this.y + this._speed;

            if(this.y >= canvas.clientHeight)
                this.isDead = true
        }        
    }
}