class Prompt{
	constructor(title,instruction){
		this.title = title;
		this.instruction = instruction;
		this.enterStarted = false;
	}

	setup(sceneName){
		this.sceneToGo = sceneName;


	}

	draw(){

		textAlign(CENTER,CENTER);
		textSize(30);
		fill('white');
		text(this.title, 50, 100, 300,300);


		textSize(20);
		text(this.instruction, 500,100,300,300);



		//starts event 
		if(keyIsDown(ENTER) && !this.enterStarted ) {
			this.enterStarted = true;
		}

		if(this.enterStarted && !keyIsPressed){
			changeScene(this.sceneToGo)
		}
	}
}