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
var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        // Check the collision between 2 box objects
        Collision.prototype.boxCheck = function (boxObjectOne, boxObjectTwo) {
            if (boxObjectOne.topRightCorner.x > boxObjectTwo.topLeftCorner.x &&
                boxObjectOne.topLeftCorner.x < boxObjectTwo.topRightCorner.x &&
                boxObjectOne.topRightCorner.y < boxObjectTwo.bottomLeftCorner.y &&
                boxObjectOne.bottomRightCorner.y > boxObjectTwo.topLeftCorner.y) {
                return true;
            }
        };
        // Check the collision between two circle objects
        Collision.prototype.circleCircleCheck = function (circleObjectOne, circleObjectTwo) {
            // Store distance between centers
            var distanceX = circleObjectOne.x - circleObjectTwo.x;
            var distanceY = circleObjectOne.y - circleObjectTwo.y;
            // Store distance between circles
            var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            // If distance between circles is lesser than their combined radius then they are colliding
            if (distance < circleObjectOne.width / 2 + circleObjectTwo.width / 2) {
                return true;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map