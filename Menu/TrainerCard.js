
class TrainerCard {
  #name;
  #gender;
  #badges = 0;

  constructor(){
    this.#name = "Player"
    this.#gender = "Male"
  }
  
  setDetails(name, gender){
    this.#name = name;
    this.#gender = gender;
  }
}

module.exports = TrainerCard;