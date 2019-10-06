var matchNum; //number to match
var totalScore = 0; // number for total score
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var keyClick; //for the gem button click
var isFinished = false; // when true, game can start again

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random number between two values
    var randomNum = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    //random number between 19-120 for matchNum
    matchNum = randomNum(19, 120);

    //adds 'data-val' to each gem with a random number between 1-12
    $('#icyGem').attr('data-val', randomNum(1, 12));
    $('#diamondGem').attr('data-val', randomNum(1, 12));
    $('#rainbowGem').attr('data-val', randomNum(1, 12));
    $('#blueGem').attr('data-val', randomNum(1, 12));

    //resets score to 0
    totalScore = 0;
    //clears giphy-embed to now show any gifs
    // $('#giphy-embed').attr('src', '');
    //show the selected elements on the screen 
    updateScreen(); 
}

//updates the HTML from the functions
function updateScreen() {
    $('#matchNum').text(matchNum);
    $('#totalScore').text(totalScore);
    $('#numWins').text(numWins);
    $('#numLosses').text(numLosses);
}



//function to check if the player is a winner
function isWinner() {
    // if the totalScore # matches the matchNum # then isWinner will run
    if (totalScore === matchNum) {
        numWins++;
        $('#playAgain').show();
        $('.crystalBox').hide();
    }
}
//function to check if the player is a loser
function isLoser() {
    if (totalScore > matchNum) {
        numLosses++;
        $('#playAgain').show();
        $('.crystalBox').hide();
    }
}
//when playAgain button is clicked, game restarts 
$('#playAgain').on('click', function(){
    $('#playAgain').hide();
    $('.crystalBox').show();
    setup();
})

//function to check when gem button is clicked 
$('.gemButton').on('click', function(){
    keyClick = $(this).attr('data-val'); //keyClick grabs the data val # from gem button
    totalScore += parseInt(keyClick); //adds the value to the score
    //runs the functions to update the html and to check if user is a winner/loser
    updateScreen();
    isWinner();
    isLoser();
  });

  //execute the starting functions
  setup();
  updateScreen();