// Handles in game menu selection
const readlineSync = require('readline-sync');
let GameState = require('../Save/GameState');
const saveGame = require('../Menu/Save');

let party = false;

  function showMenu(){
    console.log("Menu [M]");
  }

  function showMenuOptions(){
    console.log("\nPokedex [D]");
    if (GameState.player.getParty().length > 0){
      console.log("Pokemon [P]");
      party = true;
    }
    console.log("Trainer Card [T]");
    console.log("Save [S]");
  }

  function selectOption(){
    const selection = readlineSync.question("\nSelection: ");
    return selection;
  }

  function handleMenuOptions(selection){
    if (selection == 'D'){
      console.log(GameState.player.getPokedex());
    }
    else if (selection == 'P' && party){
      console.log(GameState.player.viewParty());
    }
    else if (selection == 'T'){
      console.log(GameState.player.getTrainerCard());
    }
    else if (selection == 'S'){
      saveGame();
    }
  }

module.exports = { showMenu, showMenuOptions, selectOption, handleMenuOptions }