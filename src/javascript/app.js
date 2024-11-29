const debug = true;
const quizeQuestionsArray = [{
    questions:"What position does Harry play on the Gryffindor Quidditch team?",
    answers:[{
            text: "Seeker", isCorrect: true,
        },
        {
            text: "Goalie", isCorrect: false,
        },
        {
            text: "Defender", isCorrect: false,
        }], 
},
{
    questions: "What kind of pets does Harry own?",
    answers: [{
        text: "Cat", isCorrect: false, 
    },
    {
        text: "Owl", isCorrect: true,
    }, 
    {
        text: "A rat", isCorrect:false,

    }],
}, 
{
    questions: "What is the name of the pub at the entrance of Diagon Alley?",
    answers: [{
        text: "The Leaky Cauldron", isCorrect: true,
    },
    {
        text: "The Cauldron", isCorrect: false,
    },
    {
        text: "The Faraway pub", isCorrect: false,
    }],
},
{
    questions: "Who is the headmaster of Hogwarts when Harry arrives?", 
    answers: [{
        text: "Snape", isCorrect: false,
    },
    {
        text: "Lockhart", isCorrect: false,
    },
    {
        text: "Dumbledore", isCorrect: true,
    }], 
},
{
    questions: "Who does Harry live with before he went to Hogwarts?", 
    answers: [{
        text: "His parents", isCorrect: false,
    },
    {
        text: "His uncle and aunt and cousing", isCorrect: true,
    },
    {
        text: "his uncle and aunt", isCorrect: false,
    }],
},

{
    questions: "What is the Voldermorts full, real name?", 
    answers: [{
        text: "Timothy Riddle Marvelo", isCorrect: false,
    },
    {
        text: "Thomas Riddle Marvolo", isCorrect: false,
    },
    {
        text: "Tom Marvolo Riddle", isCorrect: true
    }],
},
{
    questions: "Who is Harrys nemesis throughout his time in Hogwarts?", 
    answers: [{
        text: "Draco Malfoy", isCorrect: true,
    },
    {
        text: "Ron Weasley", isCorrect: false,
    },
    {
        text: "Hermione Granger", isCorrect: false
    }],
}, 
{
    questions: "In book 3, what is Neville Longbottoms greatest fear, revealed upon facing a boggart in Lupins class?",
    answers: [{
        text: "Snape", isCorrect: false,
    },
    {
        text: "A clown", isCorrect: false,
    },
    {
        text: "Professor Snape", isCorrect: true,
    }],  
},
]

let allAnswers = []

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

    //implementing radio and label button 

    currentQuestion.answers.forEach((answers, index)=>{

        console.log(answers, "HELLO")

        const {text, isCorrect} = answers;

        console.log(text, isCorrect, "HELLO2222");

        const radio = document.createElement("input");
        radio.type = "radio"; 
        radio.name = "answers";

        if (isCorrect) {
            radio.value = 1
        } else {
            radio.value = 0
        }
        
        radio.id = `answers${index}`

       const label = document.createElement("label");
       label.htmlFor = radio.id;
       label.textContent = text;

       const inputContainer = document.createElement("div")
       

       answerOptions.appendChild(inputContainer);

       
        inputContainer.appendChild(radio)
        inputContainer.appendChild(label)

    });

                //text button progression
        buttonText.textContent = `${elementNumber+1} of ${quizeQuestionsArray.length}` 

    }

     //trenger jeg denne???

        progressionButton.addEventListener("click", function(){
            nextQuestion();
        });

        //handling next question + tracking score

      
        
        function nextQuestion(){
            const selectedAnswer = document.querySelector(`input[name="answers"]:checked`);
            const selectedAnswerId = selectedAnswer.id
            console.log(selectedAnswerId, "selectedAnswerId")
            const selectedAnswerText = document.querySelector(`label[for="${selectedAnswerId}"]`)?.innerText
            
            if (!selectedAnswer){
                alert("Please choose an answer");
              return;
             }
             const scoreNumber = parseInt(selectedAnswer.value);
             totalScore += scoreNumber; 
            
             allAnswers.push({answerText: selectedAnswerText, wasCorrect: scoreNumber ? true: false})

             console.log(allAnswers, "answers")
     
             currentQuestionIndex++;
           
           if (currentQuestionIndex < quizeQuestionsArray.length){
             displayquestions(currentQuestionIndex);
           } else
             displayScore();
        }
      



   
    //function to go to the next question button
    progressionButton.addEventListener("click", function(){
    if (currentQuestionIndex < quizeQuestionsArray.length) {
        displayquestions(currentQuestionIndex);
    } else{
       /*  displayScore(); */
        console.log(allAnswers, "HEI HEI HEI HEIE HIEHFusdhfisdhfksdhfijksdhi")
    }
}); 

function displayScore(){
    console.log(`Quize is complete! Your score is: ${totalScore}`);

    const scoreDisplay = document.querySelector(".quize__score")
    const scoreHeader = document.createElement("h3")
    scoreHeader.innerText = "Your Results:"

    
    scoreDisplay.appendChild(scoreHeader)
    

    quizeQuestionsArray.map((question, qIndex) => {
        const box = document.createElement("div")
        const text = document.createElement("p")

   


        box.style.flex
        box.style.flexDirection = "column"
        box.style.border = "2px solid black"
        box.style.width = "200px"



        text.innerText = question.questions
        text.style.color = question.answers
        
        scoreDisplay.appendChild(box)
        box.appendChild(text)


        question.answers.forEach((answer, aIndex) => {
            const answerBox = document.createElement("div")
            const answerText = document.createElement("p")

            answerBox.width = "100%"

            const selectedAnswerColor = "orange"
            const rightAnswer = answer.isCorrect

            let selectedAnswerEmoji = ""

            if (rightAnswer) {
                selectedAnswerEmoji = "✅"
            } else {
                selectedAnswerEmoji = "❌"
            }

           if (allAnswers[qIndex].answerText === answer.text) {
            answerBox.style.border = "2px solid" + selectedAnswerColor
           } else {
             answerBox.style.border = "none"
           }

            answerText.innerText = quizeQuestionsArray[qIndex].answers[aIndex].text + " " + selectedAnswerEmoji

            box.appendChild(answerBox)
            answerBox.appendChild(answerText)

        })






    })
   
    
}

