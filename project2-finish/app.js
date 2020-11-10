

// Quiz App


//html references





const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');


// quiz questions

let questions = [];
let currentQuestion = 0;
let score = 0;



questions.push(new Question("Which Avenger is Captain America?", "answers/capanswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Which one of these Avengers has also been a memeber of the Fantastic Four and X-Men? ", "answers/wolverineanswer.jpg",["answers/ironanswer.jpg", "answers/capanswer.jpg"]));
questions.push(new Question("Which Avenger is a founding member of the team?", "answers/ironanswer.jpg",["answers/wolverineanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Which Avenger has financed the team with his own money?", "answers/spider-answer.jpg",["answers/capanswer.jpg", "answers/thinganswer.jpg"]));
questions.push(new Question("Who is the first black Marvel hero?", "answers/thinganswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Who was the first villain the Avengers faced together?", "answers/thinganswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Who is the first Avengers Villain to become an Avenger?", "answers/thinganswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Who is the longest serving Avenger?", "answers/thinganswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));
questions.push(new Question("Which Avenger died in their first appearance?", "answers/thinganswer.jpg",["answers/ironanswer.jpg", "answers/spider-answer.jpg"]));


// console.log(questions);


//events 
startButton.addEventListener('click', function(){
	startButton.classList.add('disable');
	// nextButton.classList.remove('disable');
	message.textContent = "Choose an Answer"
	loadNextQuestion();
});


nextButton.addEventListener('click',function(){
	quizContainer.textContent = ''; //inelegent way to get rid of question
	nextButton.classList.add('disable');
	currentQuestion++;
	loadNextQuestion();
	message.textContent = "Choose an Answer";
});

endButton.addEventListener('click',function(){
	quizContainer.textContent = ''; //inelegent way to get rid of question
	endButton.classList.add('disable');
	message.textContent = "Your Score is " + score + " out of " + questions.length + " ! ";
	// message.textContent = ` You Got ${score} out of ${questions.length}`!; string literal.

});

//callback function
function loadNextQuestion(){

let question = questions[currentQuestion].getHTML();
 quizContainer.appendChild(question);

}

function questionAnswered(isCorrect) {
	if (isCorrect) {
		message.textContent = "Correct!";
		score++;
	}
	else{
		message.textContent = "Nope!";
	}

	if(currentQuestion < questions.length - 1){
		nextButton.classList.remove('disable');

	} else{
		endButton.classList.remove('disable');
	}
	
}

//helper function to create html elements 
function createElement(tagName, className, text){
	const element = document.createElement(tagName);
	element.classList.add(className);
	element.textContent = text;
	return element;
}

