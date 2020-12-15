/*

Final 

*/

// image variables 

var playerCharacter;
var playerWalk;
var playerAttack; 
var enemyCharacter;
var enemyWalk;
var enemyAttack;

// sketch variables

var player;
var enemy;
var scene;


function preload(){
	playerCharacter = loadImage("images/player.png");
	playerWalk = loadImage("animations/playerwalk.gif");
	playerAttack = loadImage("animations/playerattack.gif");

	enemyCharacter = loadImage("images/enemy.png");
	enemyWalk = loadImage("animations/enemywalk.gif");
	enemyAttack = loadImage("animations/enemyattack.gif");

	player = new Player( 200, 200 );
	enemy = new Enemy( 400, 200 );
	scene = new MapScene;




}


function setup(){
	createCanvas(600,400);
	imageMode(CENTER);
}

function draw(){
	background(200);

	scene.draw();
	// enemy.draw();
	// player.draw();




}