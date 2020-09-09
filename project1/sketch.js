/* 
First Project 
*/

var blueIdle;
var blueWalk;
var blueWalkBack; 
var blueWalkRight;
var blueWalkLeft;
var blueX, blueY;
var blueSpeed = 2;


function preload (){
	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkback = loadImage ("bluewalkback.gif");
	blueWalkRight - loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");

function setup() {
	createCanvas (640,480);
	blueX = width/2;
	blueY = height/2;
	imageMode(CENTER);
}

function draw() {
	
	background(100,100,100);

	/* LOGIC + EVENTS = CHARACTER MOVEMENT*/

	var blueIsWalking = false;
	
	image(blueidle,blueX,blueY );
	if (keyIsDown(RIGHT_ARROW)) {
		image(blueWalkRight,blueX,blueY);
		blueX += blueSpeed; 
		blueIsWalking = true;

	}
	else if (keyIsDown(LEFT_ARROW)) {
		image(blueWalkLeft,blueX,blueY);	
		blueX -= blueSpeed; 
		blueIsWalking = true;

	}
	else if (keyIsDown(UP_ARROW)) {
		image(blueWalkBack,blueX,blueY);
		blueY -= blueSpeed; 
		blueIsWalking = true; 

	}
	else if (keyIsDown(DOWN_ARROW)) {
		image(blueWalk,blueX,blueY);
		blueY += blueSpeed; 
		blueIsWalking = true;

	} 
	/*
	if (blueIsWalking) {
		image(blueWalk,blueX,blueY);
	}
	
	 else{
		image(blueIdle,blueX,blueY);
	}		
	*/
	}
}