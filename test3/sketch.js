/*

Attempt 3 - Transferring between Scenes


*/
var blueIdle;
var blueWalk;
var blueWalkBack; 
var blueWalkRight;
var blueWalkLeft;
var blueX, blueY;
var blueSpeed = 2;
var floor;
var brickWall;
var treasure;
var treasureX= [260]; 
var treasureY= [300];
var ghost;
var stairs;
//var ghostposition =
var scene = "main"; // basement , bedroom 
var redBrickWall ;
var stairsUp 


function preload(){

	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
	brickWall = loadImage("brickwalltexture.png");
	floor = loadImage("floor232.png");
	treasure = loadImage("treasure1.png");
	ghost = loadImage("ghost.png");
	stairs = loadImage("stairs.png");
	redBrickWall = loadImage("redwalltexture.png");
	stairsUp = loadImage("staircaseup.png");

		}


function setup(){
	createCanvas( 400,400);


}


function staircase(img, x, y){
	image(img, x, y);

//	if( blueX - blueIdle.width/ 2 < x + stairs.width/5 ){
	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {	
		sceneSwap();
	}
}



function draw(){

	background(0);


	//background

	var brickCounter = 13;


	//walltexture

	for(let i = 0; i < brickCounter; i++){
		for(let y = 0; y < 200; y+=32){
			image(brickWall, i*32, y )
				}
			}

		}

	var floorCounter = 13;

	for(let i = 0; i < floorCounter; i++){
		for(let y= 200; y < height; y+=32){
			image(floor, i * 32, y);
		}
	}	


