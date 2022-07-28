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

function game() {


    console.log("WELCOME TO ROCK PAPER SCISSORS")
    for (let index = 0; index < 5; index++) {
        let userChoice = prompt('Choose your weapon: ')

        let computerChoice = getComputerChoice()

        console.log(`You have chosen ${userChoice.toLowerCase()}!`)

        let round = playRound(userChoice.toLowerCase(), computerChoice, userRecord, computerRecord)
        console.log(`The computer has chosen ${computerChoice}!`)
        console.log(round)
                
    }
}

let userRecord = 0, computerRecord = 0
game()