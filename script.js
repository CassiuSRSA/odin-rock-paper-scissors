const option = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return option[Math.floor(Math.random() * 3)];
};

console.log(getComputerChoice());
