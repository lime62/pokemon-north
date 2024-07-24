const readlineSync = require('readline-sync');

function findPokemon(party){
  const selection = readlineSync.question(`Enter the pokemon to use the ${this.name} on: `);
  const foundPokemon = party.find(pokemon => { pokemon.name == selection});
  if(foundPokemon){
    return foundPokemon;
  }
  else{
    return -1;
  }
}

module.exports = findPokemon;