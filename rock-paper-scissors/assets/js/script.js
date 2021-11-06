//Global Variable Declarations
var wins = 0;
var losses = 0;
var ties = 0;
var totalGames = 0;


//Functions

function startGame() {

//Sets userChoice logic

    var userChoice = prompt("Please choose Rock, Paper or Scissors");

//Sets computerChoice logic

    var computerOptions = ["Rock", "Paper", "Scissors"]

    var randomNum = Math.floor(Math.random() * computerOptions.length);

    var computerChoice = computerOptions[randomNum];
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

//User confirms whether they want to play again. If truthy, runs function again. If falsy, returns.
    var playConfirm = confirm("Do you want to play again?");

    if (playConfirm) {
        startGame();
    } else {
        return;
    }
};

startGame();



















