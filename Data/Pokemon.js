// Describes pokemon data of all pokemon (name, type, gender ratio, learnset, etc.)
const Moves = require("./Moves");
const Abilities = require("./Abilities");
const Type = require("./Type");

const Pokemon = [
  {
    number: "#001",
    name: "Spinarak",
    type: [Type[11], Type[7]],
    abilities: [Abilities[0], Abilities[1]],
    genderRatio: 0.5,
    learnset: [
      {
        level: 0, move: [Moves[0], Moves[1]]
      },
      {
        level: 5, move: [Moves[2]]
      }
    ],
    baseHealth: 40,
    baseAttack: 60,
    baseDefense: 40, 
    baseSpAttack: 40,
    baseSpDefense: 40,
    baseSpeed: 30,
    healthEV: 0,
    attackEV: 0,
    defenseEV: 0,
    spAttackEV: 0,
    spDefenseEV: 0,
    speedEV: 0,
  }
]

module.exports = Pokemon;