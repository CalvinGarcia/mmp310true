/*

brick wall loop test

*/


var brick
var floor

function preload(){
	brick = loadImage("brickwalltexture.png");
	floor = loadImage("floor232.png");
}


function setup(){
	createCanvas(400,400);

}

function draw(){

	background(0);

var brickCounter = 13;
var tileCounter = 13;


for (let i = 0 ; i < brickCounter; i ++){
	for(let y= 0; y <200; y+= 32){
		image(brick,i * 32,y);
	}
}

for (let i = 0; i < tileCounter; i++){
	for(let y = 200; y < height; y+= 32){
		image(floor,i * 32,y);
	}
}

}