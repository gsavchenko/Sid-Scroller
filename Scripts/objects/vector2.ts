/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Vector2
    Description:    Vector2 class extends a point object used to store the position associated with a particular vector.
    Author:         George Savchenko
    Revision History:
    Name:               Date:        Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/21/2016   Removed empty updated() function
*/
module objects {
    export class Vector2 extends createjs.Point {

        constructor(x:number = 0, y:number = 0) {
            super(x,y);
        }
        
        // Standard distance formula between 2 points
        public static distance(a: Vector2, b:Vector2) : number {
            return Math.sqrt(Math.pow((b.x - a.x),2 + Math.pow((b.y - a.y), 2)));
        }
    } 
}