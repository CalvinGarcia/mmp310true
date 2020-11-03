class Question{
	constructor(question,answer,options){


	this.questionContainer = createElement('div', 'question-container');

	
	const questionHeader = createElement('h2', 'question', question);
	this.questionContainer.appendChild(questionHeader);

	const answers = createElement('div', 'answers');
	this.questionContainer.appendChild(answers);

	const answerDiv = createElement('div', 'option', answer);
	answers.appendChild(answerDiv);

	for(let i = 0; i < options.length; i++){
		let option = createElement('div','option', options[i]);
		answers.appendChild(option);

		}
 
	}

	getHTML(){
		return this.questionContainer;
	}
}