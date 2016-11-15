var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    var Food = (function (_super) {
        __extends(Food, _super);
        // Create meteor from gameAtlas which stores animation frames
        function Food(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            // Public variables
            this.isDead = false; // should the meteor be destroyed?
            this.x = posX;
            this.y = posY;
        }
        // Update the meteor's position
        Food.prototype.update = function () {
            if (this.y >= canvas.clientHeight)
                this.isDead = true;
        };
        return Food;
    }(objects.GameObject));
    objects.Food = Food;
})(objects || (objects = {}));
//# sourceMappingURL=food.js.map