let GameState = require('../../../Save/GameState');
const readlineSync = require('readline-sync');

class PokemonCenter extends Building{
  //TODO: PC later
  constructor(name){
    super(name);
  }

  //Shows a menu selection for healing the pokemon
  askToHeal(){
    let selection = readlineSync.question("Heal Pokemon [H]: ");
    if (selection == "H"){
      this.healPokemon(GameState.player.getParty());
    }
  }

  // Heals the party by restoring each member to their health
  healPokemon(party){
    team = party.getPokemon();
    team.forEach(pokemon => {
      pokemon.currentHealth = pokemon.totalHealth;
    });
  }

}

module.exports = PokemonCenter;