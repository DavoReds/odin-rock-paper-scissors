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
                    return ["You lose! Scissors beat Paper", -1];

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

function calculateScore(result) {
    const playerScore = document.querySelector("#player-score");
    const cpuScore = document.querySelector("#cpu-score");
    const ties = document.querySelector("#ties");

    switch (result) {
        case -1:
            cpuScore.textContent = Number(cpuScore.textContent) + 1;
            break;
        case 0:
            ties.textContent = Number(ties.textContent) + 1;
            break;
        case 1:
            playerScore.textContent = Number(playerScore.textContent) + 1;
            break;
        default:
            console.error("This should be impossible");
            break;
    }

    if (playerScore.textContent === "5" || cpuScore.textContent === "5") {
        const outcome = document.querySelector(".outcome");

        if (Number(playerScore.textContent) > Number(cpuScore.textContent)) {
            outcome.textContent = "Player wins!";
            outcome.style.color = "green";
        } else {
            outcome.textContent = "CPU wins! Player loses!";
            outcome.style.color = "red";
        }

        reset();
    }
}

function reset() {
    const playerScore = document.querySelector("#player-score");
    const cpuScore = document.querySelector("#cpu-score");
    const ties = document.querySelector("#ties");
    const outcome = document.querySelector(".outcome");

    setTimeout(() => {
        playerScore.textContent = "0";
        cpuScore.textContent = "0";
        ties.textContent = "0";

        outcome.textContent = "";
        outcome.style.color = "black";
    }, 2500);
}

export function calculateRound(option, outcome) {
    const result = playRound(
        option.getAttribute("data-option"),
        getComputerChoice(),
    );

    outcome.textContent = result[0];

    calculateScore(result[1]);
}
