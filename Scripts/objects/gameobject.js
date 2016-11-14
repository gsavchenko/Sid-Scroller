var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Object module to group all user-defined objects under the same "namespace aka module"
    ------------------------------------------------------------------------------------
    Class:          GameObject
    Description:    Explosion class extends Sprite class for animatating/managing in game objects.
    Author:         George Savchenko
    Revision History:
    Name:               Date:       Description:
    -----------------------------------------------------------------------------------
    George Savchenko    10/28/2016  Removed height, width, and position. Size is already
                                    stored in getBounds() and position is stored is the
                                    Sprite class as x and y.
*/
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(atlas, imageString, deathAnimString) {
            _super.call(this, atlas, imageString);
            // Private variables
            this._name = "GameObject";
            this._initialize(imageString);
            this.start();
        }
        Object.defineProperty(GameObject.prototype, "width", {
            // PUBLIC PROPERTIES
            get: function () {
                return this.getBounds().width;
            },
            set: function (w) {
                this.getBounds().width = w;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () {
                return this.getBounds().height;
            },
            set: function (h) {
                this.getBounds().height = h;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (n) {
                this._name = n;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "topRightCorner", {
            get: function () {
                return new objects.Vector2(this.x + this.width * 0.5, this.y - this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "topLeftCorner", {
            get: function () {
                return new objects.Vector2(this.x - this.width * 0.5, this.y - this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "bottomRightCorner", {
            get: function () {
                return new objects.Vector2(this.x + this.width * 0.5, this.y + this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "bottomLeftCorner", {
            get: function () {
                return new objects.Vector2(this.x - this.width * 0.5, this.y + this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function (imageString) {
            this.name = imageString;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        };
        GameObject.prototype.start = function () { };
        GameObject.prototype.update = function () { };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map