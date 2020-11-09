class Question{
	constructor(question,answer,options){

	let answerAttempted = false;

	this.questionContainer = createElement('div', 'question-container');

	
	const questionHeader = createElement('h2', 'question', question);
	this.questionContainer.appendChild(questionHeader);

	const answers = createElement('div', 'answers');
	this.questionContainer.appendChild(answers);

	// const answerDiv = createElement('div', 'options');
	// answers.appendChild(answerDiv);

	const answerImg = new Image();
	answerImg.src = answer;
	answers.appendChild(answerImg);
	answerImg.addEventListener('click', function(){
		if(!answerAttempted) {
		answers.classList.add('correct-answer');
		answerAttempted = true;
			questionAnswered(true);
		}

	});

	//user chooses correct option
	// answers.addEventListener('click',function(){
	// 	if(!answerAttempted) {
	// 	answers.classList.add('correct-answer');
	// 	answerAttempted = true;
	// 		questionAnswered(true);
	// 	}
	// 



	for(let i = 0; i < options.length; i++){
		const option = createElement('div', 'option');
	

		const optionImg = new Image();
		optionImg.src = options[i];
		option.appendChild(optionImg);
		answers.appendChild(options);

		
	
	//user chooses wrong option 	
		optionImg.addEventListener('click', function(){
			if(!answerAttempted){
				optionImg.classList.add('wrong-answer');
				answerAttempted = true;
				questionAnswered(false);
			}

		});
	
		}

		//shuffles options
		for ( let i = answers.children.length; i >= 0; i-- ){
			let index = Math.floor(Math.random() * i);
			let child = answers.children[index];
			answers.appendChild(child);
		}

 
	}

	getHTML(){
		return this.questionContainer;
	}
}