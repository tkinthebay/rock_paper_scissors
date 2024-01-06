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
        playRound();
    }

    ((player == "ROCK" && comp == "SCISSORS") || (player == "SCISSORS" && comp == "PAPER") || (player == "PAPER" && comp == "ROCK")) ? 
    console.log(`You win! ${player} beats ${comp}!`) : console.log(`You lose! ${comp} beats ${player}.`)

}

console.log(playRound(playerSelection=prompt("Please enter your choice of 'rock', 'paper', or 'scissors'."), getComputerChoice()))
