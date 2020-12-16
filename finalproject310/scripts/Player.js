class Player extends GameObject{

	constructor(x,y){
		super(playerCharacter, x, y);
		this.character = playerCharacter;	
		this.walk = playerWalk;
		this.attack = playerAttack;
		this.isWalking = false; 
		this.isAttacking = false; 
		this.speed =2

		this.lives = 3;

	}





	draw(){




		
//controls
	if(this.isWalking = false){	
		image(this.character, this.x, this.y);

			}

			else if(keyIsDown(RIGHT_ARROW)){
			image(this.walk,this.x,this.y);
			this.x += this.speed;
			this.isWalking = true;

			}

			else if(keyIsDown(LEFT_ARROW)){
			image(this.walk,this.x,this.y);
			this.x -= this.speed;
			this.isWalking = true;

			}

			else if(keyIsDown(UP_ARROW)){
			image(this.walk,this.x,this.y);
			this.y -= this.speed;
			this.isWalking = true;

			}	

			else if(keyIsDown(DOWN_ARROW)){
			image(this.walk,this.x,this.y);
			this.y += this.speed;
			this.isWalking = true;		

			}


	//attack

			else if(keyIsDown(32)){
				image(this.attack,this.x,this.y);
				this.isAttacking = true;
			}

	//idle image		
			else{
				image(this.character,this.x,this.y);
				this.isWalking = false;
				this.isAttacking = false;

			}
	


			
			}


			}			



		

	






	

	



