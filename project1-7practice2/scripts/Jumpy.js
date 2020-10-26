class Jumpy extends GameObject{
	constructor(){
		super(blueWalkRight,jump);
		this.jump = jump;
		this.right = blueWalkRight;
		this.isJumping = true;
		this.ySpeed = 3;
		this.speed = 1;
		// this.gravity = gravity;
		this.GRAVITY = 1;
	



	}

	draw(){

	// if(this.isJumping == false){
	// 	image(this.right,this.x,this.y);
	// }

	if(this.y < height - 140 ){
		this.ySpeed += this.GRAVITY;
		this.isJumping = true;

	}else{ 

		this.ySpeed = 0;
		this.isJumping = false;
	}


	//jump 
	if(!this.isJumping && keyIsDown(32)){
		this.ySpeed = -10;
	//	this.isJumping = true;
	}

	this.y += this.ySpeed ;


	if(this.isJumping){
		image(this.jump,this.x,this.y);
	}


	else
	image(this.right,this.x,this.y);

}
 }
