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
            result = "You won this round, " + playerSelection + " beats " + computerSelection + "!";
            plyr = plyr + 1;
            score[1].innerHTML = plyr;
        } else {
            result = "You lost this round, " + computerSelection + " beats " + playerSelection + "!";
            comp = comp + 1;
            score[3].innerHTML = comp;
        }
    }
    
    if (plyr == 5||comp == 5) {
        if (plyr == 5) {
            result = "You won the game!";
        } else if (comp == 5) {
            result = "You lost the game!";
        }
    }
    choices[4].innerHTML = result;
}

let plyr = 0; // player's score
let comp = 0; // computer's score
let score = document.getElementsByClassName('score')[0].children; // where we display the scores
let selections = document.getElementById('buttons'); // the div around buttons
let choices = document.getElementsByClassName('choices')[0].children; // where we display what choices were made

selections.addEventListener("click", event => { // assigning events to buttons
    if (event.target.className === "selection") {
        if (plyr < 5 && comp < 5) {
            round(event.target.innerHTML);
        }
    }
});