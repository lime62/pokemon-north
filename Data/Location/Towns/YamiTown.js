const Town = require('../Base/Town');
const Building = require('../../Building/Base/Building');
const RouteOne = require('../Routes/RouteOne');
const NPC = require('../../Player/NPC');

// Set buildings for this town
const PlayerHouse = new Building("Your House", 2, ["Downstairs", "Your Room"]);
const RivalHouse = new Building("Friend's House", 1, ["Downstairs", "Friend's Room"])
const Lab = new Building("Professor Jet's Lab", 1, ["Main Lab"]);

// Set the NPCs for this town, dialogue will be an array of objects
const Mom = new NPC("Mom");

// Set the states for her dialogue that correspond to each dialogue index
Mom.setState({
  intro: true,
  default: false
}

);
Mom.setDialogue(
  [
    "\tThe time has come for you to go off on your own and build your own story! Professor Jet is looking for you."
  ],
  [
    "\tCome get some rest!",
  ]
);

// Defining Laura as an NPC
const Laura = new NPC("Laura");

// Laura only has one default line
Laura.setState([{
  default: true
}
]);

Laura.setDialogue(
  ["\tI'm raising pokemon too! One day they are going to be very strong and protect me."]
);

// Defining Michael as an NPC 
const Michael = new NPC("Michael");

// Michael only has one default line
Michael.setState([{
  default: true
}]);

Michael.setDialogue(
  ["\tYou can store and recall pokemon and items in your PC. This new tech stuff is awesome!"]
);


// Defining the professor as an NPC object
const ProfessorJet = new NPC("Professor Jet")

// Times where professor jet should say a certain dialogue
ProfessorJet.setState(
{
  tryToLeave: true,
  showStarter: false,
  playerViewed: false,
playerSelected: false
}
);

// Different dialogues professor jet has
ProfessorJet.setDialogue(
  [
      "\tHey there, please wait! It's too dangerous to go out.",
      "\tWild pokemon live in the grass up ahead. They can be found all over this region.",
      "\tYou need your own pokemon for protection. Please come with me!"
  ], 
  [
      "\t There are three pokemon here! They are inside these pokeballs.",
      "\tI only have three left, you can choose one to be your friend!",
      "\tSo, which pokemon will you choose?"
  ],
  [
      "\tAh, so this is the pokemon you'd like?"
  ],
  [
      "\tThis one is a firecracker!"
  ]
)


// Initializing all the buildings for Yami Town
const buildings = [PlayerHouse, RivalHouse, Lab];

// Initializing Yami Town
const YamiTown = new Town("Yami Town", buildings);

// Setting the map description, nearby locations and npcs of the town
YamiTown.setMapDescription("A small town near the sea. The residents have bigger hearts than the size of this town!");
YamiTown.setConnectingLocations([RouteOne]);
YamiTown.setNPC([Mom, Laura, Michael, ProfessorJet]);

module.exports = { YamiTown, Mom, Laura, Michael, ProfessorJet }