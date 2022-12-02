export const bingoWins = (bingos) => {
  let message = "";
  switch (bingos) {
    case 0:
      message = "Unfortunately no bingos today. :(";
      break;
    case 1:
      message = "One lonely bingo today...";
      break;
    case 2:
      message = "Two peas in a pod? More like two bingos in a board!";
      break;
    case 3:
      message = "Three times the charm.";
      break;
    case 4:
      message = "Four is today's big bingo haul!";
      break;
    case 5:
      message = "Quintuple bingo? This is getting spicy.";
      break;
    case 6:
      message = "Sextuple bingo?! Alright calm down there.";
      break;
    case 7:
      message = "Lucky seven strikes again!";
      break;
    case 8:
      message = "Holy sh*t! It's almost the full board!";
      break;
    default:
      message = "Damn, this must've been expensive.";
      break;
  }
  return message;
};
