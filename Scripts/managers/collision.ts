/*
    Manager module to group all user-defined managers under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          Collision
    Description:    Collision scene that implements the collision checks between sprites
    Author:         George Savchenko
    Revision History:
    Name:               Date:           Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016      Removed unnecessary box-circle check, everything
                                        just uses the circle-circle hit detection. To be
                                        honest though this class doesn't really manage 
                                        anything.
*/
module managers {
    export class Collision {
        constructor() {
            this.start();
        }

        public start() {

        }

        public update() {

        }

        // Check the collision between 2 box objects
        public boxCheck(boxObjectOne:objects.GameObject, boxObjectTwo:objects.GameObject) {            
            if(boxObjectOne.topRightCorner.x > boxObjectTwo.topLeftCorner.x &&
                boxObjectOne.topLeftCorner.x < boxObjectTwo.topRightCorner.x &&
                boxObjectOne.topRightCorner.y < boxObjectTwo.bottomLeftCorner.y &&
                boxObjectOne.bottomRightCorner.y > boxObjectTwo.topLeftCorner.y) {
                    return true;
            }
        }

        // Check the collision between two circle objects
        public circleCircleCheck(circleObjectOne:objects.GameObject, circleObjectTwo:objects.GameObject){
            // Store distance between centers
            var distanceX = circleObjectOne.x - circleObjectTwo.x;
            var distanceY = circleObjectOne.y - circleObjectTwo.y;

            // Store distance between circles
            var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // If distance between circles is lesser than their combined radius then they are colliding
            if(distance < circleObjectOne.width/2 + circleObjectTwo.width/2){
                return true;
            }
        }
    }
}