/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Food
    Description:    Food class extends GameObject and creates food objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    11/20/2016   food only need to be created by itself
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