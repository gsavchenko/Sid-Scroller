var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        // Create explosion from gameAtlas which stores animation frames
        function Explosion(imageString, posX, posY) {
            _super.call(this, gameAtlas, imageString, "");
            this.x = posX;
            this.y = posY;
        }
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map