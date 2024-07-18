const readlineSync = require('readline-sync');
let GameState = require('../Save/GameState');
let saveFile = require('../Save/saveFile.json');
const fs = require('fs');

function display(){
  GameState.menuOn = true;
  console.log("Pokemon North");
  console.log("~~~~~~~~~~~~~");
  const selection = readlineSync.question("New Game or Continue [N/C]: ");
  const dataSaved = saveFile.player && saveFile.location;

  // If the player wants to continue, show them a snapshot of their progress if the game is saved.
  if (selection == "C"){
     if(dataSaved){
       console.log(`Player: ${saveFile.player.name}`);
       console.log(`Badges: ${saveFile.player.TrainerCard.badges}`);
       console.log(`Pokedex: ${saveFile.pokedex}`);
       start = readlineSync.question("Start game [Y]: ");
       if(start == "Y"){
        console.log("Starting game...\n");
        //Send save file contents into gamestate
        GameState.player = saveFile.player;
        GameState.location = saveFile.location;
        GameState.pokedex = saveFile.pokedex;
        GameState.position = saveFile.position;
        
        GameState.menuOn = false;
        GameState.overworld = true;
       }
       else{
        console.log("Invalid option.");
       }
     }
     else{
      console.log("No saved data available.");
     }
  }
  // If the player wants to start the new game check if they have previously had a save file
  else if (selection == "N"){
    if(dataSaved){
      console.log(`Player: ${saveFile.player.name}`);
      console.log(`Badges: ${saveFile.player.TrainerCard.badges}`);
      console.log(`Pokedex: ${saveFile.pokedex}`);
      overwriteData = readlineSync.question("There is saved data found. Would you like to overwrite this [Y/N]: ");
      if(overwriteData == "Y"){
        // Reset their save file and start the introduction cutscene
        console.log("OVERWRITING DATA.");

        //Reset their data saved
        saveFile = { player: {}, location: ""};
        fs.writeFileSync('../Save/saveFile.json', JSON.stringify(saveFile));

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