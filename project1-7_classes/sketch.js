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
var scenes = {};		
var currentScene = 'main';


function preload (){
	blueIdle = loadImage ("blueidle.gif");
	blueWalk = loadImage ("bluewalk.gif");
	blueWalkBack = loadImage ("bluewalkback.gif");
	blueWalkRight = loadImage("bluewalkright.gif");
	blueWalkLeft = loadImage ("bluewalkleft.gif");
	wallImage = loadImage("brickwalltexture.png");
	floor = loadImage("floor232.png");
	jump =loadImage("jump.gif")
	stairs = loadImage("stairs.png");
	redbricks = loadImage("redwalltexture.png");
}	

function setup(){
	createCanvas (400,400);
	imageMode(CENTER);

	scenes.main = new MapScene();
	scenes.basement = new Basement();


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
	
	portals = new Portal(100,300);

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

	portals.draw();




	// background(0);

	// main.draw(); 

	




	// portals.draw();

	// player.draw();


/* draws portals */ 




}