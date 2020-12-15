/*

Project 1-7 Classes 

*/


var blueIdle;
var blueWalk;
var blueWalkBack; 
var blueWalkRight;
var blueWalkLeft;
var wallImage;
var floor;
var brickWall = [];
var woodFloor = [];
var main;
var player;
var jump;
var stairs 
var portals; 
var redbricks;
var platform;
var scenes = {};		
var currentScene = 'platform';
var minOb;
var maxOb;
var attacker; 



function preload (){
	blueIdle = loadImage ("images/blueidle.gif");
	blueWalk = loadImage ("images/bluewalk.gif");
	blueWalkBack = loadImage ("images/bluewalkback.gif");
	blueWalkRight = loadImage("images/bluewalkright.gif");
	blueWalkLeft = loadImage ("images/bluewalkleft.gif");
	wallImage = loadImage("images/brickwalltexture.png");
	floor = loadImage("images/floor232.png");
	jump =loadImage("images/jump.gif")
	stairs = loadImage("images/stairs.png");
	redbricks = loadImage("images/redwalltexture.png");
	attacker = loadImage("ghostattack.png");
}	

function setup(){
	createCanvas (400,400);
	imageMode(CENTER);

	// scenes.main = new MapScene();
	// scenes.basement = new Basement();
	scenes.platform = new Platform();


//	brickWall = new GameObject(wallImage,100,200);

//	brickWall.push(new GameObject(wallImage,100,200));


	// for(let i =0;i < 13; i++ ){
	// 	for(let y =0; y < 200; y+= 32){
	// 	brickWall.push(new GameObject(wallImage,i*32,y));
	// 	}
	// }

	// for(let i = 0; i <13; i++){
	// 	for(let y = 200; y < height; y+=32){
	// 		woodFloor.push(new GameObject(floor,i*32,y));
	// 	}
	// }



/*

	for(let i =0;i < 13; i++ ){
		let brick = new GameObject(wallImage,i*32,height-200);
		brickWall.push(brick);
	}

*/
	
	// portals = new Portal(100,300);

	player = new Player(300,250);

	//for loop & .push are good for drawing multiple objects 
	//portals.push(new Portal(stairs,300,300)) ;
	//portals = new Portal("you are colliding",stairs,300,300,"basement");
}	

function changeScene(sceneName){
	currentScene = sceneName;

}


function draw(){
	
	scenes[currentScene].draw();
	scenes[currentScene].setup();

//	portals.draw();




	// background(0);

//	 main.draw(); 

	




	// portals.draw();

	// player.draw();


/* draws portals */ 




}