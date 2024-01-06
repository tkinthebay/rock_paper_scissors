// 1. create function that randomly returns rock, paper, or scissors
// function can choose random number 0=rock, 1=paper, 2=scissors


function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
}