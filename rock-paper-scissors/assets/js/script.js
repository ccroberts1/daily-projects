//Global Variable Declarations
var wins = 0;
var losses = 0;
var ties = 0;


//Functions

function startGame() {

//Sets userChoice logic

    var userChoice = prompt("Please choose Rock, Paper or Scissors");

    console.log(userChoice);

//Sets computerChoice logic

    var computerOptions = ["Rock", "Paper", "Scissors"]

    var randomNum = Math.floor(Math.random() * computerOptions.length);

    var computerChoice = computerOptions[randomNum];
    alert("Computer chose " + computerChoice + "!");

//If statement for determining winner
    if (userChoice === "Rock" && computerChoice !== "Paper") {
        alert("You've won!");
        wins++;
    } else if  (userChoice === "Paper" && computerChoice !== "Scissors") {
        alert("You've won!");
        wins++;
    }  else if (userChoice === "Scissors" && computerChoice !== "Rock") {
        alert("You've won!");
        wins++;
    } else if (userChoice === computerChoice) {
        alert("This was a tie!");
        ties++;
        console.log(ties);
        } else {
        alert("Computer wins!")
        losses++;
    };
};

startGame();















