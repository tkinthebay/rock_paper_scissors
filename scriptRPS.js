const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");
const buttons = document.getElementsByTagName("button");
const divider=document.getElementById("divider");

// get computer choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            // console.log("Rock");
            return "Rock";
        case 1:
            // console.log("Paper");
            return "Paper";
        case 2:
            // console.log("Scissors");
            return "Scissors";
    }
}

// initiate round
function playRound(playerSelection, computerSelection) {

    const p = document.createElement('p');
    const h1 = document.createElement('h1');

    if (divider.hasChildNodes()) {
        divider.innerHTML="";
    }

    let player = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();

    p.textContent =`You chose: ${player}.\n The computer chose: ${comp}.`;

    if (player == comp) {
        h1.textContent = "Uh oh...you made the same choice as the computer. No one wins. You must play again."
        divider.appendChild(h1);
        
        for(let i=0; i<buttons.length; i++) {
            buttons[i].addEventListener("click", function(){
                playRound(playerSelection=buttons[i].innerHTML, computerSelection=getComputerChoice());
            })
        }
        
    }

    else if ((player == "ROCK" && comp == "SCISSORS") || (player == "SCISSORS" && comp == "PAPER") || (player == "PAPER" && comp == "ROCK")) {
        h1.textContent = `You win! ${player} beats ${comp}!`;
        divider.appendChild(p);
        divider.appendChild(h1);
        return `You win! ${player} beats ${comp}!`
    }
    else { 
        h1.textContent = `You lose! ${comp} beats ${player}.`
        divider.appendChild(p);
        divider.appendChild(h1);
        return `You lose! ${comp} beats ${player}.` }
}

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        playRound(playerSelection=buttons[i].innerHTML, computerSelection=getComputerChoice());
    })
}



// // initiate best of 5
// function game() {
//     let playerScore = 0;
//     let compScore = 0;
//     while (playerScore < 3 && compScore < 3) {

//         result = playRound(playerSelection = prompt("This game is best of 5 so first to 3 wins. Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice())
//         console.log(result);

//         if (result.substr(4, 1) == "w") {
//             console.log(`Your score is ${++playerScore}. The computer's score is ${compScore}.`);
//         } else {
//             console.log(`Your score is ${playerScore}. The computer's score is ${++compScore}.`);
//         }
//     }

//     if (playerScore == 3) {
//         alert("You won 3 of the 5 games. You are the ultimate, grand daddy, master, champion of rock, paper, scissors. Congrats!")
//     } else { alert("You lost 3 of the 5 games...to a computer... :(") }

// }

// game()