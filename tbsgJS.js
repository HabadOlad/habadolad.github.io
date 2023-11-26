const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value;
        handleCommand(command);
        inputEl.value = '';
    }
});

let currentRoom = 'start';

const rooms = {
    start: {
        description: "You are in a dark room. There is a door to the north.",
        exits: {north: 'hallway'},
    },
    hallway: {
        description: "You are in a long hallway. There is a door to the south and another one to the east.",
        exits: {south: 'start', east: 'treasureRoom'},
    },
    treasureRoom: {
        description: "You've found the treasure room! There's a massive chest in the center. Congratulations!, You're rich mate!",
        exits: {west: 'hallway'},
    }
    
};

function handleCommand(command) {
    let output = '';

    switch(command) {
        case 'look':
            output = rooms[currentRoom].description;
            break;

        case 'go north':
            if(rooms[currentRoom].exits.north) {
                currentRoom = rooms[currentRoom].exits.north;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go south':
            if(rooms[currentRoom].exits.south) {
                currentRoom = rooms[currentRoom].exits.south;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go east':
            if(rooms[currentRoom].exits.east) {
                currentRoom = rooms[currentRoom].exits.east;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go west':
            if(rooms[currentRoom].exits.west) {
                currentRoom = rooms[currentRoom].exits.west;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        default:
            output = 'Unknown command: ' + command;
    }

    outputEl.innerHTML += `<div class="prompt">$></div><div>${command}</div><div>${output}</div>`;
}

// Initial description
outputEl.innerHTML += `<div class="prompt">$></div><div>Welcome to Habad's Interactive Fiction! The commands are: look, go north/go south/go east/go west</div><div>${rooms[currentRoom].description}</div>`;