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
    owned: false,
    learnset: [
      {
        level: 1,
        move: [Moves[0], Moves[1]]
      },
      {
        level: 5,
        move: [Moves[2]]
      },
      {
        level: 8, 
        move: "Infestation"
      },
      {
        level: 12,
        move: "Scary Face"
      },
      {
        level: 15,
        move: "Night Shade"
      },
      {
        level: 19,
        move: "Shadow Sneak"
      },
      {
        level: 22,
        move: "Fury Swipes"
      },
      {
        level: 26,
        move: "Sucker Punch"
      },
      {
        level: 29,
        move: "Agility"
      },
      {
        level: 33,
        move: "Pin Missle"
      },
      {
        level: 36,
        move: "Psychic"
      },
      {
        level: 40,
        move: "Poison Jab"
      },
      {
        level: 44,
        move: "Cross Poison"
      },
      {
        level: 47,
        move: "Sticky Poison"
      },
      {
        level: 51,
        move: "Toxic Thread"
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
    evolve: [
      { 
        // Spinarak evolves at level 22
        level: 22,
        // Evolves into Ariados
        pokemon: "Ariados"
      }
    ]
  },
  {
    number: "#002",
    name: "Ariados",
    type: [Type[11], Type[7]],
    abilities: [Abilities[0], Abilities[1]],
    genderRatio: 0,
    owned: false,
    learnset: [
      {
        level: 1, 
        move: [
          Moves[0], "Fell Stinger", Moves[2], Moves[3], "Bug Bite", "Focus Energy"
        ]
      },
      {
        level: 8,
        move: ["Infestation"]
      },
      {
        level: 12,
        move: ["Scary Infestation"]
      },
      {
        level: 15,
        move: ["Night Shade"]
      },
      {
        level: 19,
        move: ["Shadow Sneak"]
      },
      {
        level: 23,
        move: ["Fury Swipes"]
      },
      {
        level: 28,
        move: ["Sucker Punch"]
      },
      {
        level: 31,
        move: ["Agility"]
      },
      {
        level: 35,
        move: ["Pin Missle"]
      },
      {
        level: 41,
        move: ["Psychic"]
      },
      {
        level: 46,
        move: ["Poison Jab"]
      },
      {
        level: 50,
        move: ["Cross Poison"]
      },
      {
        level: 54,
        move: ["Sticky Web"]
      },
      {
        level: 59,
        move: ["Toxic Thread"]
      }
    ],
    baseHealth: 70,
    baseAttack: 90,
    baseDefense: 70,
    baseSpAttack: 60,
    baseSpDefense: 70,
    baseSpeed: 40, 
    healthEV: 0,
    attackEV: 0,
    defenseEV: 0,
    spAttackEV: 0,
    spDefenseEV: 0,
    speedEV: 0,
  },
  {
    number: "#003",
    name: "Yanma",
    type: [Type[11], Type[9]],
    abilities: ["Speed Boost", "Compound Eyes"],
    genderRatio: 0.5,
    owned: false,
    learnset: [
      {
        level: 1,
        move: ["Tackle"]
      },
      {
        level: 6,
        move: ["Quick Attack"]
      },
      {
        level: 11,
        move: ["Double Team"]
      },
      {
        level: 14,
        move: ["Air Cutter"]
      },
      {
        level: 17,
        move: ["Detect"]
      },
      {
        level: 22,
        move: ["Supersonic"]
      },
      {
        level: 27,
        move: ["Uproar"]
      },
      {
        level: 30,
        move: ["Bug Bite"]
      },
      {
        level: 33,
        move: ["Ancient Power"]
      },
      {
        level: 38,
        move: ["Hypnosis"]
      },
      {
        level: 43,
        move: ["Wing Attack"]
      },
      {
        level: 46,
        move: ["Screech"]
      },
      {
        level: 49,
        move: ["U-turn"]
      },
      {
        level: 54,
        move: ["Air Slash"]
      },
      {
        level: 57,
        move: ["Bug Buzz"]
      }
    ],
    baseHealth: 65,
    baseAttack: 65,
    baseDefense: 45,
    baseSpAttack: 75,
    baseSpDefense: 45,
    baseSpeed: 95, 
    healthEV: 0,
    attackEV: 0,
    defenseEV: 0,
    spAttackEV: 0,
    spDefenseEV: 0,
    speedEV: 0,
    evolve: [
      {
        // Yanma evolves at level 33
        level: 33,
        // Must have ancient power learned
        moveRequired: "Ancient Power",
        // Evolves into Yanmega
        pokemon: "Yanmega"
      }
    ]
  },
  {
    number: "#004",
    name: "Yanmega",
    type: [Type[11], Type[9]],
    abilities: ["Speed Boost", "Tinted Lens"],
    genderRatio: 0,
    owned: false,
    learnset: [
      {
        level: 1,
        move: ["Tackle", "Double Team", "Night Slash", "Air Slash", "Bug Buzz"]
      },
      {
        level: 14,
        move: ["Quick Attack"]
      },
      {
        level: 17,
        move: ["Detect"]
      },
      {
        level: 22,
        move: ["Supersonic"]
      },
      {
        level: 27,
        move: ["Uproar"]
      },
      {
        level: 30,
        move: ["Bug Bite"]
      },
      {
        level: 33,
        move: ["Ancient Power"]
      },
      {
        level: 38,
        move: ["Feint"]
      },
      {
        level: 43,
        move: ["Slash"]
      },
      {
        level: 46,
        move: ["Screech"]
      },
      {
        level: 49,
        move: ["U-turn"]
      }
    ],
    baseHealth: 86,
    baseAttack: 76,
    baseDefense: 86,
    baseSpAttack: 116,
    baseSpDefense: 56,
    baseSpeed: 95, 
    healthEV: 0,
    attackEV: 0,
    defenseEV: 0,
    spAttackEV: 0,
    spDefenseEV: 0,
    speedEV: 0,
  },
]

module.exports = Pokemon;