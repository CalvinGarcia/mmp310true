class MapScene {
	constructor(){
	this.background = [];		
	this.brickWall = [];
	this.woodFloor= [];
	this.portals = [];

	for(let i =0;i < 13; i++ ){
		for(let y =0; y < 200; y+= 32){
			let brick = new GameObject(wallImage,i*32,y);
			this.brickWall.push(brick);
	
		}
	}

	for(let i = 0; i < 13; i++){
		for(let y = 200; y < height; y += 32){
			let wood = new GameObject(floor,i *32,y);
			this.woodFloor.push(wood);
		}
	}
		this.portals.push(new Portal("you are colliding",stairs,100,350,"basement"));



//	this.portals.push(new Portal("you are colliding",300,350,"basement"));

	
}

setup(){

}

draw(){

	for(let i = 0; i < this.brickWall.length; i++){
		this.brickWall[i].draw();
	}


		for(let i = 0; i < this.woodFloor.length; i++){
		this.woodFloor[i].draw();
	}

	let enterPortal;
	for (let i = 0; i < this.portals.length; i++){
		this.portals[i].draw();
	
		if	(this.portals[i].collide(player)){
			enterPortal = this.portals[i].sceneToGo;
	}
}

	if(enterPortal){
		changeScene(enterPortal);
	}

	 
	player.draw();

}

}