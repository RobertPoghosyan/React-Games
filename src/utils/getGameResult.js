const choice = {
  paper: "paper",
  scissors: "scissors",
  rock: "rock",
};

const getGameResult = (playerChoice, computerChoice) => {
  if (!playerChoice.trim() || !computerChoice.trim()) {
    throw new Error("Choices are wrong");
  }
  if (playerChoice === computerChoice) {
    return "Draw";
  }
  switch (playerChoice) {
    case choice.paper:
      if (computerChoice === choice.rock) {
        return "You Win";
      } else {
        return "You Loose";
      }
    case choice.scissors:
      if (computerChoice === choice.paper) {
        return "You Win";
      } else {
        return "You Loose";
      }
    case choice.rock:
      if (computerChoice === choice.scissors) {
        return "You Win";
      } else {
        return "You Loose";
      }
    default:
      throw new Error("Wrong choices");
  }
};

export default getGameResult;
