class Platformy{
	constructor(){
		this.redBrickWall = [];
		this.floor = [];
		this.groundY = height - 100;
		this.minOb = minOb;
		this.maxOb = maxOb;
		this.obstacles = [];
		// this.GRAVITY = 1;
		// this.speed = 2;
		// this.ySpeed = 2;
		// this.isJumping = true;
		

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
			}
		}
	}

	setup(){

		// imageMode(CENTER);
		jumpy.x = 50;
		jumpy.y = 300;

	}


	draw(){
		

		//background 
		for(let i = 0; i < this.redBrickWall.length; i++){
			this.redBrickWall[i].draw();
		}




		for(let i =0; i < this.floor.length; i ++){
			this.floor[i].draw();

		}

// //		gravity 

// 		if(jumpy.isJumping = false){
// 		image(jumpy.right,jumpy.x,jumpy.y);
	

// 		}

// 		if(jumpy.y < 260){
// 		jumpy.ySpeed += this.GRAVITY;
// 		jumpy.isJumping = true;


// 	}else{ 

// 		//on ground	
// 		jumpy.ySpeed = 0;
// 		jumpy.isJumping = false;
// 	}


// 		//jump 
// 	if(!jumpy.isJumping && keyIsDown(32)){
// 		jumpy.ySpeed = -15;
// 		jumpy.isJumping = true;
// 	}

// 	jumpy.y += jumpy.ySpeed;


// 	if(jumpy.isJumping){
// 		image(jumpy.jump,jumpy.x,jumpy.y);
// 	}
// 	else
// 	image(jumpy.right,jumpy.x,jumpy.y);


		jumpy.draw();
	
	}


}
