let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.ceil(Math.random() * 3);
    if (number === 1) {
        return "Rock"
    } else if (number === 2) {
        return "Paper"
    } else {
        return "Scissors"
    } 
}

// console.log(`Computer Choice: ${getComputerChoice()}`)

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        computerScore ++
        humanScore ++
        return 'Tie! You both get one point!'
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else {
        humanScore ++
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice)

        console.log(result)
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`)
        
        if (humanScore === 5) {
                console.log('Human has won! Their score is 5!')
            } else if (computerScore === 5) {
                console.log('Computer has won! Their score is 5!')
            }
        }
    }

playGame();
