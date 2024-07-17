const Pokemon = require('../Data/Pokemon');

class Pokedex {
  #pokemon = [];

  constructor(){
    Pokemon.forEach(pokemon => {
      this.#pokemon.push(pokemon);
    })
  }

  searchPokemon(name){
    this.#pokemon.forEach(pokemon => {
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

  ownedPokemon(){
    let owned = 0;
    this.#pokemon.forEach(pokemon => {
      if(pokemon.owned == true){
        ++owned;
      }
    });
    return owned;
  }
}
module.exports = Pokedex;