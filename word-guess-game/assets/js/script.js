//VARIABLE DECLARATIONS

//DOM Element Selections
var wordGuess = document.querySelector(".word-blanks");
var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var winEl = document.querySelector(".win");
var loseEl = document.querySelector(".lose");

//Counters
var wins = 0;
var losses = 0;
var sec = 20;

//Word Selection
var words = [
  "Han",
  "Chewbacca",
  "Aayla",
  "Kit",
  "Lando",
  "Leia",
  "Rey",
  "Rose",
  "Vader",
  "Iden",
  "Jyn",
];
var randomWord = "";
var displayWord = "";

//Array of words, randomly choose a word for the user to guess
function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];

  //When user clicks start, word is hidden with underscores

  for (i = 0; i < randomWord.length; i++) {
    displayWord = displayWord.concat("_");
    console.log(randomWord[i]);
  }

  wordGuess.textContent = displayWord;
}

//Listens for user to press Start button and if so, retrieves a random word from the words array
startButton.addEventListener("click", startGame);

//Listens for key press from user and if so, runs function to compare randomWord variable with keys pressed
document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  //Checks key presses from user to compare to letters in random word and replaces underscores with that letter if it matches
  var wordCheck = randomWord.toLowerCase();
  var displayWordArray = displayWord.split("");
  console.log(wordCheck);
  if (wordCheck.includes(event.key)) {
    for (i = 0; i < wordCheck.length; i++) {
      if (event.key === wordCheck[i]) {
        displayWordArray[i] = event.key;
        displayWord = displayWordArray.join("");
        console.log(displayWordArray);
        console.log(displayWord);
        wordGuess.textContent = displayWord;
      }
    }
  }

  checkAnswer();
}

//Starts countdown timer
var timerFunction = setInterval(startTimer, 1000);

function startTimer() {
  sec--;
  timerCount.textContent = sec;
  if (sec < 1) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(timerFunction);
  if (displayWord != randomWord.toLowerCase()) {
    wordGuess.textContent = "GAME OVER";
    losses++;
    loseEl.textContent = losses;
  }
}

function checkAnswer() {
  if (displayWord === randomWord.toLowerCase()) {
    clearInterval(timerFunction);
    wordGuess.textContent = "Success!";
    wins++;
    winEl.textContent = wins;
  }
}

function startGame() {
  getRandomWord();
}

//save wins and losses to local storage

//display success message if user gets all the letters
