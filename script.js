function computerPlay () { // randomize computer's selection
    let number = Math.floor(Math.random() * 99);
    let result;
    if (number % 3 == 0) {
        result = "Rock";
    } else if (number % 3 == 1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result;
}

function round (playerSelection) { // play a round
    let computerSelection = computerPlay();
    choices[0].innerHTML = playerSelection;
    choices[2].innerHTML = computerSelection;
    let result = '';
    if (playerSelection == computerSelection) {
        result = "Draw, both chose " + playerSelection + "!";
    } else {
        if ((playerSelection == "Rock" && computerSelection == ("Scissors"))||
        ((playerSelection == "Paper" && computerSelection == ("Rock")))||
        ((playerSelection == "Scissors" && computerSelection == ("Paper")))) {
            result = "You win this round, " + playerSelection + " beats " + computerSelection + "!";
            plyr = plyr + 1;
            score[1].innerHTML = plyr;
        } else {
            result = "You lose this round, " + computerSelection + " beats " + playerSelection + "!";
            comp = comp + 1;
            score[3].innerHTML = comp;
        }
    }
    choices[4].innerHTML = result;
    if (plyr == 5||comp == 5) {
        if (plyr == 5) {
            choices[4].innerHTML = "You won the game!";
        } else if (comp == 5) {
            choices[4].innerHTML = "You lost the game!";
        }
     
    }
    // console.log(result);
    return result;
}

let plyr = 0; // player's score
let comp = 0; // computer's score
let score = document.getElementsByClassName('score')[0].children; // where we display the scores
// console.log(score);
let selections = document.getElementsByClassName('selection'); // buttons that select player's move
// console.log(selections);
let choices = document.getElementsByClassName('choices')[0].children; // where we display what choices were made
// console.log(choices);

for (const [key, value] of Object.entries(selections)) { // assigning events to buttons
    value.addEventListener("click", function () {
        if (plyr < 5 && comp < 5) {
            round(this.getAttribute('data-play'));
        }
    });
}

