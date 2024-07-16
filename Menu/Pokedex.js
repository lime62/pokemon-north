const Pokemon = require('../Data/Pokemon');

class Pokedex {
  #Pokemon = [];

  constructor(){
    Pokemon.forEach(pokemon => {
      this.#Pokemon.push(pokemon);
    })
  }

  searchPokemon(name){
    this.#Pokemon.forEach(pokemon => {
      if(name == pokemon.name){
        console.log(pokemon.number);
        console.log(pokemon.name);
        console.log(pokemon.type);
      }
      else{
        console.log("Pokemon is not found in the pokedex.");
      }
    });
  }
}
module.exports = Pokedex;