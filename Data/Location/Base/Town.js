const Location = require('./Location');
const readlineSync = require('readline-sync');
let GameState = require('../../../Save/GameState');

class Town extends Location {
  #Building
  constructor(name, buildings){
    super(name); 
    this.#Building = buildings;
  }

  // Displays option for what the player can do in the town
  showTownActivities(){
    console.log("Visit Building(s) [B]");
  }

  // Handles visiting buildings in the area
  townActivities(visit){
    console.log("\nView Buildings");
    console.log("~~~~~~~~~~~~~~")
      if(visit == "B"){
        let i = 0;
        this.#Building.forEach(building => {
          console.log(`${++i}: ${building.getName()}`)
        });
        const selection = readlineSync.question("Selection: ");
        const pickedBuilding = this.#Building[selection - 1];
        //Updates current position in the game
        if (pickedBuilding){
          console.log(`Now visiting ${pickedBuilding.getName()}`);
          GameState.position = pickedBuilding.getName();
        }
      }
      else{
        return -1;
      }
  }

  getBuildings(){
    return this.#Building;
  }
}

module.exports = Town;