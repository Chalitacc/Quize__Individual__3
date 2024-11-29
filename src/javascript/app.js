const debug = true;
const quizeQuestionsArray = [{
    questions:"What position does Harry play on the Gryffindor Quidditch team?",
    answers:["Seeker, 1", "Goalie, 0", "Defender,0"],
},
{
    questions: "What kind of pets does Harry own?",
    answers: ["Cat, 0", "Owl, 1", "A rat, 0"],
}, 
{
    questions: "What is the name of the pub at the entrance of Diagon Alley?",
    answers: ["The Leaky Cauldron, 1", "The Cauldron, 0", "The Faraway pub, 0"],
},
{
    questions: "Who is the headmaster of Hogwarts when Harry arrives?", 
    answers: ["Snape, 0", "Lockhart,0", "Dumbledore, 1"], 
},
{
    questions: "Who does Harry live with before he went to Hogwarts?", 
    answers: ["His parents,0", "His uncle and aunt and cousing,1", "his uncle and aunt,0"],
},

{
    questions: "What is the Voldermorts full, real name?", 
    answers: ["Timothy Riddle Marvelo,0", "Thomas Riddle Marvolo, 0", "Tom Marvolo Riddle,1"],
},
{
    questions: "Who is Harrys nemesis throughout his time in Hogwarts?", 
    answers: ["Draco Malfoy,1", "Ron Weasley,0", "Hermione Granger,0"],
}, 
{
    questions: "In book 3, what is Neville Longbottoms greatest fear, revealed upon facing a boggart in Lupins class?",
    answers: ["A clown, 0", "A snake, 0", "Professor Snape, 1"],  
},
];

if(debug){
console.log(quizeQuestionsArray);
};

const questionsContainer = document.querySelector(".quize__container--questions");
const scoreBoard = document.querySelector(".quize__scoreboard");
const progressionButton = document.querySelector(".quize__progress--button");
const radioButtons = document.querySelector(".radio__container");
const buttonText = document.querySelector(".quize__progress--button .button__text");




// let currentQuestion = 0;
let totalScore = 0; 
let currentQuestionIndex = 0; 


displayquestions(currentQuestionIndex);

function displayquestions(elementNumber){
    const currentQuestion = quizeQuestionsArray[elementNumber];

    const questionElement = document.querySelector(".quize__questions")
    questionElement.textContent = currentQuestion.questions;

    //clearing previous questions

    const answerOptions = document.querySelector(".answer__options")
    answerOptions.innerHTML = ``;
    console.log(answerOptions);

    //implementing radio and label button 
    currentQuestion.answers.forEach((answers, index)=>{
        const [answersText, isCorrect] = answers.split(",");

        const radio = document.createElement("input");
        radio.type = "radio"; 
        radio.name = "answers";
        radio.value = isCorrect.trim();
        radio.id = `answers${index}`

       const label = document.createElement("label");
       label.htmlFor = radio.id;
       label.textContent = answersText;

       answerOptions.appendChild(radio);
       answerOptions.appendChild(label);
       answerOptions.appendChild(document.createElement("br"));

    });

                //text button progression
        buttonText.textContent = `${elementNumber+ 1} of ${quizeQuestionsArray.length}` 

    }
        progressionButton.addEventListener("click", function(){
            nextQuestion();
        });

        //handling next question + tracking score
        
        function nextQuestion(){
            const selectedAnswer = document.querySelector(`input[name="answers"]:checked`);
        }
        //     if (!selectedAnswer){
        //     alert("Please choose an answer ⚡️");
        //     return;
        // }

        //score tracking 

      const scoreNumber = parseInt(selectedAnswer.value, 10);
        totalScore += scoreNumber; 

        console.log("You scored:", scoreNumber, "Total Score", totalScore);

        currentQuestionIndex++;
      
      if (currentQuestionIndex < quizeQuestionsArray.length){
        displayquestions(currentQuestionIndex);
      } else
        displayScore();


        
    
    


    //function to go to the next question button
    progressionButton.addEventListener("click", function(){
    currentquestion++;
    if (currentquestion < quizeQuestionsArray.length) {
        displayquestions(currentquestion);
    } else{
        displayScore();
    }
}); 

function displayScore(){
    console.log(`Quize is complete! Your score is: ${totalScore}`);

    //redirecting user to another page so they can see their score
    window.location.href = "score.html";
    
}








// const quizeQuestion = document.querySelector(".quize__questions");
// quizeQuestion.textContent = quizeQuestionsArray[elementNumber].questions;   
// console.log(renderQuize);

// const quizeAnswersText = document.querySelector(".label__answers");
// quizeAnswersText.textContent = quizeQuestionsArray[elementNumber].answers;
// console.log(quizeAnswersText);


// const quizeRadio = document.querySelector(".radio__buttons");
// quizeRadio.radioButtons = quizeQuestionsArray[elementNumber].answers;