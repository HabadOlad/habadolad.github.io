const canvas = document.querySelector('canvas');

//The identifier (ID) of the type of canvas to create. The HTMLCanvasElement.getContext() method returns a drawing context on the canvas
const ctx = canvas.getContext('2d');

const resoultion = 40;
canvas.width = 400;
canvas.height = 400;

const COLS = canvas.width / resoultion;
const ROWS = canvas.height / resoultion;
//now we need to draw a grid that represents the areas in the game of life.
//This will be 2d element array, this requires a function that will build that grid for us
function buildGrid() {
    return new Array(COLS).fill(null)
      .map(() => new Array(ROWS).fill(null)
        .map(() => Math.floor(Math.random() * 2)));
  }
//make canvas into grids
let grid = buildGrid();

requestAnimationFrame(update);

function update (){
   grid = nextGen(grid);
render(grid) 
requestAnimationFrame(update);
}

//This function 
function nextGen(grid){
 const nextGen = grid.map(arr => [...arr]);
 for (let col = 0; col < grid.length; col ++){
    for (let row = 0; row < grid[col].length; row++){
        const cell = grid[col][row];
        let numNeighbours = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
              continue;
        
    }
    const x_cell = col + i;
    const y_cell = row + j;

    if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
    const currentNeighbours = grid[col + i][row + j];
    numNeighbours += currentNeighbours; 
   }

          }
}
//rules of the game 
if (cell === 1 && numNeighbours < 2) {
    nextGen[col][row] = 0;
} else if  (cell === 1 && numNeighbours > 3){
    nextGen[col][row] = 0;
} else if (cell === 0 && numNeighbours === 3){
   nextGen[col][row] = 1;
}
        }
} 
return nextGen;
}

function render(grid){
    for (let col = 0; col < grid.length; col ++){
        for (let row = 0; row < grid[col].length; row++){
            const cell = grid[col][row];

            ctx.beginPath(); 
            ctx.rect(col * resoultion, row * resoultion, resoultion, resoultion);
            ctx.fillStyle = cell ? 'black' : 'white';
            ctx.fill(); 
            ctx.stroke();
        }
    }

}

//Now we need to define the rules of the game 
//used the game of life conway from the