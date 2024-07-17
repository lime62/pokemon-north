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
      // Looks through the pokedex to find if the name is valid
      if(name == pokemon.name){
        console.log(pokemon.number);
        console.log(pokemon.name);
        if(pokemon.type.length > 1){
          console.log(`Type: ${pokemon.type[0].name} ${pokemon.type[1].name}`);
        }
        else{
          console.log(`Type: ${pokemon.type.name}`);
        }
      }
      else{
        return -1;
      }
    });
  }
}
module.exports = Pokedex;