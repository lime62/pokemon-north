class NPC{
  #name
  #dialogue
  #state
  constructor(name){
    this.#name = name;
  }

  setDialogue(dialogue){
    this.#dialogue = dialogue;
  }

  setState(state){
    this.#state = state;
  }

  getDialogue(){
    return this.#dialogue;
  }

  getName(){
    return this.#name;
  }

  getState(){
    return this.#state;
  }

  // Sends the dialogue if a state is true.
  stateHandler(){
    const states = Object.values(this.#state);
    for(let i = 0; i < states.length; i++){
      if(states[i]){
        //CHANGE STATE TO FALSE AND NEXT TO TRUE
        states[i] = false;
        states[i + 1] = true;
        return this.#dialogue[i];
      }
    }
    return -1;
  }
}

module.exports = NPC;