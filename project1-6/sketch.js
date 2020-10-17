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
var stairsUp;
var blueMainX;
var blueMainY ;
var groundY = 260; 
var GRAVITY = 1; // acceleration 2px per frame
var blueYSpeed = 2;
var blueIsJumping = true;
var attacker; 
var jump; 
//ghost x values go in the array below
var attackPositions = [];




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
	jump = loadImage("jump.gif"); 
	attacker = loadImage("ghostattack.png")


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
	blueMainX = blueX;
	blueMainY = blueY;
	imageMode(CENTER);
}


//equal to setupGame
function sceneSwap(){
		
	//saves map position 
		blueMainX = blueX;
		blueMainY = blueY;

	//sets jerry's position in basement for game
		
		blueX = 50;
		blueY = groundY;

		attackPositions = [];
		var attackerNumber = random (2,4);
		for( let i = 0; i < attackerNumber; i++){
			attackPositions.push(random (width/2 , width) + i * width/2)
		}


		scene = 'basement';



	
	}

//equal to setupMain 
function reSwap(){
	

		blueX = width/2;
		blueY = height/2;



		scene = 'main' 

	}
/*
function winSwap(){
		scene = 'win' 

		blueX = blueMainX;
		blueY = blueMainY;

	}

function loseSwap(){
		scene = 'lose'
}
*/
function draw(){
		//scene manager 
		if(scene == 'main'){
			main();
		}
		else if(scene == 'basement'){
			basement();
		}

		else if( scene == 'win'){
			win();
		}

		else if( scene == 'lose'){
			lose();
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
		for(let y = 0; y < 300; y += 32){
			image(redBrickWall, i * 32, y);
		}
	}

	//groundY position. 	
	for ( let i = 0; i< tileCounter; i++){
		for(let y = 300; y < height; y += 32){
			image(floor, i *32,y);
		}
	}


	//gravity
	if(blueY < 260){
		blueYSpeed += GRAVITY;
		blueIsJumping = true;

	}else{ 

		blueYSpeed = 0;
		blueIsJumping = false;
	}


	//jump 
	if(!blueIsJumping && keyIsDown(32)){
		blueYSpeed = -15;
		blueIsJumping = true;
	}

	blueY  += blueYSpeed;

	for(let i = 0; i < attackPositions.length; i++){
		let x = attackPositions[i];
		ghostAttacker(x);
		attackPositions[i] -= 1;

		if(i ==attackPositions.length - 1 && blueX > x){
			scene = 'win';
		}
	}

	//jump animation 
	if(blueIsJumping){
		image(jump,blueX,blueY)
	}
	else
	image(blueWalkRight,blueX,blueY);




}

function win(){ 


	var brickCounter = 13;
	var tileCounter = 13; 




	for(let i = 0; i < brickCounter; i ++){
		for(let y = 0; y < 300; y += 32){
			image(redBrickWall, i * 32, y);
		}
	}

	//groundY position. 	
	for ( let i = 0; i< tileCounter; i++){
		for(let y = 300; y < height; y += 32){
			image(floor, i *32,y);
		}
	}



	image(blueWalkRight,blueX,blueY);

	text("You won! Get out! Press R",width/2, height/2); 

	if (keyIsDown(82)){
		reSwap();
	}
}

function lose(){ 


	var brickCounter = 13;
	var tileCounter = 13; 




	for(let i = 0; i < brickCounter; i ++){
		for(let y = 0; y < 300; y += 32){
			image(redBrickWall, i * 32, y);
		}
	}

	//groundY position. 	
	for ( let i = 0; i< tileCounter; i++){
		for(let y = 300; y < height; y += 32){
			image(floor, i *32,y);
		}
	}



	image(blueWalkRight,blueX,blueY);

	text("HaHa You lose, Try Again Press M!",width/2, height/2); 

	if (keyIsDown(77)){
		sceneSwap();
	}
}		

	function ghostAttacker(x){
		let y = height - 140;
		image(attacker,x,y)


		if ( blueX - blueIdle.width/5 < x + attacker.width/5 && 
		 blueX + blueIdle.width/5 > x - attacker.width/5 &&
		 blueY - blueIdle.width/4 < y + attacker.width/5 &&
		 blueY + blueIdle.width/4 > y - attacker.width/5 ){

		 	scene = 'lose';

}	
}}