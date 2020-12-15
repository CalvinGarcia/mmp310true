class Player extends GameObject{

	constructor(x,y){
		super(playerCharacter, x, y);
		this.character = playerCharacter;	
		this.walk = playerWalk;
		this.attack = playerAttack;
		this.playerIsWalking = false; 
		this.playerIsAttacking = true; 
		this.speed =2

		this.lives = 3;

	}



	draw(){

	for(let i = 0; i < player.lives; i++){
		let x = 20 + i * 30;
		fill('black');
		text("player 1" , 10, 20);
		textSize(20);
		ellipse(x, 40, 20);
	}	

		

	if(this.playerIsWalking = false){	
		image(this.character, this.x, this.y);

			}

			else if(keyIsDown(RIGHT_ARROW)){
			image(this.walk,this.x,this.y);
			this.x += this.speed;
			this.playerIsWalking = true;

			}

			else if(keyIsDown(LEFT_ARROW)){
			image(this.walk,this.x,this.y);
			this.x -= this.speed;
			this.playerIsWalking = true;

			}

			else if(keyIsDown(UP_ARROW)){
			image(this.walk,this.x,this.y);
			this.y -= this.speed;
			this.playerIsWalking = true;

			}	

			else if(keyIsDown(DOWN_ARROW)){
			image(this.walk,this.x,this.y);
			this.y += this.speed;
			this.playerIsWalking = true;		

			}

			else if(keyIsDown(32)){
			image(this.attack,this.x,this.y);
			this.playerIsAttacking = true;
			
			}

			else{
				image(this.character,this.x,this.y);
				this.playerIsWalking = false;
			}			


		// collision

			


		

		} //draw ends here. 


}




	

	



