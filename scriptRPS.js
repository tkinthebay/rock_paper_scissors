function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            console.log("Rock");
            return "Rock";
        case 1:
            console.log("Paper");
            return "Paper";
        case 2:
            console.log("Scissors");
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();

    console.log(`You chose: ${playerSelection}.`);
    console.log(`The computer chose: ${computerSelection}.`);

    if (player == comp) {
        alert("Uh oh...you made the same choice as the computer. No one wins. You must play again.")
        playRound(playerSelection=prompt("Best of 5. Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice());
    }

    if ((player == "ROCK" && comp == "SCISSORS") || (player == "SCISSORS" && comp == "PAPER") || (player == "PAPER" && comp == "ROCK")) {
        return `You win! ${player} beats ${comp}!`
    } 
    else {return `You lose! ${comp} beats ${player}.`} 
}

// console.log(playRound(playerSelection=prompt("Best of 5. Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice()))



function game(){
    let playerScore=0;
    let compScore=0;
while (playerScore<3 && compScore<3) {

result=playRound(playerSelection=prompt("This game is best of 5 so first to 3 wins. Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice())
console.log(result);

if (result.substr(4,1)=="w") {
    playerScore=playerScore++;
} else {compScore=compScore++;}

console.log(`Your score is ${playerScore}. The computer's score is ${compScore}.`);

}

if (playerScore==3) {
    alert("You won 3 of the 5 games. You are the ultimate, grand daddy, master, champion of rock, paper, scissors. Congrats!")
} else {alert("You lost 3 of the 5 games...to a computer... :(")}

}

game()
