

// Quiz App


//html references

const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');

// quiz questions

let questions = [];
let currentQuestion = 0;

questions.push(new Question("what is 2+2", "4",["2","8"]));
questions.push(new Question("what is 2x2", "4",["2","8"]));
questions.push(new Question("what is 2 ÷ 2", "1",["2","1"]));

console.log(questions);


//events 
startButton.addEventListener('click', loadNextQuestion);

//callback function
function loadNextQuestion(){

	const questionContainer = document.createElement('div');
	questionContainer.classList.add('question-container');
	quizContainer.appendChild(questionContainer);

	const question = document.createElement('h2');
	question.classList.add('question');
	question.textContent = "what is 2 +2?" ;
	questionContainer.appendChild(question);

	const answers = createElement('div', 'answers');
	questionContainer.appendChild(answers);

	const option1 = createElement('div', 'option', '2');
	const option2 = createElement('div', 'option', '4');
	const option3 = createElement('div', 'option', '8');

	answers.appendChild(option1);
	answers.appendChild(option2);
	answers.appendChild(option3);

}

function createElement(tagName, className, text){
	const element = document.createElement(tagName);
	element.classList.add(className);
	element.textContent = text;
	return element;
}