// Creates an array that lists out all of the options.
var computerChoices = ['michael jordan', 'lebron james', 'allen iverson',
    'kobe bryant', 'bill russell', 'shaquille oneal', 'larry bird', 'magic johnson', 'james worthy', 'stephen curry',
    'kevin durant', 'dwyane wade', 'tim duncan', 'kevin garnett', 'ray allen', 'jason kidd', 'steve nash'
]

var wins = 0;
var loses = 0;
var guessesLeft = 12;


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById('directions-text');
var winsText = document.getElementById('win-text');
var lossesText = document.getElementById('wins-text');
var guessesleftText = document.getElementById('guessesleft-text');
var userguessesText = document.getElementById('userguesses-text');

var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Before user types" + computerChoices);

// Display the user and computer guesses, and wins/losses/guesses left.
//   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesleftText.textContent = "guesses left: " + Guessesleft;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();


    // if(userGuess === "r"|| userGuess || "p" || userGuess || "s")

    
}