function getComputerChoice() {
    const plays = ["rock", "paper", "scissors"];

    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    switch (player) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return ["It's a tie! Both chose Rock", 0];
                case "paper":
                    return ["You Lose! Paper beats Rock", -1];
                case "scissors":
                    return ["You win! Rock beats Scissors", 1];

                default:
                    return ["Excuse me, that's impossible", 0];
            }

        case "paper":
            switch (computerSelection) {
                case "rock":
                    return ["You win! Paper beats Rock", 1];
                case "paper":
                    return ["It's a tie! Both chose Paper", 0];
                case "scissors":
                    return ["You lose! Scissors beat paper", -1];

                default:
                    return ["Excuse me, that's impossible", 0];
            }

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return ["You lose! Rock beats Scissors", -1];
                case "paper":
                    return ["You win! Scissors beat Paper", 1];
                case "scissors":
                    return ["It's a tie! Both chose Scissors", 0];

                default:
                    return ["Excuse me, that's impossible", 0];
            }

        default:
            return ["Please select a valid option", 0];
    }
}
