let GameState = require('../Save/GameState');
let MainMenu = require('../Game/MainMenu');
let Cutscene = require('../Data/Cutscene');
let Town = require('../Data/Location/Towns/YamiTown');

function update(){
  if (GameState.menuOn){
    showMainMenu();
  }

  if(GameState.cutsceneOn){
    showCutscene();
  }

  if(GameState.overworld){
    townActivities();
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

function townActivities(){
  switch(GameState.location){
    case "Yami Town":
      //Town.visitBuilding();
      Town.explore();
      break;
  }
}

module.exports = update;