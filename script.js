let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const getHumanChoice = prompt(
      "Enter your choice (rock, paper, scissors):",
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(getHumanChoice, computerSelection);
    console.log(`player score: ${humanScore} computer score: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else {
    console.log("Sorry! You lost the game!");
  }
}

playGame();
