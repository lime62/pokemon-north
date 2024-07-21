let GameState = require('../Save/GameState');
let MainMenu = require('../Game/MainMenu');
let Cutscene = require('../Data/Cutscene/Cutscene');
const Yami = require('../Data/Location/Towns/YamiTown');
const GameMenu = require('../Menu/GameMenu');

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
  console.log(`\n${GameState.location}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~");
  switch(GameState.location){
    case "Yami Town":
      Yami.YamiTown.showlocationActivities();
      Yami.YamiTown.showTownActivities();
      GameMenu.showMenu();
      const option = Yami.YamiTown.selectOption();
      if (option == "B"){
        Yami.townActivities(option);
      }
      else if (option == 'T' || option == 'L'){
        Yami.YamiTown.locationActivities(option);
      }
      else if (option == 'M'){
        GameMenu.showMenuOptions();
        const option = GameMenu.selectOption();
        GameMenu.handleMenuOptions(option);
      }
      break;
  }
}

module.exports = update;