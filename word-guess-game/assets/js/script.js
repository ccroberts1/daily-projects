//VARIABLE DECLARATIONS

//store references to dom elements in variables
var wins = 0;
var losses = 0;

var count = 20;

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

var wordGuess = document.querySelector(".word-blanks");

var startButton = document.querySelector(".start-button");

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

startButton.addEventListener("click", getRandomWord);

//will need to capture keys pressed
//compare whether it is part of the word that has been chosen and display the keys in the word that match

document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  var wordCheck = randomWord.toLowerCase();
  var displayWordArray = displayWord.split("");
  console.log(displayWordArray);
  console.log(wordCheck);
  if (wordCheck.includes(event.key)) {
    for (i = 0; i < wordCheck.length; i++) {
      if (event.key === wordCheck[i]) {
        displayWordArray[i] = event.key;
        displayWord = displayWordArray.join("");
        wordGuess.textContent = displayWord;
      }
    }
  }
}

//need to create a timer: setInterval, clearInterval
setInterval(gameOver, 3000);

function gameOver() {
  if (displayWord != randomWord) {
    wordGuess.textContent = "GAME OVER";
  }
}

//display "GAME OVER" in same spot as the blank word once time is up - last piece I work on

//display success message if user gets all the letters
