var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        return Food;
    }(objects.GameObject));
    objects.Food = Food;
})(objects || (objects = {}));
//# sourceMappingURL=food.js.map