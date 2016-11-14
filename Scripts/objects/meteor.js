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
    var Meteor = (function (_super) {
        __extends(Meteor, _super);
        // Create meteor from gameAtlas which stores animation frames
        function Meteor(imageString, posX, posY, speed) {
            _super.call(this, gameAtlas, imageString, "");
            // Public variables
            this.isDead = false; // should the meteor be destroyed?
            // Private variables
            this._speed = 4;
            this.x = posX;
            this.y = posY;
            this._speed = speed;
        }
        // Update the meteor's position
        Meteor.prototype.update = function () {
            this.y = this.y + this._speed;
            if (this.y >= canvas.clientHeight)
                this.isDead = true;
        };
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map