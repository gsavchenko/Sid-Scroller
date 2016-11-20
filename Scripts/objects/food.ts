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
    export class Food extends objects.GameObject {
        
        // Public variables
        public isDead : boolean = false; // should the meteor be destroyed?
        
        // Create meteor from gameAtlas which stores animation frames
        constructor(imageString:string, posX:number, posY:number) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }   
    }
}