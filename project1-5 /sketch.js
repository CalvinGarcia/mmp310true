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
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
}	

function setup() {
	createCanvas (300,300);
	blueX = width/2;
	blueY = height/2;
	imageMode(CENTER);
}

function draw() {
	
	background(110, 86, 120);

	/* LOGIC + EVENTS = CHARACTER MOVEMENT*/




	var blueIsWalking = false;

 	// boundry code comes before actual code. 


//creates boundry at right edge. 

	if (blueIsWalking = false){
		image(blueIdle,blueX,blueY);
	}	

 	else if (keyIsDown(RIGHT_ARROW) && blueX > width-10) {
 		image(blueWalkRight,blueX,blueY);
		blueX -= blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(RIGHT_ARROW)) {
		image(blueWalkRight,blueX,blueY);
		blueX += blueSpeed; 
		blueIsWalking = true;

	}

	else if (keyIsDown (LEFT_ARROW) && blueX < 0 + 10) {
		image(blueWalkLeft,blueX,blueY);
		blueX += blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(LEFT_ARROW)) {
		image(blueWalkLeft,blueX,blueY);	
		blueX-= blueSpeed; 
		blueIsWalking = true;

	}

	else if(keyIsDown(UP_ARROW) && blueY < 25){
		image(blueWalkBack,blueX,blueY);
		blue -= blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(UP_ARROW)) {
		image(blueWalkBack,blueX,blueY);
		blueY -= blueSpeed; 
		blueIsWalking = true; 

	}

	else if (keyIsDown(DOWN_ARROW) && blueY > height - 30){
		image(blueWalk,blueX,blueY);
		blueY -= blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(DOWN_ARROW)) {
		image(blueWalk,blueX,blueY);
		blueY += blueSpeed; 
		blueIsWalking = true;

	} 


 else
		image(blueIdle,blueX,blueY);
 }
	
			


	
