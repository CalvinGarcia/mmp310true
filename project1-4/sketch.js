/* 

Project 1-4 Collision 


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
var ghost
var ghostposition = [

[90,400]


]; 



function preload (){
	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
	brickwall = loadImage("brickwalltexture.png");
	floor = loadImage("floor232.png");
	treasure = loadImage("treasure1.png");
	ghost = loadImage("ghost.png");

}	
/*
function chest(msg , x, y ){
	image(treasure,x,y)

	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {

	fill('white');
	text(msg,x,y);	
		}
*/

function chest(msg , x, y ){
	image(treasure,x,y)

	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {

	fill('white');
	text(msg,x,y);	
		}



}

function ghostChat (msg,x,y){
	image(ghost,x,y) ;
	fill('white');
	text(msg, x + ghost.width + 10);

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
// notes 

//.length in the loop below refers to the length of the array?
// why i++?  

/*
	for ( let i = 0; i < treasureX.length; i++){
		image(treasure, treasureX[i],treasureY[i]);
}
*/



// ghost animation 

/*
	for ( let i = 0; i < ghostposition.length; i++){
		image(ghost,ghostposition[i][0],ghostposition[i][1]);

		ghostposition[i][0]
			if (ghostposition [i][0] > width){
				(ghostposition [i][0] += 2);

			}
				ghostposition[i][0] += 2 ;{
					if ( ghostposition[i][0]> width ){
						ghostposition[i][0] = random(0,300);
						ghostposition[i][1] = random(0,400);
					}
				}
		}
	
*/



chest("press enter to open me up" ,300,300);
chest(" Ok I lied. You can't open me up...yet.", 400,400, 100,50);
ghostChat("get out of here kid." , 200,200);

console.log(blueSpeed);


	/* LOGIC + EVENTS = CHARACTER MOVEMENT*/


	//blue walking logic 

	var blueIsWalking = false;
	
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

	 else{
		image(blueIdle,blueX,blueY);
	}		
/*
	if (keyIsDown (UP_ARROW) && blueY < height/2 +25){
		blueY -= blueSpeed;

	} else if (keyReleased(UP_ARROW)&& blueY < height/2 + 25 ){
*/
	}



	

	


