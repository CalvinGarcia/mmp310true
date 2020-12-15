class Enemy extends GameObject{

	constructor(x,y){
		super(enemyCharacter, x,y);
		this.character = enemyCharacter;
		this.attack = enemyAttack;
		this.walk = enemyWalk; 
		this.enemyIsWalking = false;
		this.enemyIsAttacking = true; 
		this.speed = 2;

		this.lives = 4;
	}

	draw(){


	for(let i = 0; i < enemy.lives; i++){
		fill('red');
		let x = 490 + i * 30;
		ellipse(x, 40, 20);
		textSize(20);
		text("badguy" , 530, 20);
	
	}	

	image(this.character,this.x,this.y);


	// for(let i = 0; i < 4; i++){
	// 	if(enemy.collide(player)){
	// 	text("i am colliding", 200,50); 
	// 		}

		}	
	}


// }



