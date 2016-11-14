/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static WORLD : number = 1;
        public static RULES : number = 2;
    }

    export class Screen {
        public static WIDTH : number = 580;
        public static HEIGHT : number = 660;
        public static CENTER_X : number = 290;
        public static CENTER_Y : number = 330;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}