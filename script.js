let humanScore = 0;
let computerScore = 0;
let round = 0;

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
  const humanChoice = prompt(`Please choose an option:
          1. Rock
          2. Paper
          3. Scissors`);
  return humanChoice.toLocaleLowerCase();
};

const playRound = (humanChoice, computerChoice) => {
  if (options.includes(humanChoice)) {
    console.log(`You chose: ${humanChoice}, computer chose: ${computerChoice}`);
    round++;

    // Check for draw
    if (humanChoice === computerChoice) {
      console.log(
        `It's a draw!, human score:${humanScore} computer score ${computerScore}`
      );
    }

    // Check all rock options
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log(
        `You lose!, human score:${humanChoice} computer score ${computerScore}`
      );
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(
        `You win!, human score:${humanScore} computer score ${computerScore}`
      );
    }

    // Check all paper options
    if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log(
        `You lose!, human score:${humanScore} computer score ${computerScore}`
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(
        `You win!, human score:${humanScore} computer score ${computerScore}`
      );
    }

    // Check all scissors options
    if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(
        `You lose!, human score:${humanScore} computer score ${computerScore}`
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(
        `You win!, human score:${humanScore} computer score ${computerScore}`
      );
    }
  } else {
    console.log("Please enter a valid option, rock, paper or scissors...");
  }
};

const playGame = () => {
  while (round != 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (round === 5 && humanScore === computerScore) {
    console.log(`5 rounds in and we don't have a winner`);
  } else if (round === 5 && humanScore > computerScore) {
    console.log(`You are the winner after 5 rounds`);
  } else if (round === 5 && humanScore < computerScore) {
    console.log(`You are the loser after 5 rounds`);
  }
};

playGame();
