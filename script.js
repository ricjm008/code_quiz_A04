let leaderboard = [];
const questions = {
    question1: {
        name: "What does HTML stand for?",
        choices: [
            ["Hypertext Markup Language", true],
            ["Hostile Tank Missile Launch", false],
            ["Horizontally Trained Master League", false],
            ["Hexagon Type Microlaser", false]
        ]
    },
    question2: {
        name: "What does CSS stand for?",
        choices: [
            ["Cascading Style Sheets", true],
            ["Cash Safe System", false],
            ["Coordinated Search Software", false],
            ["Careful Siren Sounding", false]
        ]
    },
    question3: {
        name: "What does JS stand for?",
        choices: [
            ["Javascript", true],
            ["Juvenile Screening", false],
            ["Juxtaposed Senses", false],
            ["Joyful Silence", false]
        ]
    },
    question4: {
        name: "What is the name of the abbreviation system used for writing HTML and other languages?",
        choices: [
            ["Emmet abbreviation", true],
            ["Einstein abbreviation", false],
            ["Edison abbreviation", false],
            ["Eton abbreviation", false]
        ]
    },  
    question5: {
        name: "What are the six primitive data types in JS?",
        choices: [
            ["Number, String, Boolean, Null, Undefined, Symbol", true],
            ["1, 2, 3, 4, 5, 6", false],
            ["Integer, Decimal, Fraction, Square Root, Exponent, Irrational", false],
            ["Adverb, Noun, Adjective, Conjunction, Verb, Sentence", false]
        ]
    },
    question6: {
        name: "What is the primary scripting language of the internet?",
        choices: [
            ["Javascript", true],
            ["PHP", false],
            ["C++", false],
            ["Python", false]
        ]
    },
    question7: {
        name: "When was HTML invented?",
        choices: [
            ["1993", true],
            ["1984", false],
            ["2007", false],
            ["2011", false]
        ]
    },
    question8: {
        name: "What is the most popular web browser for desktops?",
        choices: [
            ["Google Chrome", true],
            ["Apple Safari", false],
            ["Microsoft Edge", false],
            ["Mozilla Firefox", false]
        ]
    },
    question9: {
        name: "What is the most trafficked website on the internet?",
        choices: [
            ["Google.com", true],
            ["Facebook.com", false],
            ["Youtube.com", false],
            ["Wikipedia.org", false]
        ]
    },
    question10: {
        name: "How much information is on the internet?",
        choices: [
            ["50 trillion gigabytes", true],
            ["50 billion gigabytes", false],
            ["100 billion gigabytes", false],
            ["1 trillion gigabytes", false]
        ]
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
        function getAnswers(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
                return array
            }
        getAnswers(newQuestions[i].choices);
        currentQuestion = `
        <h3>${newQuestions[i].name}</h3>
        <ul>
            <li>
                <button class="gameButtons">${newQuestions[i].choices[0]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].choices[1]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].choices[2]}</button>
            </li>
            <li>
                <button class="gameButtons">${newQuestions[i].choices[3]}</button>
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
        // $(".gameButtons").addEventListener("click", function(){answer= $(".gameButtons").html()});
        // if (answer == newQuestions[i-1].trueChoice) {
        //     correctAnswer()
        // } else if (answer == newQuestions[i-1].falseChoices) {
        //     incorrectAnswer()
        // }
        // if (i < questions.length && timer > 0) {
        //     playGame()
        // } else if (i >= questions.length) {
        //     results()
        // } else if (timer <= 0) {
        //     timesUp()
        //     results()
        // }
        
        
    }
}
$(".gameButtons").addEventListener("click", playGame);

playGame();
    

}
$(".startGame").click(startGame);
