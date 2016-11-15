/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var spriteSheetLoader : createjs.SpriteSheetLoader;
var gameAtlas : createjs.SpriteSheet;

var currentScene : objects.Scene;
var scene: number;

var collision: managers.Collision;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "Play_Button", src:"../../Assets/images/play_button.png"},
    {id: "Rules_Button", src:"../../Assets/images/rules_button.png"},
    {id: "Menu_Button", src:"../../Assets/images/menu_button.png"},
    {id: "Rules", src:"../../Assets/images/instructions.png"},
    {id: "Title_Image", src:"../../Assets/images/title.png"},
    {id: "Gameover_Image", src:"../../Assets/images/gameover.png"},
    {id: "Spritesheet", src:"../../Assets/images/spritesheet.png"},
    {id: "Background_Image", src:"../../Assets/images/Background.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    collision = new managers.Collision();

    let atlasData = {
        "images": [
            assets.getResult("Spritesheet")
        ],

        "frames": [
            [2, 1, 43, 43, 0], // player
            [53, 11, 21, 21, 0], // food
        ],

        "animations": { // define animations
            "player": { "frames":[0]}, // player
            "food": { "frames":[1]}, // food
        },

        "texturepacker": [
                "SmartUpdateHash: $TexturePacker:SmartUpdate:013a2fc3dc6ba39276db3e6758d1ddbd:84789f29f2d01b3ea1c113a3b2d1bfdc:e696b1a5c9e543dbf26d7c8d29a6d04f$",
                "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    }

    gameAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            console.log("Starting MENU scene");
            break;
        case config.Scene.WORLD :
            stage.removeAllChildren();
            currentScene = new scenes.World();
            console.log("Starting WORLD scene");
            break;
        case config.Scene.RULES :
            stage.removeAllChildren();
            currentScene = new scenes.Rules();
            console.log("Starting RULES scene");
            break;
    } 
}