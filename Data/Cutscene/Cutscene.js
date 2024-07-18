const readlineSync = require('readline-sync');
const Player = require('../Player/Player');
const GameState = require('../../Save/GameState');

function Introduction(){
console.log("Jet:\tHello! Welcome to the world of Pokemon! My name is Jet!");
console.log("\tPeople call me the Pokemon Professor!\n");
console.log("Jet:\tThis world is inhabited by creatures called Pokemon! For some");
console.log("\tpeople, Pokemon are pets. Others use them for fights. Myself...");
console.log("\tI study Pokemon as a profession.\n");
const name = readlineSync.question("Jet:\tWhat is your name: ");
console.log(`\nJet:\tAh, so your name is ${name}.\n`)
const gender = readlineSync.question("Jet:\tWhat is your gender: ");

// Creates a new player
const player = new Player(name, gender);
GameState.player = player;

console.log('\nJet:\tYou will embark on a journey with your best friend.');
const rivalName = readlineSync.question("\t....Err, what is his name again: ");
console.log(`\nJet:\tOh yes, it's all coming together now.. His name is ${rivalName}!`);
console.log(`\nJet:\t${name}... Your very own adventure awaits you!`);
console.log('\tHopes... Dreams... You can really make turn those to reality when you put your mind to it!');
console.log('\tEven if your as old as me! Hahaha.. Good luck!\n');
// Cutscene for introduction is over
GameState.cutsceneOn = false;

// Updating player's location to start at their home town.
GameState.location = "Yami Town";
// Cutscene for home town is now on
GameState.cutsceneOn = true;
}

function YamiTown(){
  console.log("Welcome to Yami Town!");
  GameState.cutsceneOn = false;
  // Lets player do their actions basically
  GameState.overworld = true;
}

module.exports = { Introduction, YamiTown }
