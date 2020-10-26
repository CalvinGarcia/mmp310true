

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
var stairsDown;
var portals;
var woodFloor
var ghostImage;


//arrays
var brickWall = [];
var redBrickWall = [];
var scenes = {};
var floor = [];
var obstacles;




//scene variables 
var jumpy;
var main;
var basement;
var platform;
var portals;
var currentScene = 'main';
var minOb;
var maxOb;
var ghostAttack;
var player;
var GRAVITY;
var groundY;
var ySpeed=2;
var isJumping = false;
var speed;
var attackPositions;

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
	ghostImage = loadImage("images/ghostattack.png"); 


}


function setup(){
	createCanvas(400,400);
	imageMode(CENTER);
	scenes.main = new MapSceney();
	scenes.platform = new Platformy(6,10);
	player = new Player(200,200);
	jumpy = new Jumpy();
	scenes.win = new Prompt('You win! Hit ENTER to Leave the Basement');
	scenes.lose = new Prompt('You Lose! You must Win to escape! Press R Key NOW!');
}



function changeScene(sceneName, nextScene){
	currentScene = sceneName;
	scenes[currentScene].setup(nextScene);


}


function draw(){


scenes[currentScene].draw();

}







