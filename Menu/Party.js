const Pokemon = require('../Data/Pokemon');
const Randomize = require('../Data/Randomize');

class Party{
  #pokemon

  constructor(){
    this.#pokemon = [];
  }

  initializeParty(){
    //Initializes party with spinarak (starter)
    //Need a mechanism for randomizing starter perhaps another module.
    let starter = Randomize(Pokemon[0], true);
    //Find a way to add current health
    this.#pokemon[0] = starter;
  }

  //Shows list of pokemon in party when 'Pokemon' is selected in the menu
  viewParty(){
    //Show name, health and level
    this.#pokemon.forEach(pokemon => {
      console.log(pokemon.name);
      console.log(pokemon.gender);
      console.log(`HP: ${pokemon.currentHealth} / ${pokemon.totalHealth}`);
      console.log(`Level: ${pokemon.level}`);
    })
  }

  // Shows detailed summary of individual pokemon
  selectPokemon(index){
    return this.#pokemon[index];
  }

  viewSummary(pokemon, player){
    console.log(`Dex.no ${pokemon.number}`);
    console.log(`Name: ${pokemon.name}`);
    console.log(`Gender: ${pokemon.gender}`);
    console.log(`OT: ${player.getName()}`);

    console.log(`HP: ${pokemon.currentHealth} / ${pokemon.totalHealth}`);
    console.log(`Attack: ${pokemon.attack}`);
    console.log(`Defense: ${pokemon.defense}`);
    console.log(`Speed: ${pokemon.speed}`);
    console.log(`Sp. Atk: ${pokemon.spAttack}`);
    console.log(`Sp. Def: ${pokemon.spDefense}`);

    console.log(`Level: ${pokemon.level}`);
    console.log(`Nature: ${pokemon.nature.name}`);
    console.log(`Ability: ${pokemon.ability}`);
    let i = 0;
    pokemon.moveset.forEach(move => {
      console.log(`Move ${++i}: ${move.name}`);
    });
  }
};

module.exports = Party;