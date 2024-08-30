function getComputerChoice() {
    number = Math.ceil(Math.random() * 3);
    if (number === 1) {
        return "Rock"
    } else if (number === 2) {
        return "Paper"
    } else {
        return "Scissors"
    } 
}

console.log(`Computer Choice: ${getComputerChoice()}`)

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");

    if (humanChoice.toLowerCase() === "rock") {
        return "Rock"
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper"
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        console.log(`Invalid choice. Please choose Rock, Paper, or Scissors.`);
    }
}

console.log(`Human Choice: ${getHumanChoice()}`)