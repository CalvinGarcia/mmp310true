class Platform{
	constructor(minOb,maxOb){
		this.brickWall=[];
		this.woodFloor=[]; 
		this.groundY = height-100;
		this.minOb = minOb;
		this.maxOb = maxOb;
		this.obstacles = [];
		this.gravity = 2;


		for(let i = 0; i < 13; i++){
			for(let y = 0; y < height- 100; i ++){
				let red = new GameObject(redbricks, i * 32, y)
				this.brickWall.push(red);
			}
		}

	}



setup(){

	player.x = 50;
	player.y = groundY;
	this.obstacles = [];

	var n = (random(this.minOb, this.maxOb));
		for(let i = 0; i < n; i++){
			let x = random (width/2 , width) + i * width/2;
			let obstacles = new Ghost(x,groundY);
		}
	}





draw(){

	for (let i = 0 ; i < brickWall.length; i++){
		this.brickWall[i].draw();

	}

	if(player.y < 260){
		player.ySpeed += this.gravity;
		player.isJumping = true;

	}	
	else{ 

		player.ySpeed = 0;
		player.isJumping = false;
	}


player.draw();	

}

	




}

