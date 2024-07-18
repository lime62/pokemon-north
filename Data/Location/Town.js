const Location = require('./Location');
const readlineSync = require('readline-sync');
let GameState = require('../../Save/GameState');

class Town extends Location {
  #Building
  constructor(name, buildings){
    super(name); 
    this.#Building = buildings;
  }

  visitBuilding(){
    console.log("Visit Building");
    let i = 0;
    this.#Building.forEach(building => {
      console.log(`${++i}: ${building}`)
    });
    const selection = readlineSync.question("Selection: ");
    const pickedBuilding= this.#Building[selection - 1];
    //Updates current position in the game
    GameState.position = pickedBuilding;
  }

  getBuildings(){
    return this.#Building;
  }
}

module.exports = Town;