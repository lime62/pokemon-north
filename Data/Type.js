const Type = [
  {
    name: "Normal",
    //Take these into account when using a normal type move.
    attackNoEffect: ["Ghost"],
    attackNotEffective: ["Rock", "Steel"],
    attackNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Dragon", "Dark", "Fairy"],
    attackSuperEffective: [],
    //Take these into account when a move is used against a normal type pokemon.
    defenseNoEffect: ["Ghost"],
    defenseNotEffective: ["Rock", "Steel"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Poison", "Ground", "Flying", "Psychic", "Bug", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Fighting"],
  },
  {
    name: "Fire",
    //Take these into account when using a fire type move.
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Water", "Rock", "Dragon"],
    attackNeutral: ["Normal", "Electric", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Ghost", "Dark", "Fairy"],
    attackSuperEffective: ["Grass", "Ice", "Bug", "Steel"],
    //Take these into account when a move is used against a fire type pokemon.
    defenseNoEffect: [],
    defenseNotEffective: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    defenseNeutral: ["Normal", "Electric", "Fighting", "Poison", "Flying", "Psychic", "Ghost", "Dragon", "Dark"],
    defenseSuperEffective: ["Water", "Ground", "Rock"]
  },
  {
    name: "Water",
    attackNoEffect: [],
    attackNotEffective: ["Water", "Grass", "Dragon"],
    attackNeutral: ["Normal", "Electric", "Ice", "Fighting", "Posion", "Flying", "Psychic", "Bug", "Ghost", "Dark", "Steel", "Fairy"],
    attackSuperEffective: ["Fire", "Ground", "Rock"],
    defenseNoEffect: [],
    defenseNotEffective: ["Fire", "Water", "Ice", "Steel"],
    defenseNeutral: ["Normal", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Electric", "Grass"]
  },
  {
    name: "Electric",
    attackNoEffect: ["Ground"],
    attackNotEffective: ["Electric", "Grass", "Dragon"],
    attackNeutral: ["Normal", "Fire", "Ice", "Fighting", "Poison", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Steel", "Fairy"],
    attackSuperEffective: ["Water", "Flying"],
    defenseNoEffect: [],
    defenseNotEffective: ["Electric", "Flying", "Steel"],
    defenseNeutral: ["Normal", "Fire", "Water", "Grass", "Ice", "Fighting", "Poison", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark"],
    defenseSuperEffective: ["Ground"]
  },
  {
    name: "Grass",
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    attackNeutral: ["Normal", "Electric", "Ice", "Fighting", "Psychic", "Ghost", "Dark", "Fairy"],
    attackSuperEffective: ["Water", "Ground", "Rock"],
    defenseNoEffect: [],
    defenseNotEffective: ["Water", "Electric", "Grass", "Ground"],
    defenseNeutral: ["Normal", "Fighting", "Psychic", "Rock", "Ghost", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Fire", "Ice", "Poison", "Flying", "Bug"]
  },
  {
    name: "Ice",
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Water", "Ice", "Steel"],
    attackNeutral: ["Normal", "Electric", "Fighting", "Poison", "Psychic", "Bug", "Rock", "Ghost", "Dark"],
    attackSuperEffective: ["Grass", "Ground", "Flying", "Dragon"],
    defenseNoEffect: [],
    defenseNotEffective: ["Ice"],
    defenseNeutral: ["Normal", "Water", "Electric", "Grass", "Poison", "Ground", "Flying", "Psychic", "Bug", "Ghost", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Fire", "Fighting", "Rock", "Steel"]
  },
  {
    name: "Fighting",
    attackNoEffect: ["Ghost"],
    attackNotEffective: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    attackNeutral: ["Fire", "Water", "Electric", "Grass", "Fighting", "Ground", "Dragon"],
    attackSuperEffective: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    defenseNoEffect: [],
    defenseNotEffective: ["Bug", "Rock", "Dark"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Ghost", "Dragon", "Steel"],
    defenseSuperEffective: [""]
  },
  {
    name: "Poison",
    attackNoEffect: ["Steel"],
    attackNotEffective: ["Poison", "Ground", "Rock", "Ghost"],
    attackNeutral: ["Normal", "Fire", "Water", "Electric", "Ice", "Figting", "Flying", "Psychic", "Bug", "Ghost", "Dragon", "Dark"],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: ["Ground", "Psychic"]
  },
  {
    name: "Ground",
    attackNoEffect: ["Flying"],
    attackNotEffective: ["Grass", "Bug"],
    attackNeutral: ["Normal", "Water", "Ice", "Fighting", "Ground", "Psychic", "Ghost", "Dragon", "Dark", "Fairy"],
    attackSuperEffective: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    defenseNoEffect: ["Electric"],
    defenseNotEffective: ["Poison", "Rock"],
    defenseNeutral: ["Normal", "Fire", "Fighting", "Ground", "Flying", "Psychic", "Bug", "Ghost", "Dragon", "Dark", "Steel", "Fairy"],
    defenseSuperEffective: ["Water", "Grass", "Ice"]
  },
  {
    name: "Flying",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Psychic",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Bug",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Rock",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Ghost",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Dragon",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Dark",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Steel",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  },
  {
    name: "Fairy",
    attackNoEffect: [],
    attackNotEffective: [],
    attackNeutral: [],
    attackSuperEffective: [],
    defenseNoEffect: [],
    defenseNotEffective: [],
    defenseNeutral: [],
    defenseSuperEffective: []
  }
];


module.exports = Type;