// Is a base for all routes in the game
const Location = require('./Location');
const readlineSync = require('readline-sync');

class Route extends Location{
  // In addition to some npcs, there are mostly trainers.
  #trainers
  super(trainers){
    this.#trainers = trainers;
  }

  // Shows the menu selection for battling
  battle(){
    const selection = readlineSync.question("Battle [B]");
    if (selection == "B"){
      let i = 0;
      this.#trainers.forEach(trainer => {
        //NOTE: each trainer will have a property indicating whether they have been battled
        console.log(`${i}: ${trainer}`);
      });
    }
    else{
      return -1;
    }
  }

  getTrainers(){
    return this.#trainers;
  }
}

module.exports = Route;