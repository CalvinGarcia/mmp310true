

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
startButton.addEventListener('click', function(){
	startButton.classList.add('disable');
	loadNextQuestion();
});

//callback function
function loadNextQuestion(){

let question = questions[currentQuestion].getHTML();
 quizContainer.appendChild(question);



}
//helper function to create html elements 
function createElement(tagName, className, text){
	const element = document.createElement(tagName);
	element.classList.add(className);
	element.textContent = text;
	return element;
}