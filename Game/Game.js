const Player = require('../Data/Player');

const player = new Player("Margaret", "F");
player.setTrainerCard();

console.log("Welcome to the world of pokemon!");
console.log("Your first pokemon is Spinarak.");

player.Party.initializeParty();
console.log("Spinarak has been added to your party.");
player.Party.viewParty();

