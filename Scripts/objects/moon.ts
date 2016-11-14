/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Moon
    Description:    Moon class extends GameObject and creates Moon
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016   Updated comments and removed center variable
*/
module objects {
    export class Moon extends objects.GameObject {

        // Create moon from gameAtlas which stores animation frames
        // Position defaults so that it is shared between all moon objects unless
        // specified otherwise
        constructor(imageString:string, posX:number = 330, posY:number = 740) {
            super(gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }
    }
}