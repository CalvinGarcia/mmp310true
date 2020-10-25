class MapSceney{
	constructor(){
		this.blueBrickwall = [];
		this.floor = [];
		this.portals = [];

		for(let i = 0; i < 13; i++){
			for(let y = 0; y < height/2; y += 32){
				let blue = new GameObject(blueWallImage, i * 32,y);
				this.blueBrickwall.push(blue);

			}
		}

		for(let i = 0; i <13; i++){
			for(let y = 200; y < height; y +=32 ){
				let wood = new GameObject(floorImage, i * 32,y);
				this.floor.push(wood);
			}
		}

		this.portals.push( new Portal("you are colliding",stairsDown, 200,250,"platform"));
	}





setup(){

}


draw(){

	for(let i = 0; i < this.blueBrickwall.length; i++){
		this.blueBrickwall[i].draw();
	}

	for(let i = 0; i < this.floor.length; i++){
		this.floor[i].draw();
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

