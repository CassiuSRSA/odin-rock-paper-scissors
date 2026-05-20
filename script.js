const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset");

let humanScore = 0;
let computerScore = 0;
resetButton.style.display = "none";

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

function playGame(humanChoice) {
  const getHumanChoice = humanChoice;
  const computerSelection = getComputerChoice();

  const outcome = playRound(getHumanChoice, computerSelection);

  resultDiv.textContent = outcome;
  resultDiv.textContent += `\nYour score: ${humanScore} | Computer score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.style.display = "block";
    if (humanScore > computerScore) {
      resultDiv.textContent += "\nCongratulations! You won the game!";
    } else {
      resultDiv.textContent += "\nSorry! The computer won the game!";
    }
  }
}

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
resetButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  resetButton.style.display = "none";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
});
