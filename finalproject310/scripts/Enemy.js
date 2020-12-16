class Enemy extends GameObject{

	constructor(x,y){
		super(enemyCharacter, x,y);
		this.character = enemyCharacter;
		this.attack = enemyAttack;
		this.walk = enemyWalk; 
		this.isWalking = false;
		this.isAttacking = true; 
		this.speed = 2;

		this.lives = 4;
	}

	draw(){


	// for(let i = 0; i < enemy.lives; i++){
	// 	fill('red');
	// 	let x = 490 + i * 30;
	// 	ellipse(x, 40, 20);
	// 	textSize(20);
	// 	text("badguy" , 530, 20);
	
	// }	

	// 	if(player.playerIsAttacking && enemy.collide(player)){
	// 	this.lives--;
	// }

	image(this.character,this.x,this.y);

	// if(player.x > width/2){
	// 	this.x -= this.speed;
	// }
	// 		if (this.x - this.width/3 < player.x + player.width/3 &&
	// 			this.x + this.width/3 > player.x - player.width/3 &&
	// 			this.y - this.height/3 < player.y + player.height/3 &&
	// 			this.y + this.height/3 > player.y + player.height/3){
	// 			image(this.attack,this.x, this.y);
	// 		}



	// // if(player.x > width/2){
	// // 	image(this.attack,this.x,this.y);
	// // 	this.isAttacking = true;

		
		}
	}

		
	// }





