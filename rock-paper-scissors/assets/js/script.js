//Global Variable Declarations
var wins = 0;
var losses = 0;
var ties = 0;
var totalGames = 0;


//Functions

function startGame() {

//Sets userChoice logic

    var userChoice = prompt("Please choose Rock, Paper or Scissors");
    console.log(userChoice);

//Sets computerChoice logic

    var computerOptions = ["Rock", "Paper", "Scissors"]

    var randomNum = Math.floor(Math.random() * computerOptions.length);
    console.log(randomNum);

    var computerChoice = computerOptions[randomNum];
    console.log(computerChoice);
    alert("Computer chose " + computerChoice + "!");

//If statement for determining winner
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        alert("You've won!");
        wins++;
        totalGames++;
    } else if  (userChoice === "Paper" && computerChoice === "Rock") {
        alert("You've won!");
        wins++;
        totalGames++;
    }  else if (userChoice === "Scissors" && computerChoice === "Paper") {
        alert("You've won!");
        wins++;
        totalGames++;
    } else if (userChoice === computerChoice) {
        alert("This was a tie!");
        ties++;
        totalGames++;
        } else {
        alert("Computer wins!")
        losses++;
        totalGames++;
    };

//Current stats are displayed to the user
    alert("Stats so Far\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\nTotal Games Played: " + totalGames);
};

startGame();


//User confirms whether they want to play again
// var playAgain = confirm("Do you want to play again?")
















