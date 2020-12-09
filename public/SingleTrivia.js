
// questions = list of all questions
// quizcontainer= where we put quiz
// reusultscontainer = place before results
// Submit button = submit 

var myQuestions = [
	{
		question: "Foods high in saturated fats tend to raise",
		answers: {
			a: 'Blood Cholesterol',
			b: 'Blood Oxygen',
			c: 'Blood'
		},
		correctAnswer: 'a'
	},
	{
		question: "How many pounds of fat are needed to store 3500 calories",
		answers: {
			a: '10',
			b: '1',
			c: '5'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the strongest muscle in the body",
		answers: {
			a: 'Bicep',
			b: 'Heart',
			c: 'Pectorals'
		},
		correctAnswer: 'b'
	},
	{
		question: "Why is stretching important after a workout?",
		answers: {
			a: 'To make our muscles longer',
			b: 'To prevent diabetes',
			c: 'To relax strained muscles'
		},
		correctAnswer: 'c'
	},
	{
		question: "What does calcium do?",
		answers: {
			a: 'Works a 9-5',
			b: 'Makes Bones strong',
			c: 'Loves its wife'
		},
		correctAnswer: 'b'
	},
	{
		question: "Where is the largest bone in your body located?",
		answers: {
			a: 'Leg',
			b: 'Head',
			c: 'Toe'
		},
		correctAnswer: 'a'
	},
	{
		question: "Where is vitamin A primarily stored",
		answers: {
			a: 'Brain',
			b: 'Ear',
			c: 'Liver'
		},
		correctAnswer: 'c'
	},
	{
		question: "If you feel pain during exercise you should?",
		answers: {
			a: 'Keep going wimp',
			b: 'Cut off injured area',
			c: 'Stop the exercise'
		},
		correctAnswer: 'c'
	},
	{
		question: "How long should you warm up before exercising?",
		answers: {
			a: '10-15 minutes',
			b: 'Never since it wastes energy',
			c: '2 hours'
		},
		correctAnswer: 'a'
	},
	{
		question: "Approximately how much of your body weight is muscle?",
		answers: {
			a: '0%',
			b: '90%',
			c: '40%'
		},
		correctAnswer: 'c'
	},
]

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = []//The questions that get displayed
        var answers;//their answers

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        
        
	}

	function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var theirAnswers = '';//their answers
        var correctAnswers = 0;//current number correct
        for(var i=0; i<questions.length; i++){
            theirAnswers = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(theirAnswers===questions.correctAnswers){
                correctAnswers++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = correctAnswers + ' out of ' + questions.length;
	}

	// shows the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);