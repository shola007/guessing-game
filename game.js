var randomNumber = Math.floor(Math.random()*10 + 1);
var guessCount = 1;
  document.getElementById('submit-guess').onclick = function(){
    var userGuess = document.getElementById('animal-guess').value;
    if (userGuess == randomNumber){
        alert('CONGRATULATION!!! YOU GUESSED THE NUMBER RIGHT,GOOD JOB');
    }
    else if (userGuess > randomNumber){
        guessCount++;
        alert('OOPS SORRY!! YOU NEED TO TRY A SMALLER NUMBER');
    }
    else{
        guessCount++;
        alert('OOPS SORRY!! YOU NEED TO TRY A HIGHER NUMBER');
    }
}



