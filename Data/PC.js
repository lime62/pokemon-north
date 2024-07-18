class PC{
  // Has a certain amount of boxes that hold a max of ... pokemon
  #boxes
  constructor(){
    this.#boxes = [];
  }

  addPokemon(pokemon){
    this.#boxes.push(pokemon);
  }

  viewBox(idx){
    this.#boxes[idx].forEach(pokemon => {
      console.log(pokemon);
    });
  }
}

module.exports = PC;