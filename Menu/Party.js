class Party{
  #pokemon

  constructor(){
    this.#pokemon = [];
  }

  getPokemon(){
    return this.#pokemon;
  }

  // Shows list of pokemon in party when 'Pokemon' is selected in the menu
  viewParty(){
    if(this.#pokemon.length > 1){
      // Show name, health and level
      this.#pokemon.forEach(pokemon => {
        console.log(pokemon.name);
        console.log(pokemon.gender);
        console.log(`HP: ${pokemon.currentHealth} / ${pokemon.totalHealth}`);
        console.log(`Level: ${pokemon.level}`);
      });
    }
    return 0;
  }

  // Selects a pokemon from the party
  selectPokemon(index){
    if(this.#pokemon.length > 1){
      return this.#pokemon[index];
    }
  }

  // Shows a detailed summary of a selected pokemon.
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

  swapPokemon(name1, name2){
    // If there's only one pokemon in the party you cant swap
    if(this.#pokemon.length > 2){
      // Holding a temp var for the first pokemon to assign the second pokemon to
      let temp = this.#pokemon.find(pokemon => {
        pokemon.name == name1;
      });

      // Storing the index of the first pokemon in order to swap
      let indexOfFirst = this.#pokemon.findIndex(pokemon => {
        pokemon.name == name1;
      });

      // Storing the index of the second pokemon in order to swap
      let indexOfSecond = this.#pokemon.findIndex(pokemon => {
        pokemon.name == name2;
      });

      // Assinging first pokemon's position to the second pokemon
      this.#pokemon[indexOfFirst] = this.#pokemon[indexOfSecond];
      // Assinging the second pokemon position to the first pokemon
      this.#pokemon[indexOfSecond] = temp;
    }
    else{
      return -1;
    }
  }
};

module.exports = Party;