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


function preload (){
	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
	brickwall = loadImage("brickwalltexture.png");
	floor = loadImage("floortiles.png");
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

	/*
	while(tileCounter < 5){
		ellipse(100 + tileCounter *100,100,100);
		tileCounter += 1;
		text(tileCounter, 100,100);
	}
*/

//let creates variables only scoped to one for loop. 

// loop

/*
	for (	var tileCounter= 0;tileCounter < 5; tileCounter +=1){
			ellipse(100 + tileCounter *100,100,100);
	}
*/
/*
	var brickCounter = 0;
	while (brickCounter < 5){
		image(brickwall,100, 100,100);
		brickCounter += 1;


	}
*/

// with variable counter 

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
	for ( let x = 0; x < width; x += 32 ){
		image(floor, x, 240 );
		image(floor, x + 32, 272 );
		image(floor, x + 32, 304 );
		image(floor, x + 32, 336 );
		image(floor, x + 32, 368 );
		image(floor, x + 32, 400 );
		image(floor, x + 32, 432 );
		image(floor, x + 32, 464 );
	}





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
