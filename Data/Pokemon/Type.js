/*
    ATTACK PROPERTIES
    Attack No Effect: This attack type has no effect on the following types
    Attack Not Effective: This attack type is not very effective against the following types
    Attack Neutral: This attack type is effective against the following types
    Attack Super Effective: This attack type is super effective against the following types

    DEFENSE PROPERTIES
    Defense No Effect: The following types have no effect on a pokemon with this type
    Defense Not Effective: The following types are not very effective on a pokemon with this type
    Defense Neutral: The following types are effective against a pokemon with this type
    Defense Super Effective: The following types are super effective against a pokemon with this type

    TYPE MODIFIERS
    Super Effective: 2x
    Neutral: 1x
    Not Very Effective: 1/2x
    Not Effective: 0
  */

const Type = [
  {
    name: "Normal",
    attackNoEffect: ["Ghost"],
    attackNotEffective: ["Rock", "Steel"],
    attackNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Dragon", "Dark", "Fairy"],
    attackSuperEffective: [],
    defenseNoEffect: ["Ghost"],
    defenseNotEffective: ["Rock", "Steel"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Poison", "Ground", "Flying", "Psychic", "Bug", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Fighting"],
  },
  {
    name: "Fire",
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Water", "Rock", "Dragon"],
    attackNeutral: ["Normal", "Electric", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Ghost", "Dark", "Fairy"],
    attackSuperEffective: ["Grass", "Ice", "Bug", "Steel"],
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
    defenseNotEffective: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Ice", "Flying", "Rock", "Ghost", "Dragon", "Dark"],
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
    attackNotEffective: ["Electric", "Rock", "Steel"],
    attackNeutral: ["Normal", "Fire", "Water", "Ice", "Poison", "Ground", "Flying", "Psychic", "Ghost", "Dragon", "Dark", "Fairy"],
    attackSuperEffective: ["Grass", "Fighting", "Bug"],
    defenseNoEffect: ["Ground"],
    defenseNotEffective: ["Grass", "Fighting", "Bug"],
    defenseNeutral: ["Normal", "Fire", "Water", "Poison", "Flying", "Psychic", "Ghost", "Dragon", "Dark", "Steel", "Fairy"],
    defenseSuperEffective: ["Electric", "Ice", "Rock"]
  },
  {
    name: "Psychic",
    attackNoEffect: ["Dark"],
    attackNotEffective: ["Psychic", "Steel"],
    attackNeutral: [],
    attackSuperEffective: ["Fighting", "Poison"],
    defenseNoEffect: [],
    defenseNotEffective: ["Fighting", "Psychic"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Poison", "Ground", "Flying", "Rock", "Dragon", "Steel", "Fairy"],
    defenseSuperEffective: ["Bug", "Ghost", "Dark"]
  },
  {
    name: "Bug",
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    attackNeutral: ["Normal", "Water", "Electric", "Ice", "Ground", "Bug", "Rock", "Dragon"],
    attackSuperEffective: ["Grass", "Psychic", "Dark"],
    defenseNoEffect: [],
    defenseNotEffective: ["Grass", "Fighting", "Ground"],
    defenseNeutral: ["Normal", "Water", "Electric", "Ice", "Poison", "Psychic", "Bug", "Ghost", "Dragon", "Dark", "Steel", "Fairy"],
    defenseSuperEffective: ["Fire", "Flying", "Rock"]
  },
  {
    name: "Rock",
    attackNoEffect: [],
    attackNotEffective: ["Fighting", "Ground", "Steel"],
    attackNeutral: ["Normal", "Water", "Electric", "Grass", "Poison", "Psychic", "Rock", "Ghost", "Dragon", "Fairy"],
    attackSuperEffective: ["Fire", "Ice", "Flying", "Bug"],
    defenseNoEffect: [],
    defenseNotEffective: ["Normal", "Fire", "Poison", "Flying"],
    defenseNeutral: ["Electric", "Ice", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Fairy"],
    defenseSuperEffective: ["Water", "Grass", "Fighting", "Ground", "Steel"]
  },
  {
    name: "Ghost",
    attackNoEffect: ["Normal"],
    attackNotEffective: ["Dark"],
    attackNeutral: ["Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
    attackSuperEffective: ["Psychic", "Ghost"],
    defenseNoEffect: ["Normal", "Fighting"],
    defenseNotEffective: ["Poison", "Bug"],
    defenseNeutral: [],
    defenseSuperEffective: ["Ghost", "Dark"]
  },
  {
    name: "Dragon",
    attackNoEffect: ["Fairy"],
    attackNotEffective: ["Steel"],
    attackNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark"],
    attackSuperEffective: ["Dragon"],
    defenseNoEffect: [],
    defenseNotEffective: ["Fire", "Water", "Electric", "Grass"],
    defenseNeutral: ["Normal", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Steel"],
    defenseSuperEffective: ["Ice", "Dragon", "Fairy"]
  },
  {
    name: "Dark",
    attackNoEffect: [],
    attackNotEffective: ["Fighting", "Dark", "Fairy"],
    attackNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Poison", "Ground", "Flying", "Bug", "Rock", "Dragon", "Steel"],
    attackSuperEffective: ["Psychic", "Ghost"],
    defenseNoEffect: ["Psychic"],
    defenseNotEffective: ["Ghost", "Dark"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Poison", "Ground", "Flying", "Rock", "Dragon", "Steel"],
    defenseSuperEffective: ["Fighting", "Bug", "Fairy"]
  },
  {
    name: "Steel",
    attackNoEffect: [],
    attackNotEffective: ["Fire", "Water", "Electric", "Steel"],
    attackNeutral: ["Normal", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Ghost", "Dragon", "Dark"],
    attackSuperEffective: ["Ice", "Rock", "Fairy"],
    defenseNoEffect: ["Poison"],
    defenseNotEffective: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
    defenseNeutral: ["Water", "Electric", "Ghost", "Dark"],
    defenseSuperEffective: ["Fire", "Fighting", "Ground"]
  },
  {
    name: "Fairy",
    attackNoEffect: [],
    attackNotEffective: [""],
    attackNeutral: ["Normal", "Water", "Electric", "Grass", "Ice", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Fairy"],
    attackSuperEffective: ["Fighting", "Dragon", "Dark"],
    defenseNoEffect: ["Dragon"],
    defenseNotEffective: ["Fighting", "Bug", "Dark"],
    defenseNeutral: ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Ground", "Flying", "Psychic", "Rock", "Ghost", "Fairy"],
    defenseSuperEffective: ["Poison", "Steel"]
  }
];

const TypeModifiers = {
  superEffective: 2.00,
  neutral: 1.00,
  notEffective: 0.5,
  noEffect: 0,
  STAB: 1.50
}

module.exports = Type, TypeModifiers;