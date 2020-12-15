class Player extends GameObject {
	constructor(x,y){
		super(blueIdle, x, y);
		this.idle = blueIdle; // referencing the images related to blueIdle,Walk, and Jump.
		this.walk = blueWalk;
		this.right = blueWalkRight;
		this.left = blueWalkLeft;
		this.back = blueWalkBack;
		this.jump = jump;

		this.isWalking = false;
		

		this.speed = 2;
	}
/*
	draw(){
		if (this.isWalking){
			image(this.walk,this.x,this.y);
		}
		else if(this.isJumping){
			image(this.jump,this.x,this.y);
		}
		else (this.idle)
			image(this.idle,this.x,this.y);
		}
*/

	draw(){

if (this.isWalking = false){
		image(this.idle,this.x,this.y);
	}


//adds canvas boundary at the right
	else if(keyIsDown(RIGHT_ARROW) && this.x > width - 10){
		image(this.right,this.x,this.y);
		this.x -= this.speed;
		this.isWalking = true;
		}


	else if (keyIsDown(RIGHT_ARROW)) {
		image(this.right,this.x,this.y);
		this.x += this.speed; 
		this.isWalking = true;
	}
//adds canvas boundary at the left 
	else if(keyIsDown(LEFT_ARROW) && this.x < 0 + 10){
 	image(this.left,this.x,this.y);
		this.x -= this.speed;
		player.isWalking = true;
	}

	else if (keyIsDown(LEFT_ARROW)) {
		image(this.left,this.x,this.y);	
		this.x-= this.speed; 
		this.isWalking = true;;

	}
//confines blue to walking on the wood floor. 
	else if(keyIsDown(UP_ARROW) && this.y < height/2 -10 ){
		image(this.back,this.x,this.y);
		this.y -= this.speed;
		this.isWalking = true;
	}


	else if (keyIsDown(UP_ARROW)) {
		image(this.back,this.x,this.y);
		this.y -= this.speed;
		this.isWalking = true;

	}
//adds canvas boundary at the bottom
	else if (keyIsDown(DOWN_ARROW) && this.y > height - 20){
		image(this.walk,this.x,this.y);
		this.y += this.speed;
		this.isWalking = true;
	}
	else if (keyIsDown(DOWN_ARROW)) {
		image(this.walk,this.x,this.y);
		this.y += this.speed;
		this.isWalking = true;
	} 

	 else{
		image(this.idle,this.x,this.y);
	}	

}

}
		
	


