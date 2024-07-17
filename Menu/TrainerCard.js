
class TrainerCard {
  #name;
  #gender;
  #badges = 0;

  constructor(){
    this.#name = ""
    this.#gender = ""
  }
  
  setDetails(name, gender){
    this.#name = name;
    this.#gender = gender;
  }

  displayTrainerCard(){
    console.log(`Name: ${this.#name}`);
    console.log(`Gender: ${this.#gender}`);
    console.log(`Badges: ${this.#badges}`);
  }
}

module.exports = TrainerCard;