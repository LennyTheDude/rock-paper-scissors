function computerPlay () {
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

/*function capitalize (str) {
    let start = str.substring(0, 1);
    start = start.toUpperCase();
    str = str.toLowerCase();
    str = start + str.slice(1);
    return str;
}*/

function round (playerSelection) {
    let computerSelection = computerPlay();
    let result;
    if (playerSelection == computerSelection) {
        result = "This round is a draw, " + playerSelection + " and " + computerSelection + " are the same!";
    } else {
        if ((playerSelection == "Rock" && computerSelection == ("Scissors"))||
        ((playerSelection == "Paper" && computerSelection == ("Rock")))||
        ((playerSelection == "Scissors" && computerSelection == ("Paper")))) {
            result = "You win this round, " + playerSelection + " beats " + computerSelection + "!";
            plyr = plyr + 1;
            score[0].children[0].innerHTML = plyr;
        } else {
            result = "You lose this round, " + computerSelection + " beats " + playerSelection + "!";
            comp = comp + 1;
            score[0].children[2].innerHTML = comp;
        }
    }
    return result;
}

let plyr = 0;
let comp = 0;
let score = document.getElementsByClassName('score');
//console.log(score[0].children[2]);
let choices = document.getElementsByClassName('play');
console.log(choices);


for (const [key, value] of Object.entries(choices)) {
    value.addEventListener("click", function () {
        let choice = value.getAttribute('data-play');
        //console.log(choice);
        round(choice);
    });
}



  
  
/*   
function game () {
    let playerSelection, computerSelection;
     for (let i = 1; i < 6; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = capitalize(playerSelection);
        computerSelection = computerPlay();
        let res = round(playerSelection, computerSelection);
        console.log(res);
        console.log("Score: You - " + plyr + ", Computer - " + comp);
    }
    if (plyr > comp) {
        console.log("You won the game! Final score: You - " + plyr + ", Computer - " + comp);
    } else if (plyr < comp) {
        console.log("You lost the game! Final score: You - " + plyr + ", Computer - " + comp);
    } else {
        console.log("It's a draw! Final score: You - " + plyr + ", Computer - " + comp);
    }
}
*/