//Stores an array of objects containing all move data in the game!
const Moves = [
  {
    name: "Poison Sting",
    type: "Poison",
    battleEffect: "The user stabs the target with a poisonous stinger to inflict damage. This may also poison the target.",
    secondaryEffect: "May induce posion.",
    effectRate: 0.3,
    basePower: 0,
    accuracy: 1.00,
    powerPoints: 35,
    category: "Physical"
  },
  {
    name: "String Shot",
    type: "Bug",
    description: "The user blows silk from its mouth that binds opposing Pokémon and harshly lowers their Speed stats.",
    secondaryEffect: "Lowers opponent's Speed two stages.",
    effectRate: 1.00,
    basePower: 0,
    accuracy: 0.95,
    powerPoints: 40,
    category: "Status"
  },
  {
    name: "Absorb",
    type: "Grass",
    battleEffect: "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target.",
    secondaryEffect: "User recovers half the damage inflicted.",
    effectRate: 1.00,
    basePower: 20,
    accuracy: 1.00,
    powerPoints: 25,
    category: "Special"
  }
]

module.exports = Moves;