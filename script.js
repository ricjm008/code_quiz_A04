let leaderboard = [];
const questions = [
    {
        name: "What does HTML stand for?",
        choices: [
            ["Hypertext Markup Language", true],
            ["Hostile Tank Missile Launch", false],
            ["Horizontally Trained Master League", false],
            ["Hexagon Type Microlaser", false]
        ]
    },
    {
        name: "What does CSS stand for?",
        choices: [
            ["Cascading Style Sheets", true],
            ["Cash Safe System", false],
            ["Coordinated Search Software", false],
            ["Careful Siren Sounding", false]
        ]
    },
    {
        name: "What does JS stand for?",
        choices: [
            ["Javascript", true],
            ["Juvenile Screening", false],
            ["Juxtaposed Senses", false],
            ["Joyful Silence", false]
        ]
    },
    {
        name: "What is the name of the abbreviation system used for writing HTML and other languages?",
        choices: [
            ["Emmet abbreviation", true],
            ["Einstein abbreviation", false],
            ["Edison abbreviation", false],
            ["Eton abbreviation", false]
        ]
    },  
    {
        name: "What are the six primitive data types in JS?",
        choices: [
            ["Number, String, Boolean, Null, Undefined, Symbol", true],
            ["1, 2, 3, 4, 5, 6", false],
            ["Integer, Decimal, Fraction, Square Root, Exponent, Irrational", false],
            ["Adverb, Noun, Adjective, Conjunction, Verb, Sentence", false]
        ]
    },
    {
        name: "What is the primary scripting language of the internet?",
        choices: [
            ["Javascript", true],
            ["PHP", false],
            ["C++", false],
            ["Python", false]
        ]
    },
    {
        name: "When was HTML invented?",
        choices: [
            ["1993", true],
            ["1984", false],
            ["2007", false],
            ["2011", false]
        ]
    },
    {
        name: "What is the most popular web browser for desktops?",
        choices: [
            ["Google Chrome", true],
            ["Apple Safari", false],
            ["Microsoft Edge", false],
            ["Mozilla Firefox", false]
        ]
    },
    {
        name: "What is the most trafficked website on the internet?",
        choices: [
            ["Google.com", true],
            ["Facebook.com", false],
            ["Youtube.com", false],
            ["Wikipedia.org", false]
        ]
    },
    {
        name: "How much information is on the internet?",
        choices: [
            ["50 trillion gigabytes", true],
            ["50 billion gigabytes", false],
            ["100 billion gigabytes", false],
            ["1 trillion gigabytes", false]
        ]
    },
];
const newScore = {
    name: "",
    score: 0
}
const $playQuestion = document.getElementById("playGame")
const $timer = document.getElementById("timer")
const startGame= function () {
    let score = 0;
    function scramble(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            return array
        }
        console.log("Questions scrambled");
        return array;
    };     
    scramble(questions);
    let  i= 0;
    function setTime() {
            // Sets interval in variable
            var timerInterval = setInterval(function() {
              secondsLeft--;
              timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
              console.log("Timer set");
              if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                timesUp();
              }
          
            }, 1000);
          }
    setTime()
    let secondsLeft = 45;
    function playQuestion() {
        scramble(questions[i].choices);
        currentQuestion = `
        <h3>${questions[i].name}</h3>
        <div class="-m-2 text-center">
        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex px-2">${questions[i].choices[0]}</span>
            </div>
        </div>
        
        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex px-2">${questions[i].choices[1]}</span>
            </div>
        </div>
        
        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex px-2">${questions[i].choices[2]}</span>
            </div>
        </div>

        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex px-2">${questions[i].choices[3]}</span>
            </div>
        </div>
        </div>
        `
        $playQuestion.children.remove();
        $playQuestion.append(currentQuestion);
        function correctAnswer() {
            score = score + 5;
            $playQuestion.children.remove();
            $playQuestion.append(`<h3>Correct!</h3>`)
            console.log("Correct Answer");
        }
        function incorrectAnswer() {
            timer = timer - 5;
            $playQuestion.children.remove();
            $playQuestion.append(`<h3>Incorrect!</h3>`)
            console.log("Incorrect Answer");
        }
        function timesUp() {

        }
        function results() {
            $playQuestion.children.remove();
            let gameResults = `
            <h3>Results</h3>
            <p>Score: ${score}</p>
            <form>
                <h4>Submit Quiz Score</h4>
                <label for="newScore>Enter Name: </label>
                <input type="text" id="newScoreName" name="newScore"/>
            </form>`
            $playQuestion.append(gameResults);
            newScore = {
                name: newScoreName,
                score: score
            }
            localStorage.setItem("newScore", JSON.stringify(newScore))
        }
        const answer = "";
        i++;
        $(".gameButtons").addEventListener("click", function(){answer= $(".gameButtons").html()});
        answer = questions[i-1].choices.find(answer);
        if (answer[1] === true) {
            correctAnswer()
        } else if (answer == false) {
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
playQuestion();
}
$(".startGame").click(startGame);
