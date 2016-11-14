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
    {id: "Spritesheet", src:"../../Assets/images/spritesheet.png"}
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
            [12, 8, 31, 42, 0], // player stand
            [43, 8, 48, 43, 0], // player jump
            [14, 56, 31, 42, 0], // move left
            [51, 55, 31, 42, 0], // move right
            [100, 7, 102, 132, 0], // meteor 1
            [211, 7, 106, 139, 0], // meteor 2
            [326, 7, 108, 135, 0], // meteor 3
            [443, 7, 100, 137, 0], // meteor 4
            [14, 157, 78, 73, 0], // explosion 1
            [103, 154, 99, 79, 0], // explosion 2
            [213, 153, 42, 33, 0], // explosion 3
            [317, 149, 93, 90, 0], // explosion 4
            [421, 164, 97, 69, 0], // explosion 5
            [529, 163, 71, 60, 0], // explosion 6
            [0, 240, 710, 725, 0] // moon
        ],

        "animations": { // define animations
            "player_stand": { "frames":[0]}, // idle
            "player_jump": { "frames":[1]}, // jump
            "player_move_left":{"frames":[2,0,3,0], "speed":0.2, "next":true}, // move left
            "player_move_right":{"frames":[3,0,2,0], "speed":0.2, "next":false}, // move right
            "meteor":{"frames":[4,5,6,7], "speed":0.2, "next":true}, // meteor
            "explosion":{"frames":[8,9,10,11,12,13], "speed":0.2, "next":false}, // explosion
            "moon":{"frames":[14]} // moon
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