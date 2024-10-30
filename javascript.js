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

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, Paper, Scissors?");

//     if (humanChoice.toLowerCase() === "rock") {
//         return "Rock"
//     } else if (humanChoice.toLowerCase() === "paper") {
//         return "Paper"
//     } else if (humanChoice.toLowerCase() === "scissors") {
//         return "Scissors"
//     } else {
//         console.log(`Invalid choice. Please choose Rock, Paper, or Scissors.`);
//     }
// }


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        computerScore ++
        humanScore ++
        return 'Tie! You both get one point!'
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore ++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else {
        humanScore ++
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
}

const body = document.querySelector("body")
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id
        const computerChoice = getComputerChoice()
        const result = playRound(humanChoice, computerChoice)
        
        const humanResults = document.createElement("div");
        humanResults.classList.add("human")
        humanResults.textContent = `Human Choice = ${button.id}`
        humanResults.style.padding = "5px"

        const computerResults = document.createElement("div");
        computerResults.classList.add("computer")
        computerResults.textContent = `Computer Choice = ${computerChoice}`
        computerResults.style.padding = "5px"

        const roundResults = document.createElement("div")
        roundResults.classList.add("round")
        roundResults.textContent = `Round Results: ${result}`
        roundResults.style.padding = "5px"

        const score = document.createElement("div")
        score.classList.add("score")
        score.textContent = `Human ${humanScore} Computer ${computerScore}`
        score.style.padding = "5px"

        body.appendChild(humanResults)
        body.appendChild(computerResults)
        body.appendChild(roundResults)
        body.appendChild(score)
    })
})

// function playGame() {
//     while (humanScore < 5 && computerScore < 5) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         const result = playRound(humanChoice, computerChoice)

//         console.log(result)
//         console.log(`Score: Human ${humanScore}, Computer ${computerScore}`)
        
//         if (humanScore === 5) {
//                 console.log('Human has won! Their score is 5!')
//             } else if (computerScore === 5) {
//                 console.log('Computer has won! Their score is 5!')
//             }
//         }
//     }

// playGame();

