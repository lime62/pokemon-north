class Building{
  #name
  #occupants
  #floors
  #rooms

  constructor(name, floors, rooms){
    this.#name = name;
    this.#floors = floors;
    this.#rooms = rooms;
  }

  //Basically expects NPCS
  setOccupants(occupants){
    this.#occupants = occupants;
  }

  getName(){
    return this.#name;
  }

  getOccupants(){
    return this.#occupants;
  }

  getFloors(){
    return this.#floors;
  }

  getRooms(){
    return this.#rooms;
  }
}

module.exports = Building;