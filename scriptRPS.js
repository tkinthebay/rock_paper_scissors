// define variables
const ps = document.createElement('h1');
const cs = document.createElement('h1');
const score = document.getElementById('score');
const buttons = document.getElementsByTagName("button");
const divider=document.getElementById("divider");
const p = document.createElement('p');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
let playerScore = 0;
let compScore = 0;



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

    if (divider.hasChildNodes()) {
        divider.innerHTML="";
    }

    let player = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();

    p.textContent =`You chose: ${player}.\n The computer chose: ${comp}.`;

    // if (player == comp) {
    //     h2.textContent = "Uh oh...you made the same choice as the computer. No one wins. You must play again."
    //     divider.appendChild(p);
    //     divider.appendChild(h2);
        
    //     for(let i=0; i<buttons.length; i++) {
    //         buttons[i].addEventListener("click", function(){
    //             playRound(playerSelection=buttons[i].innerHTML, computerSelection=getComputerChoice());
    //         })
    //     }
        
    // }

    if ((player == "ROCK" && comp == "SCISSORS") || (player == "SCISSORS" && comp == "PAPER") || (player == "PAPER" && comp == "ROCK")) {
        h2.textContent = `You win this round! ${player} beats ${comp}!`;
        divider.appendChild(p);
        divider.appendChild(h2);
        return `You win this round! ${player} beats ${comp}!`
    }
    else if (player == comp) {
        h2.textContent = "Uh oh...you made the same choice as the computer. No one wins. You must play again."
        divider.appendChild(p);
        divider.appendChild(h2);
        return "Uh oh...you made the same choice as the computer. No one wins. You must play again.";
    }
    else { 
        h2.textContent = `You lose this round! ${comp} beats ${player}.`
        divider.appendChild(p);
        divider.appendChild(h2);
        return `You lose this round! ${comp} beats ${player}.` }
}

// for(let i=0; i<buttons.length; i++) {
//     buttons[i].addEventListener("click", function(){
//         playRound(playerSelection=buttons[i].innerHTML, computerSelection=getComputerChoice());
//     })
// }





// initiate best of 5
for(let i=0; i<buttons.length; i++) {

    //    while (playerScore < 3 && compScore < 3) {

    buttons[i].addEventListener("click", function() {

        // result = playRound(playerSelection = prompt("This game is best of 5 so first to 3 wins. Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice())
        result = playRound(playerSelection=buttons[i].innerHTML, computerSelection=getComputerChoice());
        console.log(`The result is: ${result}.`);
        console.log(typeof(result));

        if (result.substr(4, 1) == "w") {
            h1.textContent =`Your score is ${++playerScore}. The computer's score is ${compScore}.`;
            divider.appendChild(h1);
        } else if (result.substr(4,1) == "l") {
            h1.textContent =`Your score is ${playerScore}. The computer's score is ${++compScore}.`;
            divider.appendChild(h1);
        } else {
            h1.textContent =`Your score is ${playerScore}. The computer's score is ${compScore}.`;
            divider.appendChild(h1);
        }

    if (playerScore == 3) {
        h1.textContent = `Your score is ${playerScore}. The computer's score is ${compScore}.
        You won 3 of the 5 games. You are the ultimate, grand daddy, master, champion of rock, paper, scissors. Congrats!`;
        divider.appendChild(h1);
    } else if (compScore == 3) { h1.textContent = `Your score is ${playerScore}. The computer's score is ${compScore}. 
    You lost 3 of the 5 games...to a computer... :(`;
    divider.appendChild(h1);
 }

}
)
};