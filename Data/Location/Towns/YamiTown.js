const Town = require('../Town');
const Building = require('../../Building/Building');
const RouteOne = require('../Routes/RouteOne');

// Set buildings for this town
const PlayerHouse = new Building("Your House", 2, ["Your Room"]);
const RivalHouse = new Building("")
const Lab = new Building("Professor Jet's Lab", 1, ["Main Lab"]);

const buildings = [PlayerHouse, RivalHouse, Lab];

const YamiTown = new Town("Yami Town", buildings);

YamiTown.setMapDescription("A small town near the sea. The residents have bigger hearts than the size of this town!");
YamiTown.setConnectingLocations([RouteOne]);
YamiTown.setNPC(["Mom", "Laura", "Michael", "Professor Jet"]);

module.exports = YamiTown;