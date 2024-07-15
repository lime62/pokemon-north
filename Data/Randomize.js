const Nature = require('./Nature');
// Controls how pokemon are randomized as a starter and first seen in the wild.
function randomizePokemon(pokemon, starter=false){
  if(starter == true){
    pokemon.level = 5;
  }

  //Gender is based on their gender ratio
  pokemon.gender = Math.random() < pokemon.genderRatio ? "Male" : "Female";

  // Handling IVs (random value from 0 - 31)
  pokemon.healthIV = Math.floor(Math.random() * 32);
  pokemon.attackIV = Math.floor(Math.random() * 32);
  pokemon.defenseIV = Math.floor(Math.random() * 32);
  pokemon.spAttackIV = Math.floor(Math.random() * 32);
  pokemon.spDefenseIV = Math.floor(Math.random() * 32);
  pokemon.speedIV = Math.floor(Math.random() * 32);

  // Handling Abilities
  // If the pokemon only has one possible ability, assign it
  if(pokemon.abilities.length == 1){
    pokemon.ability = pokemon.abilities[0];
  }
  else{
    // Pokemon has an equal chance of getting their first or second possible ability.
    pokemon.ability = Math.random() < 0.5 ? pokemon.abilities[0] : pokemon.abilities[1];
  }

  //Randomizing the nature
  const randNatureIdx = Math.floor(Math.random() * Nature.length);
  pokemon.nature = Nature[randNatureIdx];

  // Health is based on IVS
  pokemon.totalHealth = Math.floor(0.01 * (2 * pokemon.baseHealth + pokemon.healthIV + Math.floor(0.25 * pokemon.healthEV)) * pokemon.level) + pokemon.level + 10;
  pokemon.currentHealth = pokemon.totalHealth;

  // Handling Attack, Defense, Sp.Attack and Sp.Defense
  pokemon.attack = (Math.floor(0.01 * (2 * pokemon.baseAttack + pokemon.attackIV + Math.floor(0.25 * pokemon.attackEV)) * pokemon.level) + 5);
  pokemon.defense = (Math.floor(0.01 * (2 * pokemon.baseDefense + pokemon.defenseIV + Math.floor(0.25 * pokemon.defenseEV)) * pokemon.level) + 5);
  pokemon.speed = (Math.floor(0.01 * (2 * pokemon.baseSpeed + pokemon.speedIV + Math.floor(0.25 * pokemon.speedEV)) * pokemon.level) + 5);
  pokemon.spAttack = (Math.floor(0.01 * (2 * pokemon.baseSpAttack + pokemon.spAttackIV + Math.floor(0.25 * pokemon.spAttackEV)) * pokemon.level) + 5);
  pokemon.spDefense = (Math.floor(0.01 * (2 * pokemon.baseSpDefense + pokemon.spDefenseIV + Math.floor(0.25 * pokemon.spDefenseEV)) * pokemon.level) + 5);

  // Storing the value of the stat that needs to be increased or decreased based on nature
  const increase = pokemon.nature.increase;
  const decrease = pokemon.nature.decrease;

  // If the nature is not netural adjust raised/lowered stat
  if(increase !== decrease){
    // Apply stat increase based on nature
    switch(increase){
      case "attack":
        pokemon.attack * 1.1;
        break;
      case "defense":
        pokemon.defense * 1.1;
        break;
      case "speed":
        pokemon.speed * 1.1;
        break;
      case "spAttack":
        pokemon.spAttack * 1.1;
        break;
      case "spDefense":
        pokemon.spDefense * 1.1;
        break;
    }
    // Apply stat decrease based on nature
    switch(decrease){
      case "attack":
        pokemon.attack * 0.9;
        break;
      case "defense":
        pokemon.defense * 0.9;
        break;
      case "speed":
        pokemon.speed * 0.9;
        break;
      case "spAttack":
        pokemon.spAttack * 0.9;
        break;
      case "spDefense":
        pokemon.spDefense * 0.9;
        break;
    }
  }

  // Assinging moves via learnset
  // The moveset should have no more than 4 moves.
  // Based on level, it should store 4 moves backwards
  // Search for the index of the object that has the level equal or closest but lower to current level
  let highestMoveIdx = 0;
  for(let i = 0; i < pokemon.learnset.length; i++){
    if(pokemon.learnset[i].level <= pokemon.level){
      highestMoveIdx = i;
    }
    else{
      break;
    }
  }

  pokemon.moveset = [];
  //Moves backwards to store moves
  for(let i = highestMoveIdx; pokemon.moveset.length == 4 || i >= 0; i--){
    for(let j = 0; j < pokemon.learnset[i].move.length; j++){
      pokemon.moveset.push(pokemon.learnset[i].move[j]);
    }
  }

  return pokemon;
}

module.exports = randomizePokemon;