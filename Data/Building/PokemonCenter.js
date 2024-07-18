let GameState = require('../../Save/GameState');
const readlineSync = require('readline-sync');
class PokemonCenter extends Building{
  // Stores pokemon that are caught if the party is full
  #PC
  super(pc){
    this.#PC = pc;
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

  getPC(){
    return this.#PC;
  }
}

module.exports = PokemonCenter;