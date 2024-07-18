
class TrainerCard {
  name;
  gender;
  badges;

  constructor(){
    this.name = ""
    this.gender = ""
    this.badges = 0;
  }
  
  setDetails(name, gender){
    this.name = name;
    this.gender = gender;
  }

  displayTrainerCard(){
    console.log(`Name: ${this.name}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Badges: ${this.badges}`);
  }
  
  getBadges(){
    return this.badges;
  }
}

module.exports = TrainerCard;