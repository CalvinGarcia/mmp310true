/* 

Final 

*/

//

// image variables

var playerCharacter;
var enemyCharacter;
var blueBrick;
var blueWall; 

//action variables 

var playerAttack;
var enemyAttack;
var playerWalk; 
var enemyWalk;


//js variables
var player;
var scene;


//



function preload(){

	playerCharacter = loadImage("nimages/player.png");
	playerAttack = loadImage("animations/playerattack.gif");
	playerWalk = loadImage("animations/playerwalk.gif");
	blueBrick = loadImage("nimages/brickwalltexture.png")
	// enemy = loadImage("nimages/enemywalk.gif");

}

function setup(){

	createCanvas(600,400);
	imageMode(CENTER);
	player = new Player(playerCharacter,400,300); 


}

function draw(){
	background( 200 );
	// image(playerCharacter , 200,200);
	// image(enemy,240,200);
	player.draw();
}