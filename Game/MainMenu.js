const readlineSync = require('readline-sync');
const GameState = require('../Save/GameState');

function display(){
  GameState.menuOn = true;
  console.log("Pokemon North");
  const selection = readlineSync.question("New Game or Continue [N/C]: ");
  const dataSaved = GameState.player && GameState.location;

  // If the player wants to continue, show them a snapshot of their progress if the game is saved.
  if (selection == "C"){
     if(dataSaved){
       console.log(`Player: ${player.name}`);
       console.log(`Badges: ${player.badges}`);
       start = readlineSync.question("Start game [Y]");
     }
     else{
      console.log("No saved data available.");
     }
  }
  else if (selection == "N"){
    if(dataSaved){
      overwriteData = readlineSync.question("There is saved data found. Would you like to overwrite this [Y/N]: ");
      if(overwriteData == "Y"){
        console.log("OVERWRITING DATA.");
        GameState.location = "Introduction";
        GameState.menuOn = false;
        GameState.cutsceneOn = true;
      }
    }
    else{
      GameState.location = "Introduction";
      GameState.menuOn = false;
      GameState.cutsceneOn = true;
    }
  }
  else{
    console.log("Invalid option selected.");
  }
}

module.exports = display;