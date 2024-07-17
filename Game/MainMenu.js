const readlineSync = require('readline-sync');
let GameState = require('../Save/GameState');
const saveFile = require('../Save/saveFile.json');

function display(){
  GameState.menuOn = true;
  console.log("Pokemon North");
  const selection = readlineSync.question("New Game or Continue [N/C]: ");
  const dataSaved = saveFile.player && saveFile.location;

  // If the player wants to continue, show them a snapshot of their progress if the game is saved.
  if (selection == "C"){
     if(dataSaved){
       console.log(`Player: ${saveFile.player.name}`);
       console.log(`Badges: ${saveFile.player.badges}`);
       console.log(`Pokedex: ${saveFile.player.Pokedex.ownedPokemon()}`);
       start = readlineSync.question("Start game [Y]");
     }
     else{
      console.log("No saved data available.");
     }
  }
  // If the player wants to start the new game check if they have previously had a save file
  else if (selection == "N"){
    if(dataSaved){
      overwriteData = readlineSync.question("There is saved data found. Would you like to overwrite this [Y/N]: ");
      if(overwriteData == "Y"){
        // Reset their save file and start the introduction cutscene
        console.log("OVERWRITING DATA.");

        //Reset their data saved
        saveFile.player = {};
        saveFile.location = "";

        //Set their current progress (what they see at the moment)
        GameState.player = {};
        GameState.location = "Introduction";
        GameState.menuOn = false;
        GameState.cutsceneOn = true;
      }
    }
    else{
      // If they did not previously save, just start a new game
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