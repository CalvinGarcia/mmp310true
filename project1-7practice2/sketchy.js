

// Cleanup 



//images
var blueIdle;
var blueWalk;
var blueWalkBack; 
var blueWalkRight;
var blueWalkLeft;
var blueWallImage;
var floorImage;
var player;
var jump;
var redWallImage;
var attackerImage; 
var stairsDown;
var portals;
var woodFloor



//arrays
var brickWall = [];
var redBrickWall = [];
var scenes = {};
var floor = [];




//scene variables 
var jumpy;
var main;
var basement;
var platform;
var portals;
var currentScene = 'main';
var minOb;
var maxOb;
var attacker;
var player;
var GRAVITY;
var groundY;
var ySpeed=2;
var isJumping = false;
var speed;


function preload(){
	blueIdle = loadImage ("images/blueidle.gif");
	blueWalk = loadImage ("images/bluewalk.gif");
	blueWalkBack = loadImage ("images/bluewalkback.gif");
	blueWalkRight = loadImage("images/bluewalkright.gif");
	blueWalkLeft = loadImage ("images/bluewalkleft.gif");
	blueWallImage = loadImage("images/brickwalltexture.png");
	redWallImage = loadImage("images/redwalltexture.png")
	floorImage = loadImage("images/floor232.png");
	jump = loadImage("images/jump.gif");
	stairsDown = loadImage("images/stairs.png");
	attackerImage = loadImage("images/ghostattack.png"); 

}


function setup(){
	createCanvas(400,400);
	imageMode(CENTER);
	scenes.main = new MapSceney();
	scenes.platform = new Platformy();
	player = new Player(200,200);
	jumpy = new Jumpy(50,300);
}



function changeScene(sceneName){
	currentScene = sceneName;
}


function draw(){


scenes[currentScene].draw();
scenes[currentScene].setup();

}







