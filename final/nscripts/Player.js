class Player extends GameObject{

	constructor(x,y){
		super(playerCharacter, x, y);
		this.character = playerCharacter;	
		this.walk = playerWalk;
		this.attack = playerAttack;
		this.playerIsWalking = false; 
		this.speed =2

	}



	draw(){

	if(this.playerIsWalking = false){	
		image(this.character, this.x, this.y);

			}

		}


	

	}



