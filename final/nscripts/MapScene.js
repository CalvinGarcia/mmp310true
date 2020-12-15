class MapScene {
	constructor(){
	this.background = [];		
	this.brickWall = [];
	this.woodFloor= [];
	this.portals = [];

	for(let i =0;i < 13; i++ ){
		for(let y =0; y < 200; y+= 32){
			let brick = new GameObject(blueWall,i*32,y);
			this.brickWall.push(brick);
	
		}
	}
	
}
}