
// questions = list of all questions
// quizcontainer= where we put quiz
// reusultscontainer = place before results
// Submit button = submit 

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