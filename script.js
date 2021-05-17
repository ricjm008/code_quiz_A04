let leaderboard = [];
const questions = {
    question1: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question2: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question3: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question4: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },  
    question5: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question6: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question7: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question8: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question9: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
    question10: {
        name: "",
        falseChoices: [],
        trueChoice: ""
    },
}
const newScore = {
    name: "",
    score: 0
}
const $playGame = document.getElementById("playGame")
const $timer = document.getElementById("timer")
const startGame= function () {
    let score = 0;
    function getQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            return array
        }
    };     
    let newQuestions = getQuestions(questions);
    let  i= 0;
    
    function playGame() {
        let secondsLeft = 45;
        
        function setTime() {
            // Sets interval in variable
            var timerInterval = setInterval(function() {
              secondsLeft--;
              timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
          
              if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                timesUp();
              }
          
            }, 1000);
          }
        setTime()
        newQuestions[i].answers = newQuestions[i].falseChoices + newQuestions[i].trueChoice;
        function getAnswers(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        newQuestions[i].answers = getAnswers(newQuestions[i].answers);
        currentQuestion = `
        <h3>${newQuestions[i].name}</h3>
        <ul>
            <li>
                <button class="gameButtons">${newQuestions[i].answers[0]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].answers[1]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].answers[2]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].answers[3]}</button>
            </li>
        </ul>
        `
        $playGame.children.remove();
        $playGame.append(currentQuestion);
        function correctAnswer() {
            score = score + 5;
            $playGame.children.remove();
            $playGame.append(`<h3>Correct!</h3>`)
        }
        function incorrectAnswer() {
            timer = timer - 5;
            $playGame.children.remove();
            $playGame.append(`<h3>Incorrect!</h3>`)
        }
        function timesUp() {

        }
        function results() {
            $playGame.children.remove();
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
        }
        const answer = "";
        i++;
        $(".gameButtons").addEventListener("click", function(){answer= $(".gameButtons").html()});
        if (answer == newQuestions[i-1].trueChoice) {
            correctAnswer()
        } else if (answer == newQuestions[i-1].falseChoices) {
            incorrectAnswer()
        }
        if (i < questions.length && timer > 0) {
            playGame()
        } else if (i >= questions.length) {
            results()
        } else if (timer <= 0) {
            timesUp()
            results()
        }
        
        
    }
    $(".gameButtons").addEventListener("click", playGame);
    playGame();
    
}
}
$(".startGame").click(startGame);
