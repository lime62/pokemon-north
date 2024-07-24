const findPokemon = require('../Pokemon/FindPokemon');

const Medicene = [
  {
    name: "Potion",
    description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to a Pokémon.",
    price: 200,
    sellPrice: 100,
    use: function(party){
      const pokemon = findPokemon(party);
      if(pokemon){
        // Have to make sure using a potion only restroes to their max health
        if(pokemon.currentHealth + 20 > pokemon.totalHealth){
          pokemon.currentHealth = pokemon.totalHealth;
        }
        else{
          return pokemon.currentHealth += 20;
        }
      }
      else{
        return -1;
      }
    }
  }
];

module.exports = {Medicene}