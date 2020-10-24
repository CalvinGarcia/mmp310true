class Basement extends MapScene{
	constructor(){
		super(redbricks);
		this.redbricks = [];

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
}
}




	draw(){

		for(let i = 0; i < this.background.length; i++){
			this.background[i].draw();
		}

	}
}
