//Global Variables

var numToMatch;
var userTotal = 0; // total game score
var winCounter = 0; // number of wins
var lossCounter = 0; // number of losses
var gameCompleted = false;

var crystalLot = {
    icyGem: {
        value: 0
    },
    diamondGem: {
        value: 0
    },
    rainbowGem: {
        value: 0
    },
    blueGem: {
        value: 0
    }
 };

 // function for generating random numbers
function randomNum(min, max) {
    return Math.floor((Math.random() * max -min +1) + min);
}

function gameStart(){
    numToMatch = randomNum(19,120);
    userTotal = 0;
    $("#matchNum").text(numToMatch);
    $("#totalScore").text(userTotal);
    $("#numWins").text(winCounter);
    $("#numLosses").text(lossCounter);

icyGem.value = randomNum(1,12);
diamondGem.value = randomNum(1,12);
rainbowGem.value = randomNum(1,12);
blueGem.value = randomNum(1,12);
}

$("#icyGem").on("click", function(){
    userTotal += icyGem.value;
    setup();
});
$("#diamondGem").on("click", function(){
    userTotal += diamondGem.value;
    setup();
});
$("#rainbowGem").on("click", function(){
    userTotal += rainbowGem.value;
    setup();
});
$("#blueGem").on("click", function(){
    userTotal += blueGem.value;
    setup();
});

gameStart();

function setup() {
    if (userTotal === numToMatch) {
        winCounter++;
        gameStart();
    } else if (userTotal > numToMatch){
        lossCounter++;
        gameStart();
        $('#playAgain').show(); 
    }
    $("#totalScore").text(userTotal);
}

// when the user clicks on Play Again button, the game will restart
$('#playAgain').on('click', function(){
    $('#playAgain').hide();
    gameStart();
});








































// // we need a function that will generate a random number to match at the start of each game
// function setup(){

//     var numToMatch = Math.floor((Math.random() * 120) + 19);
//         console.log(numToMatch);
//         $("#matchNum").html(numToMatch);

//     var icyGem = Math.floor((Math.random() * 12) + 1);
//         console.log(icyGem)
//         $("#icyGem").attr('data-val', icyGem);

//     var diamondGem = Math.floor((Math.random() * 12) + 1);
//         console.log(diamondGem);
//         $("#diamondGem").attr('data-val', diamondGem);

//     var rainbowGem = Math.floor((Math.random() * 12) + 1);
//         console.log(rainbowGem);
//         $("#rainbowGem").attr('data-val', rainbowGem);

//     var blueGem = Math.floor((Math.random() * 12) + 1);
//         console.log(blueGem);
//         $("#blueGem").attr('data-val', blueGem);


//     userTotal = 0;  // this will reset the total amount guessed by the user to match the randomNum back to 0
//     gameUpdate();
// }

// function gameUpdate() {
//     $('#matchNum').text(numToMatch);
//     $('#totalScore').text(userTotal);
//     $('#numWins').text(winCounter);
//     $('numLosses').text(lossCounter);
// }

// //crystal button functions

// $("#icyGem").on("click", function() {
//     userTotal += icyGem;
//     $('#totalScore').html(userTotal);
// });

// $("#diamondGem").on("click", function() {
//     userTotal += diamondGem;
//     $('#totalScore').html(userTotal);
// });

// $("#rainbowGem").on("click", function() {
//     userTotal += rainbowGem;
//     $('#totalScore').html(userTotal);
// });

// $("#blueGem").on("click", function() {
//     userTotal += blueGem;
//     $('#totalScore').html(userTotal);

// gameUpdate();
// winner();
// loser();
// });


// //function to verify if the user won
// function winner() {
//     if (userTotal === numToMatch) {
//         winCounter++;
//         $('#playAgain').show();
//     }
// }

// //function to verify if the user loss
// function loser(){
//     if (userTotal > numToMatch) {
//         lossCounter++;
//         $('#playAgain').show();
//     }
// }

// // when the user clicks on Play Again button, the game will restart
// $('#playAgain').on('click', function(){
//     $('#playAgain').hide();
//     setup();
// });



// setup();
// gameUpdate();