const findPokemon = require('../Pokemon/FindPokemon');

const Berry = [
  {
    name: "Oran Berry",
    description: "If a Pokémon holds one of these Berries, it will be able to restore 10 HP to itself.",
    bagUse: function(party){
      const pokemon = findPokemon(party);
      this.battleUse(pokemon);
    },
    battleUse: function(pokemon){
      if(pokemon.heldItem.name == "Oran Berry"){
        if(pokemon.currentHealth <= pokemon.totalHealth / 2){
          pokemon.currentHealth += 10;
        }
      }
      else{
        return -1;
      }
    }
  }
];

module.exports = Berry;