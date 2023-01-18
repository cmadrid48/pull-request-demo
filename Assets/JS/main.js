// Selecting all elements
var startBtn = document.querySelector('.startBtn button');
var infoBox = document.querySelector('.infoBox');
var exitBtn = infoBox.querySelector('.buttons .quit');
var continueBtn = infoBox.querySelector('.buttons .restart');
var quizBox = document.querySelector(".quizBox")
var nextBtn = quizBox.querySelector('.nextBtn');
var totalQuestions = 0;
var questionNumber = 1;
var questionList =document.querySelector('.questionList');


// if "startBtn" is clicked iniate quiz
// This will open Rules

startBtn.onclick = ()=> {
    infoBox.classList.add("activeInfo");
}

// if "startBtn" is clicked iniate quiz
// takes user back to start button
exitBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");
}

continueBtn.onclick = ()=> {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add('activeQuiz');
    showQuestions(0);
    questionCounter(1);
}



nextBtn.onclick = () => {
    if(totalQuestions < questions.length - 1){
        totalQuestions++;
        questionNumber++;
        showQuestions(totalQuestions);
        questionCounter(questionNumber);

    } else {
        console.log('Questions Complete');
    }
}


//passing questions and applicable data from aRRAY
function showQuestions(index) {
    var question = document.querySelector('.question');
    
    var queTag = '<span>' + questions[index].question + '</span>';
    var optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    question.innerHTML = queTag;
    questionList.innerHTML = optionTag;

    var option = questionList.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = questions[totalQuestions].answer;
    var allOptions = questionList.children.length;
    if(userAnswer == correctAnswer) {
        answer.classList.add('correct')
        console.log('answer right!');
    }else {
        answer.classList.add('wrong')
        console.log('wronnnggggg!');
    }


    for (let i = 0; i < allOptions.length; ii++) {
        questionList.children[i].classList.add('disabled');
    }
}



function questionCounter(index){
    var quesCount = quizBox.querySelector('.totalQuestions');
    var totalCount = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    quesCount.innerHTML = totalCount;
}
