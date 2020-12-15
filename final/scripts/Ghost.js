class Ghost extends GameObject{
	constructor(x,y,speed){
		super(ghostImage,x,y)
		this.ghostAttack = ghostAttack;
		this.ghostImage = ghostImage;
		this.attackPositions = attackPositions; 
		this.speed = 5;

	}


	update(){
		this.x -= this.speed;
	}


}