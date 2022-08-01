let userRecord = 0, computerRecord = 0;
let computerChoice = getComputerChoice();

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3)  

    return(choice[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Draw!\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerRecord++
        return `You lose! ${computerSelection} beats ${playerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerRecord++
        return `You lose! ${computerSelection} beats ${playerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerRecord++
        return `You lose! ${computerSelection} beats ${playerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userRecord++
        return `You won! ${playerSelection} beats ${computerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userRecord++
        return `You won! ${playerSelection} beats ${computerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userRecord++
        return `You won! ${playerSelection} beats ${computerSelection}\nSCORE ${userRecord} : ${computerRecord}`
    }
}

const buttons = document.querySelectorAll("button");
const game = buttons.forEach(button => button.addEventListener('click', function (e) {
    const userInput = button.classList.value
    console.log(playRound(userInput, computerChoice));
}));
