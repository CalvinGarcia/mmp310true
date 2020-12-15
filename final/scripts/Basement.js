class Basement extends MapSceney{
	constructor(){
		super(redbricks);
		this.redbricks = [];
		this.portals= [];

	for(let i=0; i < 13; i++){
		for(let y =0; y < height / 2; y+=32){
			let red= new GameObject(redbricks, i*32, y);
			this.background.push(red);
		}
	}	


	for(let i = 0; i < 13; i++){
		for(let y = 200; y < height; y += 32){
			let wood = new GameObject(floor,i *32,y);
			this.background.push(wood);	


	}

	this.portals.push( new Portal("you are joe", stairs,200, 110,"platform"));
}



}

// setup(){
// 		player.x = width/2;
// 		player.y = height/2;
// 	} 




	draw(){

		for(let i = 0; i < this.background.length; i++){
			this.background[i].draw();
		}

		player.draw();

	}


}
