let leaderboard = [];
const questions = [
    question1= {
        name: "Whats coding?",
        falseChoices: ["boring", "silly", "useless"],
        trueChoice: "fun"
    },
    question2= {
        name: "Is coding hard?",
        falseChoices: ["Yeah, real tricky", "Can't wrap my head around it", "Near impossible"],
        trueChoice: "Nah, it's a breeze"
    },
    question3= {
        name: "What's my middle name?",
        falseChoices: ["safety", "non-hazard", "stable"],
        trueChoice: "danger"
    },
    question4= {
        name: "What's 2 + 2?",
        falseChoices: ["5", "6", "3"],
        trueChoice: "4"
    },  
    question5= {
        name: "Why is the sky blue?",
        falseChoices: ["God's will", "Inexpicable", "Jet fuel"],
        trueChoice: "Blue tinted sunglasses on planet earth"
    },
    question6= {
        name: "Who are you?",
        falseChoices: ["I don't know", "Who's asking", "Mind your own business"],
        trueChoice: "I am me"
    },
    question7= {
        name: "Help me, Lord",
        falseChoices: ["Stay calm and carry on", "Help yourself", "God cannot hear you"],
        trueChoice: "Rise and shake off your shackles"
    },
    question8= {
        name: "What is javascript?",
        falseChoices: ["An Indonesian alphabet", "A cup of coffee", "An enlightened philosophy"],
        trueChoice: "A programming language"
    },
    question9= {
        name: "Why learn coding?",
        falseChoices: ["the internet", "problem-solving", "changing economic relations"],
        trueChoice: "mining crypto"
    },
    question10= {
        name: "Will Vladimir Lenin rise again and lead glorious revolution?",
        falseChoices: ["No, necromancy is impossible", "Communism has fallen in Russia", "The revolution was betrayed"],
        trueChoice: "Glory to the immortal science of Marxism"
    },
]
const newScore = {
    name: "",
    score: 0
}
const $playGame = $("#playGame");
const $timer = $("#timer");
const startGame= function () {
    let score = 0;
    function getQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            return array
        }
    };     
    getQuestions(questions);
    let  i= 0;
    
    function playGame() {
        let secondsLeft = 45;
        
        function setTime() {
            // Sets interval in variable
            var timerInterval = setInterval(function() {
              secondsLeft--;
              $timer.empty();
              $timer.append(`<p id="timer">${secondsLeft}</p>`)
              if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                timesUp();
                return;
              }
              
            }, 1000);
            console.log("set timer");
            
          }
        function asdf() {
            
        currentQuestion = `
        <div id="playGame">
            <h3>${questions[9].name}</h3>
            <ul>
                <li>
                    <button class="gameButtons">${questions[9].falseChoices[0]}</button>
                </li>
                <li>
                    <button class="gameButtons">${questions[9].falseChoices[1]}</button>
                </li>
                <li>
                    <button class="gameButtons">${questions[9].falseChoices[2]}</button>
                </li>
                <li>
                    <button class="gameButtons">${questions[9].trueChoice}</button>
                </li>
            </ul>
        </div>
        `
        $playGame.empty();
        $playGame.append(currentQuestion);
        console.log("let's play");
        }
        asdf();
        setTime()
        function correctAnswer() {
            score = score + 5;
            $playGame.empty();
            $playGame.append(`<h3>Correct!</h3>`)
        }
        function incorrectAnswer() {
            timer = timer - 5;
            $playGame.empty();
            $playGame.append(`<h3>Incorrect!</h3>`)
        }
        function timesUp() {
            $playGame.empty();
            $playGame.append(`<h3>Time's Up!</h3>`)
        }
        function results() {
            $playGame.empty();
            let gameResults = `
            <h3>Results</h3>
            <p>Score: ${score}</p>
            <form>
                <h4>Submit Quiz Score</h4>
                <label for="newScore>Enter Name: </label>
                <input type="text" id="newScoreName" name="newScore"/>
            </form>`
            $playGame.append(gameResults);
            newScore = {
                name: newScoreName,
                score: score
            }
            localStorage.setItem("newScore", JSON.stringify(newScore))
            console.log("play game");
        }
        answers = questions[i].falseChoices + questions[i].trueChoice;
        function getAnswers(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        questions[i].answers = getAnswers(answers);
        
        const answer = "";
        i++;
        $(".gameButtons").addEventListener("click", function(){answer= $(".gameButtons").html()});
        if (answer == newQuestions[i-1].trueChoice) {
            correctAnswer()
        } else if (answer == newQuestions[i-1].falseChoices) {
            incorrectAnswer()
        }
        if (i < questions.length && secondsLeft > 0) {
            playGame()
            console.log("lets gooo");
        } else if (i >= questions.length) {
            results()
            console.log("game over");
        } else if (secondsLeft <= 0) {
            timesUp()
            results()
        }
        
        
    }
    $(".gameButtons").click(asdf);
    
    
}
playGame();
}
$(".startGame").click(startGame);
