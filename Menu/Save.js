const fs = require('fs');
const GameState = require('../Save/GameState');
const SavedState = require('../Save/SavedState');
const readlineSync = require('readline-sync');

function saveGame(){
  //If the player has never saved before, save their game right away.
  const dataSaved = SavedState.player && SavedState.location;
  if (!dataSaved){
    const saveFile = { player: GameState.player, location: GameState.location};
    fs.writeFileSync('./Save/saveFile.json', JSON.stringify(saveFile));
  }
  else{
    const answer = readlineSync.question("Would you like to overwrite your previous saved file [Y/N]: ");
    if (answer == "Y"){
      const saveFile = { player: GameState.player, location: GameState.location};
      fs.writeFileSync('./Save/saveFile.json', JSON.stringify(saveFile));
      return saveFile;
    }
    else{
      return -1;
    }
  }
}

module.exports = saveGame;