/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Explosion
    Description:    Explosion class extends GameObject and creates explosion animation.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Updated Comments  
*/
module objects{
    export class Explosion extends objects.GameObject {

        // Create explosion from gameAtlas which stores animation frames
        constructor(imageString:string, posX : number, posY: number) {
            super(gameAtlas, imageString,"");
            this.x = posX;
            this.y = posY;
        }
    }
}