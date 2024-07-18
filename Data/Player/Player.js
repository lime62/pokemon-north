// Contains the player class for the game that describes trainers
const Party = require('../../Menu/Party');
const Pokedex = require('../../Menu/Pokedex');
const TrainerCard = require('../../Menu/TrainerCard');
const Pokemon = require('../Pokemon/Pokemon');

class Player{
  name;
  gender;
  #Pokedex;
  TrainerCard;
  Party;

  constructor(name, gender){
    this.name = name;
    this.gender = gender;
    this.Party = new Party();
    this.TrainerCard = new TrainerCard();
    this.TrainerCard.setDetails(this.name, this.gender);
    this.#Pokedex = new Pokedex(Pokemon);
  }

  getName(){
    return this.name;
  }

  getParty(){
    return this.Party.getPokemon();
  }

  getPokedex(){
    return this.#Pokedex.getDex();
  }

  getOwned(){
    return this.#Pokedex.ownedPokemon();
  }

  getTrainerCard(){
    return this.TrainerCard.displayTrainerCard();
  }

  getBadges(){
    return this.TrainerCard.getBadges();
  }
}

module.exports = Player;