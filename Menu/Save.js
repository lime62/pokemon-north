const fs = require('fs');
const GameState = require('../Save/GameState');
const readlineSync = require('readline-sync');

function saveGame(){
  let dataSaved;
  if(fs.existsSync('../Save/saveFile.json')){
    const data = fs.readFileSync('../Save/saveFile.json');
      dataSaved = JSON.parse(data);
    }

  //If the player has never saved before, save their game right away.
  if (!dataSaved.location){
    const saveFile = { 
      player: GameState.player,
      location: GameState.location, 
      pokedex: GameState.player.getOwned(), 
      position: GameState.position
    };
    console.log("\nSaving data...");
    fs.writeFileSync('../Save/saveFile.json', JSON.stringify(saveFile));
  }
  else{
    // Ask the user if they want to overwrite their previous saved file
    console.log('\nSave File');
    console.log('~~~~~~~~~');
    console.log(`Player: ${dataSaved.player.name}`);
    console.log(`Badges ${dataSaved.player.TrainerCard.badges}`);
    console.log(`Pokedex: ${dataSaved.pokedex}`);
    const answer = readlineSync.question("Would you like to overwrite your previous saved file [Y/N]: ");
    if (answer == "Y"){
      const saveFile = { 
        player: GameState.player,
        location: GameState.location,
        pokedex: GameState.pokedex,
        position: GameState.position
      };
      console.log("Saving data...\n");
      fs.writeFileSync('../Save/saveFile.json', JSON.stringify(saveFile));
      return saveFile;
    }
    else{
      return -1;
    }
  }
}

module.exports = saveGame;