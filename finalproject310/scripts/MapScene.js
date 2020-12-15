class MapScene {
constructor(){
}


		draw(){
			background(150);

			enemy.draw();
			player.draw();
			
		if(player.playerIsAttacking = true && enemy.collide(player)){
		enemy.lives -=1 ;
	}


		}



}