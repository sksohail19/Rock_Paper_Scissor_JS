var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissor") {
                    console.log("Human wins!");
                    humanScore++;
                } else {
                    console.log("Computer wins!");
                    computerScore++;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("Human wins!");
                    humanScore++;
                } else {
                    console.log("Computer wins!");
                    computerScore++;
                }
                break;
            case "scissor":
                if (computerChoice === "paper") {
                    console.log("Human wins!");
                    humanScore++;
                } else {
                    console.log("Computer wins!");
                    computerScore++;
                }
                break;
        }
    }
    console.log("-----------------------------");
    console.log("You: ", humanScore, "||", "Computer: ", computerScore); 
}

function playgame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game canceled.");
            return;
        }
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore === computerScore)
        console.log("It is a tie");
    else if (humanScore > computerScore)
        console.log("You win!");
    else
        console.log("You lose");
}

function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice from Rock, Paper, Scissor");
    if (humanChoice === null) {
        return null;
    }
    humanChoice = humanChoice.toLowerCase();
    
    const validChoices = ["rock", "paper", "scissor"];
    if (!validChoices.includes(humanChoice)) {
        console.log("Enter a valid choice");
        return null;
    }
    
    return humanChoice;
}

playgame();
