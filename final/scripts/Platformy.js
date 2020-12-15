class Platformy{
	constructor(minOb,maxOb){
		this.redBrickWall = [];
		this.floor = [];
		this.groundY = height - 100;
		this.minOb = minOb;
		this.maxOb = maxOb;
		this.obstacles = [];
	
		

		for(let i = 0; i < 13;i++){
			for(let y = 0; y < 300; y += 32){
				let red = new GameObject(redWallImage, i * 32, y);
				this.redBrickWall.push(red);
			}

			for(let i = 0; i < 13; i++){
				for(let y = 300; y < height; y+= 32){
					let wood = new GameObject(floorImage, i * 32, y);
					this.floor.push(wood);
				}

	 	// var n = random(this.minOb, this.maxOb);
	 	// for(let i = 0; i < n; i++){
	 	// 	let x = random(width/2, width) + i * width/ 2;
	 	// 	let obstacle = new Ghost (x,300);
	 	// 	this.obstacles.push(obstacle);
	 	// }


			}
		}
	}

	setup(nextScene){

		imageMode(CENTER);
		jumpy.x = 50;
		jumpy.y = 300;

		var n = random(this.minOb,this.maxOb);
		for(let i = 0; i < n; i++){
			let x = random(width/2, width) + i * width/2;
			let obstacle = new Ghost(x,height - 120);
			this.obstacles.push(obstacle);
		}

		if (nextScene) this.nextScene = nextScene;


	}


	draw(){
		

		//background 
		for(let i = 0; i < this.redBrickWall.length; i++){
			this.redBrickWall[i].draw();
		}




		for(let i =0; i < this.floor.length; i ++){
			this.floor[i].draw();

		}

		for(let i = 0; i < this.obstacles.length;i++){
			let obstacle = this.obstacles[i];
			obstacle.update();
			obstacle.draw();

		

			if(obstacle.collide(jumpy)){
				changeScene('lose', currentScene);
			}

			if(i == this.obstacles.length - 1 && jumpy.x > obstacle.x){
				changeScene('win', this.nextScene);
				this.enterStarted = false;
		}



	
	}


		jumpy.draw();

}
}
