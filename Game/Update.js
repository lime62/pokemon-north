let GameState = require('../Save/GameState');
let MainMenu = require('../Game/MainMenu');
let Cutscene = require('../Data/Cutscene');

function update(){
  if (GameState.menuOn){
    showMainMenu();
  }

  if(GameState.cutsceneOn){
    showCutscene();
  }
}

function showMainMenu(){
    if(GameState.location == ""){
      MainMenu();
    }
}

function showCutscene(){
  switch(GameState.location){
    case "Introduction":
      Cutscene.Introduction();
      break;
    case "Yami Town":
      Cutscene.YamiTown();
      break;
  }
}

module.exports = update;