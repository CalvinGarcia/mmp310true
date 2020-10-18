class MapScene extends GameObject{
	constructor(){
	super(background,brickWall,woodFloor);
	this.background = [];		
	this.brickWall = [];
	this.woodFloor= [];
	this.portal = [];

	for(let i =0;i < 13; i++ ){
		for(let y =0; y < 200; y+= 32){
			let brick = new GameObject(wallImage,i*32,y);
			this.background.push(brick);
	
		}
	}

	for(let i = 0; i < 13; i++){
		for(let y = 200; y < height; y += 32){
			let wood = new GameObject(floor,i *32,y);
			this.background.push(wood);
		}
	}


}

setup(){

}

draw(){

	for(let i = 0; i < this.background.length; i++){
		this.background[i].draw();
	}

	
	player.draw();

}

}