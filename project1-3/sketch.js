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
var floor;
var brickWall;
var treasure;
var treasureX= [50, 306]; 
var treasureY= [300, 348];


function preload (){
	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
	brickwall = loadImage("brickwalltexture.png");
	floor = loadImage("floor232.png");
	treasure = loadImage("treasure1.png");

}	

function setup() {
	createCanvas (480,480);
	blueX = width/2;
	blueY = height/2;
	imageMode(CENTER);
}

function draw() {
	
	background(110, 86, 120);

	//background

	//loop

	var tileCounter= 0;


// with variable counter 
// brick wall texture

	for (var brickCounter = 0; brickCounter < 16; brickCounter +=1 ){
		image(brickwall, brickCounter * 32,0);
		image(brickwall, brickCounter * 32,32);
		image(brickwall, brickCounter * 32,64);
		image(brickwall, brickCounter * 32,96);
		image(brickwall, brickCounter * 32,128);
		image(brickwall, brickCounter * 32,160);
		image(brickwall, brickCounter * 32,192);
	}
// x  is the variable counter 
// let keeps the x variable in this one statement. 
// wood floor texture 

	for ( let x = 0; x < 16; x += 1 ){
		image(floor, x * 32, 240 );
		image(floor, x * 32, 272 );
		image(floor, x * 32, 304 );
		image(floor, x * 32, 336 );
		image(floor, x * 32, 368 );
		image(floor, x * 32, 400 );
		image(floor, x * 32, 432 );
		image(floor, x * 32, 464 );
		image(floor, x * 32, 496 );

	}


// treasure chests and position 
	for ( let i = 0; i < treasureX.length; i++){
		image(treasure, treasureX[i],treasureY[i]);
}

console.log(mouseX,mouseY);

	/* LOGIC + EVENTS = CHARACTER MOVEMENT*/

	var blueIsWalking = false;
	
	//image(blueIdle,blueX,blueY );
	if (keyIsDown(RIGHT_ARROW)) {
		image(blueWalkRight,blueX,blueY);
		blueX += blueSpeed; 
		blueIsWalking = true;

	}
	else if (keyIsDown(LEFT_ARROW)) {
		image(blueWalkLeft,blueX,blueY);	
		blueX-= blueSpeed; 
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
	*/
	 else{
		image(blueIdle,blueX,blueY);
	}		
	
	}
