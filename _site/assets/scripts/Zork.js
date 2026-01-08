const playerName = prompt("what is your name?:");

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = inputEl.value;
    handleCommand(command);
    inputEl.value = "";
  }
});

let currentRoom = "start";

const rooms = {
  start: {
    description: "You are in a dark room. There is a door to the north.",
    exits: { north: "hallway" },
  },
  hallway: {
    description:
      "You are in a long hallway. There is a door to the south and another one to the east, and a terrifying pantry to the west..",
    exits: { south: "start", east: "treasureRoom", west: "kitchen" },
  },
  treasureRoom: {
    description:
      "You've found the treasure room! There's a massive chest in the center. Congratulations!, You're rich mate!",
    exits: { west: "hallway" },
  },
  kitchen: {
    description:
      "You've entered a dusty kitchen. The air is stale. You see a rusty knife on a wooden block. The only way out is back to the east.Hey there's something shaking and squealing....do you dare to look down?",
    exits: { east: "hallway", down: "butchersBasement" },
  },
  butchersBasement: {
    description:
      "You walk down the creaking stairs into a cold, damp basement. A single bulb reveals hooks hanging from the ceiling. The door slams shut behind you. You are trapped. GAME OVER.",
    exits: {},
  },
};

function handleCommand(command) {
  let output = "";
  const lowerCommand = command.toLowerCase().trim();

  switch (lowerCommand) {
    case "look up":
      output = rooms[currentRoom].description;
      break;

    case "north":
      if (rooms[currentRoom].exits.north) {
        currentRoom = rooms[currentRoom].exits.north;
        output = rooms[currentRoom].description;
      } else {
        output = "You can't go that way.";
      }
      break;

    case "south":
      if (rooms[currentRoom].exits.south) {
        currentRoom = rooms[currentRoom].exits.south;
        output = rooms[currentRoom].description;
      } else {
        output = "You can't go that way.";
      }
      break;

    case "east":
      if (rooms[currentRoom].exits.east) {
        currentRoom = rooms[currentRoom].exits.east;
        output = rooms[currentRoom].description;
      } else {
        output = "You can't go that way.";
      }
      break;

    case "west":
      if (rooms[currentRoom].exits.west) {
        currentRoom = rooms[currentRoom].exits.west;
        output = rooms[currentRoom].description;
      } else {
        output = "You can't go that way.";
      }
      break;

    case "look down":
      if (rooms[currentRoom].exits.down) {
        currentRoom = rooms[currentRoom].exits.down;
        output = rooms[currentRoom].description;
        // Game over logic
        inputEl.disabled = true;
      } else {
        output = "You can't go anywhere down from here.";
      }
      break;

    default:
      output = "Unknown command: " + command;
  }

  outputEl.innerHTML += `<div class="prompt">$></div><div>${command}</div><div>${output}</div>`;
}

// Initial description
outputEl.innerHTML += `<div class="prompt">$></div><div>Habad's Interactive Fiction,Copyright (c) 2025,
Habadcorp, Inc. All rights reserved.
Habad's Interactive fiction is a registered trademark of
HabadCorp, Inc.</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>Welcome to Habad's Interactive Fiction, ${playerName}! The commands are: look up and look down, north/ south/ east/ west</div>`;
outputEl.innerHTML += `<div class="prompt">$></div><div>So hero: ${playerName}! Can you find the treasure before you get chopped up by the zombie butcher?</div>`;
outputEl.innerHTML += `quick tip...always look up first!`;
