// Is a base for all routes, towns and cities in the game
const readlineSync = require('readline-sync');
let GameState = require('../../Save/GameState');
class Location{
  #name
  #mapDescription
  #connectingLocations
  #NPC 

  constructor(name){
    this.#name = name;
  }

  // Pick activities to do depending where you are
  explore(){
    let selection;
    // While the selection is set to a valid answer...
    while(selection){
      // Shows the name of the location
      console.log(`${this.#name}`);
      // If there are NPCS in the location, let the user know you can talk to people
      if(this.#NPC.length > 0){
        console.log("Talk to People [T]");
      }
      // Lets the user know they can leave the current location (town/city/route)
      console.log("Leave Location [L]");
      selection = readlineSync.question("Selection: ");
      //If player chooses to talk to people, show a list of available npcs to talk to
      this.#NPC.forEach(npc => {
        let i = 0;
        console.log(`${++i}: ${npc}`);
      })

      // If player leaves show a list of connecting locations
      if(selection == "L"){
        this.#connectingLocations.forEach(location => {
          let i = 0;
          console.log(`${++i}: ${location}`);
        });
        let locationSelection = readlineSync.question("Select the number that corresponds with your location: ");
        const pickedLocation = this.#connectingLocations[locationSelection - 1];
        // If the location exists, go to it.
        if(pickedLocation){
          // Updates location in game
          GameState.location = pickedLocation;
        }
        else{
          return -1;
        }
      }
    }
  }

  // For the future when a map is involved
  display(){
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
}

module.exports = Location