// JS Doc
var $ = function (id) {
  return document.getElementById(id);
}

//Prompt question to user on page

var doYouHike = confirm("Do you like hiking?");
        if (doYouHike) {
          alert("Me too! Have fun playing my game!");
        }
      
        else {
          alert("This probably isn't the game for you.");
          window.location = "https://www.example.com";
        }
        
// Create Array of Words
var game = ['washington', 'jackson', 'madison', 'wildcat', 'moriah', 'bond', 'hale']

//Choose Word Randomly
var randNum = Math.floor(Math.random()* game.length);
var rightWord = [];
var wrongWord = [];
var choice = game[randNum];
var underScore = [];


//DOM Manipulation
var newUnderscore = document.getElementsByClassName('underscore');
var newRightGuess = document.getElementsByClassName('rightGuess');
var newWrongGuess = document.getElementsByClassName('wrongGuess');


//Create underscore length based on length of word
var generateUnderscore = () => {
  for (var i = 0; i < choice.length; i++) {
        underScore.push('_');
        newUnderscore[0].innerHTML = underScore.join('');
  }
  return underScore;
}

console.log(generateUnderscore());
//Capture User Guess -requires keypress event 
document.addEventListener('keypress', (event) => {
  var keyWord = String.fromCharCode(event.keyCode);
//If user guess is right
  if(choice.indexOf(keyWord) > -1) {
    //add to writeWord array
    rightWord.push(keyWord);
    
    //Replace underscore with right letter
    underScore[choice.indexOf(keyWord)] = keyWord;
      newUnderscore[0].innerHTML = underScore.join(' ');
      newRightGuess[0].innerHTML = rightWord;
    //Check to see if user word matches guesses
    if(underScore.join('') == choice) {

      alert('You Win!');
    }
    

  }  else {
    
    wrongWord.push(keyWord);
    newWrongGuess[0].innerHTML = wrongWord;
  }

});

// newUnderscore[0].innerHTML = generateUnderscore().join(' ');




if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}



