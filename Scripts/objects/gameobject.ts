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
module objects {
    export class GameObject extends createjs.Sprite {

        // Private variables
        private _name:string = "GameObject";
        // Position of corners
        private _CornerTopRight:Vector2;
        private _CornerTopLeft:Vector2;
        private _CornerBottomRight:Vector2;
        private _CornerBottomLeft:Vector2;

        // PUBLIC PROPERTIES
        get width() : number {
            return this.getBounds().width;
        }

        set width(w:number) {
            this.getBounds().width = w;
        }

        get height() : number {
            return this.getBounds().height;
        }

        set height(h:number) {
            this.getBounds().height = h;
        }

        get name() : string {
            return this._name;
        }

        set name(n:string) {
            this._name = n;
        }

        get topRightCorner() : Vector2 {
            return new objects.Vector2(this.x + this.width * 0.5, this.y - this.height * 0.5);
        }

        get topLeftCorner() : Vector2 {
            return new objects.Vector2(this.x - this.width * 0.5, this.y - this.height * 0.5);
        }

        get bottomRightCorner() : Vector2 {
            return new objects.Vector2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        }

        get bottomLeftCorner() : Vector2 {
            return new objects.Vector2(this.x - this.width * 0.5, this.y + this.height * 0.5);
        }

        constructor(atlas: createjs.SpriteSheet, imageString : string, deathAnimString) {
            super(atlas, imageString);

            this._initialize(imageString);
            this.start();
        }

        private _initialize(imageString:string):void {
            this.name = imageString;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        public start():void {}
        public update():void {}
    }
}