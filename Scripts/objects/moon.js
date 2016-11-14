var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    var Moon = (function (_super) {
        __extends(Moon, _super);
        // Create moon from gameAtlas which stores animation frames
        // Position defaults so that it is shared between all moon objects unless
        // specified otherwise
        function Moon(imageString, posX, posY) {
            if (posX === void 0) { posX = 330; }
            if (posY === void 0) { posY = 740; }
            _super.call(this, gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }
        return Moon;
    }(objects.GameObject));
    objects.Moon = Moon;
})(objects || (objects = {}));
//# sourceMappingURL=moon.js.map