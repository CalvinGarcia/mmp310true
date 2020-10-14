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
var ghost;
var stairs;
//var ghostposition =
var scene = "main"; // basement , bedroom 
var redBrickWall ;
var stairsUp





function preload (){
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
	stairsUp = loadImage("staircaseup.png")


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

function ghostChat(msg , x, y ){
	image(ghost,x,y)

	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {

	fill('blue');
	rect(x-10,y-80,80,60);	
	fill('white');
	text(msg,x-10,y-70,80,60);	
		}





}




function setup() {
	createCanvas (400,400);
	blueX = width/2;
	blueY = height/2;
	imageMode(CENTER);
}

function sceneSwap(){
	scene = 'basement';
}

function reSwap(){
	scene = 'main'
}

function draw(){
	//scene manager 
	if(scene == 'main'){
		main();
	}
	else if(scene == 'basement'){
		basement();
	}
}

function main() {
	
background(110, 86, 120);



//background

var brickCounter = 13;
var tileCounter = 13; 

//brick wall texture
for(let i = 0; i < brickCounter; i ++){
	for(let y = 0; y < 200; y += 32){
		image(brickWall, i * 32, y);
	}
}

//fixed gap in floor texture
for ( let i = 0; i< tileCounter; i++){
	for(let y = 200; y < height; y += 32){
		image(floor, i *32,y);
	}
}




//Stairset placed here so blue walks infront of it. 

stairSet(stairs,200,240);


//Canvas Boundaries and Walking Inputs		

	var blueIsWalking = false;

	if (blueIsWalking = false){
		image(blueIdle,blueX,blueY);
	}


//adds canvas boundary at the right
	else if(keyIsDown(RIGHT_ARROW) && blueX > width - 10){
		image(blueWalkRight,blueX,blueY);
		blueX -= blueSpeed;
		blueIsWalking = true;
		}


	else if (keyIsDown(RIGHT_ARROW)) {
		image(blueWalkRight,blueX,blueY);
		blueX += blueSpeed; 
		blueIsWalking = true;

	}
//adds canvas boundary at the left 
	else if(keyIsDown(LEFT_ARROW) && blueX < 0 + 10){
		image(blueWalkLeft,blueX,blueY);
		blue -= blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(LEFT_ARROW)) {
		image(blueWalkLeft,blueX,blueY);	
		blueX-= blueSpeed; 
		blueIsWalking = true;

	}
//confines blue to walking on the wood floor. 
	else if(keyIsDown(UP_ARROW) && blueY < height/2 -10 ){
		image(blueWalkBack,blueX,blueY);
		blueY += blueSpeed;
		blueIsWalking = true;
	}


	else if (keyIsDown(UP_ARROW)) {
		image(blueWalkBack,blueX,blueY);
		blueY -= blueSpeed; 
		blueIsWalking = true; 

	}
//adds canvas boundary at the bottom
	else if (keyIsDown(DOWN_ARROW) && blueY > height - 20){
		image(blueWalk,blueX,blueY);
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


//Adds ghosts to scene.

	ghostChat("It's at the bottom of the steps." , 50,300,100,100);

	ghostChat("Go talk to that other guy.", 250,280,250,280);


	}


function stairSet(img, x, y){
	image(img, x, y);

//	if( blueX - blueIdle.width/ 2 < x + stairs.width/5 ){
	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {	
		sceneSwap();
	}
}





function basement(){ 


var brickCounter = 13;
var tileCounter = 13; 




for(let i = 0; i < brickCounter; i ++){
	for(let y = 0; y < 200; y += 32){
		image(redBrickWall, i * 32, y);
	}
}


for ( let i = 0; i< tileCounter; i++){
	for(let y = 200; y < height; y += 32){
		image(floor, i *32,y);
	}
}

	stairSet(stairsUp,300,300);

	var blueIsWalking = false;

	if (blueIsWalking = false){
		image(blueIdle,blueX,blueY);
	}


//adds canvas boundary at the right
	else if(keyIsDown(RIGHT_ARROW) && blueX > width - 10){
		image(blueWalkRight,blueX,blueY);
		blueX -= blueSpeed;
		blueIsWalking = true;
		}


	else if (keyIsDown(RIGHT_ARROW)) {
		image(blueWalkRight,blueX,blueY);
		blueX += blueSpeed; 
		blueIsWalking = true;

	}
//adds canvas boundary at the left 
	else if(keyIsDown(LEFT_ARROW) && blueX < 0 + 10){
		image(blueWalkLeft,blueX,blueY);
		blue -= blueSpeed;
		blueIsWalking = true;
	}

	else if (keyIsDown(LEFT_ARROW)) {
		image(blueWalkLeft,blueX,blueY);	
		blueX-= blueSpeed; 
		blueIsWalking = true;

	}
//confines blue to walking on the wood floor. 
	else if(keyIsDown(UP_ARROW) && blueY < height/2 -10 ){
		image(blueWalkBack,blueX,blueY);
		blueY += blueSpeed;
		blueIsWalking = true;
	}


	else if (keyIsDown(UP_ARROW)) {
		image(blueWalkBack,blueX,blueY);
		blueY -= blueSpeed; 
		blueIsWalking = true; 

	}
//adds canvas boundary at the bottom
	else if (keyIsDown(DOWN_ARROW) && blueY > height - 20){
		image(blueWalk,blueX,blueY);
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



function stairSet(img, x, y){
	image(img, x, y);

//	if( blueX - blueIdle.width/ 2 < x + stairs.width/5 ){
	if ( blueX - blueIdle.width/5 < x + treasure.width/5 && 
		 blueX + blueIdle.width/5 > x - treasure.width/5 &&
		 blueY - blueIdle.width/4 < y + treasure.width/5 &&
		 blueY + blueIdle.width/4 > y - treasure.width/5 ) {	
		reSwap();
}


	}

	

}