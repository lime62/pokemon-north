// Is a base for all routes, towns and cities in the game
// ERROR CODE: -2 | NO POKEMON IN PARTY

const readlineSync = require('readline-sync');
let GameState = require('../../../Save/GameState');
class Location{
  #name
  #mapDescription
  #connectingLocations
  #NPC 

  constructor(name){
    this.#name = name;
  }

  selectOption(){
    const option = readlineSync.question("Selection: ");
    return option;
  }

  // Displays option for what the player can generally do in their location
  showlocationActivities(){
    // If there are NPCS in the location, let the user know you can talk to people
    if(this.#NPC.length > 0){
      console.log("Talk to People [T]");
    }
    console.log("Leave Location [L]");
  }

  // Handles the location activity selected
  locationActivities(selection){
    if(selection == 'T'){
      let i = 0;
      //If player chooses to talk to people, show a list of available npcs to talk to
      console.log("\nChat With");
      console.log("~~~~~~~~~");
      this.#NPC.forEach(npc => {
        console.log(`${++i}: ${npc}`);
      });
      let npcSelection = readlineSync.question("Select the number that corresponds with who you want to talk to: ");
      const pickedNpc = this.#NPC[npcSelection - 1];
      if (pickedNpc){
        console.log(`Now talking with ${pickedNpc}`);
      }
    }
      // If player leaves show a list of connecting locations
    else if(selection == "L"){
      // If the player has not received a pokemon yet, stop them.
      if(GameState.player.getParty().length == 0){
        console.log("\nYou must get a pokemon from the professor before starting your journey.");
        return -2;
      }
      else{
        let i = 0;
        this.#connectingLocations.forEach(location => {
          console.log(`${++i}: ${location.getName()}`);
        });
        let locationSelection = readlineSync.question("Select the number that corresponds with your location: ");
        const pickedLocation = this.#connectingLocations[locationSelection - 1];
        // If the location exists, go to it.
        if(pickedLocation){
          // Updates location in game
          console.log(`Now going to ${pickedLocation.getName()}`);
          GameState.location = pickedLocation;
        }
        else{
          return -1;
        }
      }
    }
  }

  // For the future when a map is involved
  displayForMap(){
    console.log(this.#name);
    console.log(this.#mapDescription);
    console.log(this.#connectingLocations);
  }

  // Set map description
  setMapDescription(description){
    this.#mapDescription = description;
  }
  getMapDescription(){
    return this.#mapDescription;
  }
  // Set connecting locations
  setConnectingLocations(locations){
    this.#connectingLocations = locations;
  }

  getConnectingLocations(){
    return this.#connectingLocations;
  }

  // Set NPC
  setNPC(npc){
    this.#NPC = npc;
  }

  getNPC(){
    return this.#NPC;
  }

  getName(){
    return this.#name;
  }
}

module.exports = Location