// Contains the player class for the game that describes trainers
const Party = require('../Menu/Party');
const Pokedex = require('../Menu/Pokedex');
const Pokemon = require('./Pokemon');
const TrainerCard = require('../Menu/TrainerCard');

class Player{
  #name;
  #gender;
  #badges;
  #Pokedex = Pokedex;
  #TrainerCard = TrainerCard;
  Party;

  constructor(name, gender){
    this.#name = name;
    this.#gender = gender;
    this.#badges = 0;
    this.Party = new Party();
  }

  getName(){
    return this.#name;
  }

  setTrainerCard(){
    this.#TrainerCard.name = this.#name;
    this.#TrainerCard.gender = this.#gender;
    this.#TrainerCard.badges = this.#badges;
  }

  viewTrainerCard(){
    console.log(this.#TrainerCard.name);
    console.log(this.#TrainerCard.gender);
    console.log(this.#TrainerCard.badges);
  }

  viewPokedex(){
   this.#Pokedex.forEach(pokemon => {
    console.log(pokemon.number);
    console.log(pokemon.name);
    console.log(pokemon.type);
   });
  }
}

module.exports = Player;